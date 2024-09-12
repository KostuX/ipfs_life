/* eslint-disable react-hooks/rules-of-hooks */
import DefaultLayout from "@/layouts/default";
import { ironOptions } from "../config/session_config.js";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import stats_fromIPFS from "./api/database/queries/getStatsFromIPFS";
import stats_toIPFS from "./api/database/queries/getStatsToIPFS";
import WorkerInfo from "./api/classes/workers/workerInfo";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

import { timeAgo } from "../lib/time-ago.ts";

import {
  Button,
  Tabs,
  Tab,
  CardBody,
  Card,
  CardHeader,
  Divider,
  CardFooter,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  ComposedChart,
  XAsis,
} from "recharts";

import { useState, useEffect } from "react";

export default function stats({ session }) {
  session = JSON.parse(session);
  let statsFrom = session.stats.statsFrom;
  let statsTo = session.stats.statsTo;
  const [logs, setLogs] = useState([]);

  function readableDate(date) {
    let currentDate = new Date(date);

    const formater = new Intl.DateTimeFormat("en-UK", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    let time = formater.format(currentDate);
    return time;
  }
  async function getLogs(type) {
    let logs = [];

    const options = {
      method: "POST",

      body: type,
    };
    let endpoint = "/api/logAPI";
    let response = await fetch(endpoint, options);

    let log = await response.json();
    if (log.ok) {
      let text = log.data;
      text.forEach((e) => {
        if (e.length > 0) {
          let data = JSON.parse(e);

          if (data.data && Object.keys(data.data).length > 0) {
            logs.push(data);
          }
        }
      });
    }
    setLogs(logs);

    return logs;
  }

  function bPerS(size, time) {
    let value = bytesToMB(size) / time;

    return value > 0 ? parseFloat(value) : 0.001;
  }

  function bytesToMB(data) {
    return data / (1024 * 1024);
  }
  function msToS(ms) {
    return ms / 1000;
  }
  let stats_dataKeys = [
    "File size (MB)",
    "Total Time (MB/s)",
    "IPFS (MB/s)",
    "Upload and Chunking (MB/s) ",
    "Post Processing(ms)",
  ];
  function dataToTimePerByte(data) {
    let units = [];
    let size = [];
    let totTime = [];
    let totIPFS = [];
    let firstChunk = [];
    let internalStart = [];
    let afterIPFS = [];
    data.forEach((e) => {
      let unit = {};
      //let size = e.size;

      let start = Date.parse(e.start);
      let done = Date.parse(e.done);
      let ipfs_start = Date.parse(e.ipfs_start);
      let ipfs_end = Date.parse(e.ipfs_end);

      unit.name = e.cid;
      size.push({ data: bytesToMB(e.size), title: "Size" });
      totTime.push({
        data: bytesToMB(e.size) / msToS(done - start),
        name: e.cid,
        title: "Total Time",
      });
      totIPFS.push({
        data: bytesToMB(e.size) / msToS(ipfs_end - ipfs_start),
        name: e.cid,
        title: "IPFS",
      });

      internalStart.push({
        data: bytesToMB(e.size) / msToS(ipfs_start - start),
        name: e.cid,
        title: "Internal start",
      });

      afterIPFS.push({
        data: ipfs_end - done,
        name: e.cid,
        title: "PostProcess",
      });
    });

    units.push(size);
    units.push(totTime);
    units.push(totIPFS);
    units.push(internalStart);
    //units.push(afterIPFS);

    return units;
    //console.log(Date.parse(statsFrom.created) - Date.parse(statsFrom.done));
    //  size: '24',
    // start: '2024-01-19T18:36:26.481Z',
    // ipfs_start: '2024-01-19T18:36:26.486Z',
    // ipfs_end: '2024-01-19T18:36:26.518Z',
    // done: '2024-01-19T18:36:27.536Z',
    // created: '2024-01-19T18:36:27.480Z'
  }

  let data_plot = dataToTimePerByte(statsTo);

  function getStats(data) {
    let sum = 0;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let avg = 0;
    let tot = 0;

    data.forEach((e) => {
      let val = parseFloat(e.data);
      sum += val;
      if (val > max) {
        max = val;
      }
      if (val < min) {
        min = val;
      }
      tot += 1;
    });
    avg = sum / tot;

    return { max, min, avg, tot };
  }

  function getDistribution(data) {
    let stats = getStats(data);

    let max = stats.max;
    let min = stats.min;
    let tot = stats.tot;
    let buckets = 20;
    let bucketSize = max / buckets;
    let unit = [];

    for (let i = 0; i <= buckets; i++) {
      unit.push({ data: 0 });
    }

    for (let i = 0; i < data.length; i++) {
      try {
        unit[Math.round(data[i].data / bucketSize)].data += 1;
      } catch (error) {}
    }

    return unit;
  }

  // ======================================================================================== media player

  return (
    <DefaultLayout session={session}>
      <div
        className="w-full flex flex-col gap-2  justify-center  items-center"
        style={{ marginTop: 50 }}
      >
        <Tabs aria-label="Options" className="text-center">
          <Tab
            key="Stats"
            title="Stats"
            className=" gap-5 grid grid-cols-1 text-center "
          >
            {data_plot.map((data, index) => (
              <Card key={index}>
                <CardHeader className="flex gap-3">
                  {stats_dataKeys[index]}
                </CardHeader>

                <CardBody className=" gap-5 grid grid-cols-2 text-center ">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey={0} />
                    <YAxis />
                    <Tooltip />

                    <Bar
                      dataKey={"data"}
                      fill="green"
                      activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />
                  </BarChart>

                  <BarChart
                    width={500}
                    height={300}
                    data={getDistribution(data)}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey={0} />
                    <YAxis />
                    <Tooltip />

                    <Bar
                      dataKey={"data"}
                      fill="#8884d8"
                      activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />
                  </BarChart>
                </CardBody>

                <CardFooter className=" gap-5 grid grid-cols-3  ">
                  <p> Min: {getStats(data).min.toFixed(2)}</p>
                  <p>Max: {getStats(data).max.toFixed(2)}</p>
                  <p>Average: {getStats(data).avg.toFixed(2)}</p>
                </CardFooter>
              </Card>
            ))}
          </Tab>

          <Tab
            key="Worker"
            title="Worker"
            className="grid grid-cols-3 text-center "
          >
            {session.stats.workers.map((data, index) => (
              <Card
                key={index}
                className=" mx-4 max-w-[540px] w-[300px] "
                style={{
                  shadow: "md",
                  boxShadow: `8px 8px 8px  rgba(${
                    Date.now() - data.lastSeen < 180000
                      ? "0, 255, 0, 0.2"
                      : "255, 0, 0, 0.2"
                  })`,
                }}
              >
                <CardHeader className=" ml-3 flex gap-3">
                  {data.name}
                </CardHeader>
                <Divider />

                <CardBody className="m-3 overflow-visible p-0">
                  <p>Serving Users: {data.userCount}</p>
                  <p>{data.address}</p>
                  <p>
                    {data.connection.ip}:{data.connection.port}
                  </p>
                  <p>Last Seen: {timeAgo(data.lastSeen)} ago</p>
                </CardBody>
              </Card>
            ))}
          </Tab>
          <Tab key="Logs" title="Logs" className=" gap-20   text-center ">
            <div>
              <Button
                onClick={(e) => {
                  getLogs("ERROR");
                }}
              >
                Read ERRORs
              </Button>
              <Button
                onClick={(e) => {
                  getLogs("INFO");
                }}
              >
                Read Info
              </Button>

              <Card className=" mt-10 mx-8 flex items-center justify-center  ">
                <CardBody>
                  {logs.map((data, index) => (
                    <li
                      key={index}
                      style={{
                        color: `${data.type == "ERROR" ? "red" : "white"} `,
                      }}
                    >
                      {readableDate(data.date)}
                      {" [*] "}
                      {data.type}
                      {": "}
                      {JSON.stringify(data.data)}
                    </li>
                  ))}
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </DefaultLayout>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context) {
    let session = await getServerSession(
      context?.req,
      context?.res,
      authOptions
    );

    let statsFrom = await stats_fromIPFS(10000, () => {});
    let statsTo = await stats_toIPFS(10000, () => {});

    let workers = WorkerInfo.getList();

    if (!session) {
      session = {};

      let address = context.req.socket.remoteAddress;
      let port = context.req.socket.remotePort;
      session.connection = { address: address, port: port };
      session.created = Date.now();
      session.user = context?.req?.session?.user;
    }

    session.stats = {
      workers: workers,
      statsTo: statsTo,
      statsFrom: statsFrom,
    };

    if (session.user) {
      return {
        props: {
          session: JSON.stringify(session),
        },
      };
    } else {
      return { notFound: true };
    }
  },
  ironOptions
);
