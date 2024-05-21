import DefaultLayout from "@/layouts/default";
import { ironOptions } from "./api/session/session_config";
import { withIronSessionSsr } from "iron-session/next";
import axios from "axios";
import { useRouter } from "next/router";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import {
  Tabs,
  Tab,
  CardBody,
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ButtonGroup,
  Button,
  Input,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";

import myValidator from "./api/classes/myValidator";

export default function UserSettings({ session }) {
  session = JSON.parse(session);

  const validator = new myValidator();

  const [input_passkey, setInput_passkey] = useState("");
  const [input_title, setInput_title] = useState("");
  const [errMsg, setErrMsg] = useState([]);
  const router = useRouter();

  async function createKey() {
    let err = [];
    let passkey = input_passkey;
    let title = input_title;

    let valid_passkey = validator.text(passkey, 6, 64, "Passkey", true).err;
    let valid_title = validator.text(title, 6, 64, "Name", true).err;

    err = err.concat(valid_passkey).concat(valid_title);

    if (err.length > 0) {
      setErrMsg(err);
    } else {
      const endpoint = `./api/keyAPI`;
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          task: "add",
          password: input_passkey,
          title: input_title,
        }),
      };

      const res = await fetch(endpoint, options);
      const response = await res.json();

      /*
  let response = await axios.post(
    endpoint,
    { task:"add" , password:input_passkey, title:input_title},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

*/

      if (response.ok) {
        setInput_passkey("");
        setInput_title("");
        // window.location.reload();
        router.push("/settings");
      } else {
        setErrMsg(response.msg);
      }
    }
  }

  async function removeKey(title) {
    const endpoint = `./api/keyAPI`;
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ task: "remove", title: title }),
    };

    const res = await fetch(endpoint, options);
    const response = await res.json();

    /*

  let response = await axios.post(
    endpoint,
    { task:"remove" , title:title},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
*/
    if (response.ok) {
      //window.location.reload();
      router.push("/settings");
    }
  }

  return (
    <DefaultLayout session={session}>
      <div
        className="w-full flex flex-col gap-2  justify-center"
        style={{ marginTop: 50 }}
      >
        <Tabs aria-label="Options">
          <Tab key="keys" title="Keys">
            <Card>
              <CardBody>
                <Table aria-label="table">
                  <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Created</TableColumn>
                    <TableColumn>Action</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {session.keys.map((e) => (
                      <TableRow key={e.title}>
                        <TableCell>{e.title}</TableCell>
                        <TableCell>{e.created}</TableCell>
                        <TableCell>
                          <ButtonGroup size="sm">
                            <Button
                              isDisabled={e.title == "default"}
                              onClick={(event) => {
                                removeKey(e.title);
                              }}
                            >
                              Remove
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
            <div className="flex flex-row gap-5 mt-20  justify-center">
              <div className="w-full flex flex-col gap-2 max-w-[240px]">
                <Input
                  value={input_title}
                  isRequired
                  label="Name"
                  size="s"
                  labelPlacement="outside-left"
                  onInput={(e) => setInput_title(e.target.value)}
                />
                <Input
                  value={input_passkey}
                  type="password"
                  isRequired
                  label="Passkey"
                  size="s"
                  labelPlacement="outside-left"
                  onInput={(e) => setInput_passkey(e.target.value)}
                />
                <Button
                  onClick={(event) => {
                    createKey();
                  }}
                >
                  Create New
                </Button>
                <div style={{ color: "red" }}>
                  {errMsg.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>

          <Tab key="email" title="Email">
            <Card>
              <CardBody>{session.user.email}</CardBody>
            </Card>
          </Tab>
          <Tab key="pref" title="Preferances">
            <Card>
              <CardBody>prefs</CardBody>
            </Card>
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
      session.keys = context?.req?.session?.keys;
    }

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
