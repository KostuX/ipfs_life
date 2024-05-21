/* eslint-disable react-hooks/rules-of-hooks */
import DefaultLayout from "@/layouts/default";
import { ironOptions } from "./api/session/session_config.js";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import history_db from "./api/database/queries/getHistory.js";
import db_pins from "./api/database/queries/getPins";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

import { timeAgo } from "../lib/time-ago.ts";

import {
  Tabs,
  Tab,
  CardBody,
  ButtonGroup,
  TableHeader,
  Table,
  TableColumn,
  Card,
  CardHeader,
  Divider,
  CardFooter,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Progress,
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
import clipboard from "clipboard-copy";

export default function stats({ session }) {
  let pin_allowance = 1000 * 1000 * 1000;
  session = JSON.parse(session);
  const [snackMessage, setSnackMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [pinUsage, setpinUsage] = useState(0);
  const router = useRouter();
  let history = [];
  let uploads = [];
  let downloads = [];
  let pins = [];

  if (session?.history) {
    history = session.history;
    uploads = history.uploads;
    downloads = history.downloads;
  }
  pins = session.pins;
  async function copyCID(cid) {
    notification(cid);
    await clipboard(cid);
  }
  async function cidToEmail(cid) {
    const endpoint = `./api/sendEmailAPI`;

    const options = {
      method: "POST",
      headers: { "Content-type": "appliction/json" },
      body: JSON.stringify({ cid: cid }),
    };

    fetch(endpoint, options);
  }
  async function redirect(cid) {
    router.push(`/?cid=${cid}`);
  }

  async function unpin(cid) {
    let data = { cid: cid };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch("/api/unpinAPI", options);

    let res = await response.json();

    router.replace(router.asPath);
  }

  function notification(msg) {
    let message = `Copied to clipboard: ${msg}`;
    setSnackMessage(message);
    setOpen(true);
  }
  function trimCID(cid) {
    let middle = " ..... ";
    let first3 = cid.substring(0, 4);
    let last3 = cid.substring(cid.length - 5, cid.length);

    return `${first3}${middle}${last3}`;
  }
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

  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      "Bytes",
      "KiB",
      "MiB",
      "GiB",
      "TiB",
      "PiB",
      "EiB",
      "ZiB",
      "YiB",
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  //pin_allowance
  let totUsage = 0;
  pins.forEach((e) => {
    totUsage += parseInt(e.size);
  });
  totUsage = (totUsage / pin_allowance) * 100;

  function previewBtn(ext, cid) {
    let mediaTypes = ["mp4", "mp3"];
    if (mediaTypes.includes(ext)) {
      return (
        <Button
          onClick={(event) => {
            router.push(`media?cid=${cid}`);
          }}
        >
          Preview
        </Button>
      );
    }
  }

  return (
    <DefaultLayout session={session}>
      <div
        className="w-full flex flex-col gap-2  justify-center  items-center"
        style={{ marginTop: 50 }}
      >
        <Tabs aria-label="Options" className="text-center">
          <Tab key="Pin" title="Pins" className="max-w-[900px] gap-20  ">
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-red-500 to-green-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Usage"
              value={totUsage}
              showValueLabel={true}
            />
            <div style={{ marginTop: 30 }}>
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>Provider</TableColumn>
                  <TableColumn>ContentID</TableColumn>
                  <TableColumn>Filename</TableColumn>
                  <TableColumn>Size</TableColumn>

                  <TableColumn>Date</TableColumn>
                  <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody
                  emptyContent={
                    "No rows to display. You may have no items pinned"
                  }
                >
                  {pins.map((e) => (
                    <TableRow key={e.cid}>
                      <TableCell>{e.provider}</TableCell>
                      <TableCell>{trimCID(e.cid)}</TableCell>
                      <TableCell>{`${e.filename}`}</TableCell>
                      <TableCell>{formatBytes(e.size)}</TableCell>
                      <TableCell>{readableDate(e.created)}</TableCell>
                      <TableCell>
                        <ButtonGroup size="sm">
                          <Button
                            onClick={(event) => {
                              copyCID(e.cid);
                            }}
                          >
                            Copy CID
                          </Button>
                          <Button
                            onClick={(event) => {
                              redirect(e.cid);
                            }}
                          >
                            Download
                          </Button>
                          <Button
                            isDisabled={!session.user}
                            onClick={(event) => {
                              cidToEmail(e.cid);
                            }}
                          >
                            To email
                          </Button>

                          <Button
                            isDisabled={!session.user}
                            onClick={(event) => {
                              unpin(e.cid);
                            }}
                          >
                            Unpin
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tab>

          <Tab key="Stats" title="Uploads" className=" gap-5  text-center ">
            <div style={{ marginTop: 30 }}>
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>ContentID</TableColumn>
                  <TableColumn>Filename</TableColumn>
                  <TableColumn>Size</TableColumn>
                  <TableColumn>Date</TableColumn>
                  <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody
                  emptyContent={
                    "No rows to display. Ensure that you have entered correct tag"
                  }
                >
                  {uploads.map((e) => (
                    <TableRow key={e.cid}>
                      <TableCell>{trimCID(e.cid)}</TableCell>
                      <TableCell>{`${e.filename}.${e.ext}`}</TableCell>
                      <TableCell>{formatBytes(e.size)}</TableCell>
                      <TableCell>{readableDate(e.created)}</TableCell>
                      <TableCell>
                        <ButtonGroup size="sm">
                          <Button
                            onClick={(event) => {
                              copyCID(e.cid);
                            }}
                          >
                            Copy CID
                          </Button>
                          <Button
                            onClick={(event) => {
                              redirect(e.cid);
                            }}
                          >
                            Download
                          </Button>
                          <Button
                            isDisabled={!session.user}
                            onClick={(event) => {
                              cidToEmail(e.cid);
                            }}
                          >
                            To email
                          </Button>
                          {previewBtn(e.ext, e.cid)}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Tab>

          <Tab
            key="Download"
            title="Downloads"
            className="max-w-[900px] gap-20  "
          >
            {" "}
            <div style={{ marginTop: 30 }}>
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>ContentID</TableColumn>
                  <TableColumn>Filename</TableColumn>
                  <TableColumn>Size</TableColumn>

                  <TableColumn>Date</TableColumn>
                  <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody
                  emptyContent={
                    "No rows to display. Ensure that you have entered correct tag"
                  }
                >
                  {downloads.map((e) => (
                    <TableRow key={e.cid}>
                      <TableCell>{trimCID(e.cid)}</TableCell>
                      <TableCell>{`${e.filename}.${e.ext}`}</TableCell>
                      <TableCell>{formatBytes(e.size)}</TableCell>
                      <TableCell>{readableDate(e.created)}</TableCell>
                      <TableCell>
                        <ButtonGroup size="sm">
                          <Button
                            onClick={(event) => {
                              copyCID(e.cid);
                            }}
                          >
                            Copy CID
                          </Button>
                          <Button
                            onClick={(event) => {
                              redirect(e.cid);
                            }}
                          >
                            Download
                          </Button>
                          <Button
                            isDisabled={!session.user}
                            onClick={(event) => {
                              cidToEmail(e.cid);
                            }}
                          >
                            To email
                          </Button>
                          {previewBtn(e.ext, e.cid)}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

    if (!session) {
      session = {};
    
      let address = context.req.socket.remoteAddress;
      let port = context.req.socket.remotePort;
      session.connection = { address: address, port: port };
      session.created = Date.now();
      session.user = context?.req?.session?.user;
    }
    if (session?.user) {
      let history = await history_db(session.user, 10000, () => {});
      let uploads = [];
      let downloads = [];

      history.forEach((e) => {
        if (e.type == "upload") {
          uploads.push(e);
        } else if (e.type == "download") {
          downloads.push(e);
        }
      });

      session.history = { uploads, downloads };
      let pins = await db_pins(session.user);
      session.pins = pins;
    }

    return {
      props: {
        session: JSON.stringify(session),
      },
    };
  },
  ironOptions
);
