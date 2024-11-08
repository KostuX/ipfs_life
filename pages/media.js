import DefaultLayout from "@/layouts/default";
import { ironOptions } from "../config/session_config.js";
import { withIronSessionSsr } from "iron-session/next";

import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ipfsTooltip, mediaTooltip } from "../public/templates/tooltip/tooltip";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

import { useSearchParams } from "next/navigation";
import {
  Button,
  Image,
  Input,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
  Select,
  SelectItem,
  Progress,
  Tooltip,
} from "@nextui-org/react";

import myValidator from "./api/classes/myValidator";
const validator = new myValidator();

export default function Media({ session }) {
  session = JSON.parse(session);
  let server = "/";
  const searchParams = useSearchParams();
  let searchCID = searchParams.get("cid");

  let token = session.token;
  const [input, setInput] = useState(searchCID);
  const [isSubmited, setIsSubmited] = useState(false);
  const [err_msg, setErr_msg] = useState([]);

  const [videos, setVideos] = useState([]);

  //=============================================================================== api
  const apiCall = async (endpoint, data) => {
    let response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),

      headers: { "Content-type": "application/json" },
    });

    return response;
  };

  //=============================================================================== server

  const getServer = async (e) => {
    let data = { api: e, cid: input, time: Date.now() };
    let endpoint = "api/apiRouter";
    let response = await apiCall(endpoint, data);
    let res = await response.json();
    if (res.ok) {
      return res.server;
    } else {
      return "/";
    }
  };

  const removeVideoByAriaLabel = (ariaLabelToRemove) => {
    const updatedVideos = videos.filter(
      (video) => video.props["aria-label"] !== ariaLabelToRemove
    );
    setVideos(updatedVideos);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = async () => {
    let err = validator.cid(input).err;
    if (err.length > 0) {
      setErr_msg(err);
    } else {
      let endpoint = `/api/downloadVideo`;
      server = await getServer(endpoint);

      await removeVideoByAriaLabel("player");

      setVideos([<video preload="auto" key={input} controls></video>]);

      let vid = (
        <video
          aria-label="player"
          key={input}
          autoPlay
          controls
          preload="auto"
          controlsList=" nodownload"
          poster="/favicon.ico"
          width="auto"
          height="75%"
        >
          <source
            src={`${server}?cid=${input}&token=${token}`}
            type="video/webm"
          />
          <source
            src={`${server}?cid=${input}&token=${token}`}
            type="video/mkv"
          />
          Your browser does not support the video tag.
        </video>
      );

      setVideos([vid]);

      //    setPlayer(mediaPlayer(input))
      /*
    let endpoint = '/api/downloadVideo'
    let data = { type:"find", cid:input}

    let options ={
      headers:{"Content-type":"application/json"},
      method:"POST",
      body:JSON.stringify(data)
    }

    let response = await fetch(endpoint,options)

   */
    }
  };

  //===========================================================================  error message

  function errorMessage(err_msg) {
    return (
      <div style={{ color: "red" }}>
        {err_msg.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }

  // ======================================================================================= submit button
  function submitButton() {
    if (isSubmited) {
      return <Spinner label="Searching..." size="sm" color="default" />;
    } else {
      return (
        <Button aria-label="submitBtn" onClick={handleSubmit}>
          Submit
        </Button>
      );
    }
  }

  // ======================================================================================== CID input
  function cidInput() {
    return (
      <Input
        type="text"
        placeholder={input ? input : "Please Enter Content-ID"}
        onInput={(e) => setInput(e.target.value)}
      />
    );
  }
  // ======================================================================================== media player
  function mediaPlayer(cid) {
    //  let  cid = "QmPdSwMEm8f7MrH6ayfeQb2B6gJtiaR2vAXzrHwsa6tHuB"
    let response = `/api/downloadVideo?cid=${cid}`;

    return (
      <video controls width="640" height="360">
        <source src={response} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    );
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

  useEffect(() => {
    const clickButtonByAriaLabel = () => {
      const button = document.querySelector('[aria-label="submitBtn"]');
      if (button && input) {
        button.click();
      }
    };
    clickButtonByAriaLabel();
  }, [input]);

  return (
    <DefaultLayout session={session}>
      {/** ======================================================================================  title */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 30 }}
      >
        <Grid xs={3} item={true}></Grid>
        <Grid xs={6} item={true} justify="center">
          <div className="text-center ">
            {/*    title*/}
            Media player
          </div>
        </Grid>
        <Grid xs={3} item={true}></Grid>
      </Grid>

      {/**===========================================================================   Input  */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 50 }}
      >
        <Grid xs={2} item={true}></Grid>
        <Grid xs={8} item={true} justify="center">
          {cidInput()}
        </Grid>
        <Grid xs={2} item={true}></Grid>
      </Grid>

      {/**===========================================================================   Submit button  */}

      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 25 }}
      >
        <Grid xs={2} item={true}></Grid>
        <Grid xs={8} item={true} className="flex justify-center items-center">
          {submitButton()}
        </Grid>
        <Grid xs={2} item={true}></Grid>
      </Grid>

      {/**===========================================================================  error messages */}

      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={err_msg.length > 0 ? { marginTop: 15 } : { marginTop: 0 }}
      >
        <Grid xs={4} item={true} style={{}}></Grid>
        <Grid xs={4} item={true} style={{}} justify="center">
          <div className="text-center ">{errorMessage(err_msg)}</div>
        </Grid>
        <Grid xs={4} item={true}>
          {" "}
        </Grid>
      </Grid>

      {/** ======================================================================================  Media player */}

      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 10 }}
        className="flex justify-center items-center"
      >
        <Grid xs={1} item={true}></Grid>
        <Grid xs={10} item={true} className="flex justify-center items-center">
          {videos}
        </Grid>
        <Grid xs={1} item={true}></Grid>
      </Grid>
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
