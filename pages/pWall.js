/* eslint-disable react-hooks/exhaustive-deps */
import DefaultLayout from "@/layouts/default";
import clipboard from "clipboard-copy";
import { ironOptions } from "./api/session/session_config";
import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import { Snackbar, Slide } from "@mui/material";
import myValidator from "./api/classes/myValidator";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ipfsTooltip, pWallTooltip } from "../public/templates/tooltip/tooltip";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";
import {
  Button,
  Input,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";

export default function WallPage({ session }) {
  session = JSON.parse(session);
  const validator = new myValidator();
  const router = useRouter();

  const [input, setInput] = useState("");
  const [tableItems, setTableItems] = useState([]);

  const [err_msg, setErr_msg] = useState([]);

  const [isSubmited, setIsSubmited] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmited(true);

    let input_valid = validator.text(input, 0, 255, "Tag", true);

    if (input_valid.ok) {
      let endpoint = "/api/getByTagApi";
      let data = { tag: input };

      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch(endpoint, options);
      let res = await response.json();

      setIsSubmited(false);

      if (res.ok) {
        let items = res.data;

        setTableItems(items);
      }
    } else {
      setErr_msg([input_valid.err]);
      setIsSubmited(false);
    }
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
  }

  const [open, setOpen] = useState(false);
  function notification(msg) {
    let message = `Copied to clipboard: ${msg}`;
    setSnackMessage(message);
    setOpen(true);
  }

  async function redirect(cid) {
    router.push(`/?cid=${cid}`);
  }

  async function copyCID(cid) {
    notification(cid);
    await clipboard(cid);
  }

  function spinner() {
    if (isSubmited) {
      return <Spinner label="Searching..." size="sm" color="default" />;
    } else {
      return <Button onClick={handleSubmit}>Submit</Button>;
    }
  }

  function trimCID(cid) {
    let middle = " ..... ";
    let first3 = cid.substring(0, 4);
    let last3 = cid.substring(cid.length - 5, cid.length - 1);

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

  function table() {
    if (tableItems) {
      return (
        <div style={{ marginTop: 30 }}>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>ContentID</TableColumn>
              <TableColumn>Filename</TableColumn>
              <TableColumn>Type</TableColumn>
              <TableColumn>Secured</TableColumn>
              <TableColumn>Date</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody
              emptyContent={
                "No rows to display. Ensure that you have entered correct tag"
              }
            >
              {tableItems.map((e) => (
                <TableRow key={e.cid}>
                  <TableCell>{trimCID(e.cid)}</TableCell>
                  <TableCell>{`${e.filename}.${e.ext}`}</TableCell>
                  <TableCell>{e.type}</TableCell>
                  <TableCell>{e.secured}</TableCell>
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
                      {previewBtn(e.ext, e.cid)}
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }
  }
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();

        console.log(input);
        handleSubmit(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [input, handleSubmit]);

  return (
    // <MediaRenderer src="ipfs://CID" />
    <DefaultLayout session={session}>
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 30 }}
      >
        <Grid xs={3} item={true} style={{}}></Grid>
        <Grid xs={6} item={true} style={{}} justify="center">
          <Input
            type="text"
            isClearable="true"
            placeholder={input ? input : "Search by Tag"}
            onInput={(e) => setInput(validator.clean(e.target.value))}
          />
          <div style={{ color: "red" }}>
            {err_msg.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </Grid>
        <Grid xs={3} item={true}>
          {" "}
        </Grid>
      </Grid>
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 25 }}
      >
        <Grid xs={2} item={true}></Grid>
        <Grid
          xs={8}
          item={true}
          style={{}}
          className="flex justify-center items-center"
        >
          {spinner()}
        </Grid>
      </Grid>

      {table()}

      <Snackbar
        TransitionComponent={TransitionLeft}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={snackMessage}
        color="warning"
      ></Snackbar>
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

    return {
      props: {
        session: JSON.stringify(session),
      },
    };
  },
  ironOptions
);
