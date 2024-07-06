import DefaultLayout from "@/layouts/default";
import { ironOptions } from "./api/session/session_config";
import { withIronSessionSsr } from "iron-session/next";
import Grid from "@mui/material/Grid";
import { ipfsTooltip } from "../public/templates/tooltip/tooltip";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { useSearchParams } from "next/navigation";

const path = require("path");

import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Image,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spinner,
  Select,
  SelectItem,
  Progress,
} from "@nextui-org/react";

import myValidator from "./api/classes/myValidator";

export default function IndexPage({ session }) {
  const validator = new myValidator();
  const searchParams = useSearchParams();

  let searchCID = "";
  let searchFilename = "";
  let enc_keys = [{ title: "NONE", created: "2024-04-15T14:02:56.951Z" }];

  session = JSON.parse(session);

  if (session) {
    enc_keys = session.keys;
  }

  if (searchParams.get("cid") !== null) {
    if (validator.cid(searchParams.get("cid")).ok) {
      searchCID = searchParams.get("cid");
      searchCID = validator.clean(searchCID);
      searchCID = validator.black_escape(searchCID);
    }
  }

  if (searchParams.get("filename") !== null) {
    if (
      validator.text(searchParams.get("filename"), 0, 50, "filename", true).ok
    ) {
      searchFilename = searchParams.get("filename");
      searchFilename = validator.clean(searchFilename);
      searchFilename = validator.black_escape(searchFilename);
    }
  }

  let server = "/";

  const [download_Info, setDownload_Info] = useState(false);
  const [url_s, setUrl_s] = useState("");
  const [input, setInput] = useState(searchCID);

  const [filename_state, setFilename_state] = useState([]);
  const [selectedOption_f, setSelectedOption_f] = useState(filename_state[0]);

  const [progress, setProgress] = useState(0);
  const [progress_speed, setProgress_speed] = useState("");

  const [fileSize, setFileSize] = useState(0);

  const [fileExt, setFileExt] = useState([{ ext: "", description: "none" }]);
  const [selectedOption, setSelectedOption] = useState(fileExt[0]);

  const [isSubmited, setIsSubmited] = useState(false);

  const [secured, setSecured] = useState("none");
  const [input_password, setInput_password] = useState("");

  const [cid_curr, setCid_curr] = useState("");

  const [err_msg, setErr_msg] = useState([]);

  const [keyValue, setKeyValue] = useState("default");

  //================================================================================ intervals
  // intervals mng
  var intervals = [];
  function startInterval(func, intervalTime) {
    const intervalId = setInterval(func, intervalTime);
    intervals.push(intervalId);
  }

  function clearIntervalAll() {
    intervals.forEach((e) => {
      clearInterval(e);
    });
  }
  //------------------------------------------------------------------- END intervals

  const resubmitCID = async () => {
    let data = { cid: input };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch("/api/get_by_CID", options);
  };

  //=============================================================================== server/load balance

  const getServer = async (e) => {
    // add for load balancing

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

  //------------------------------------------------------------------- END server
  //=============================================================================== api
  const apiCall = async (endpoint, data) => {
    let response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),

      headers: { "Content-type": "application/json" },
    });

    return response;
  };

  //------------------------------------------------------------------- END
  //=============================================================================== get  (info)
  const getInfo = async () => {
    let endpoint = `${server}api/downloadInfo`;
    let data = { cid: input, user: session.user };

    let response = await apiCall(endpoint, data);

    if (response.status == 202) {
      console.log("Job lost, resubmit..");
      resubmitCID();
    } else if (response.status == 200) {
      let data = await response.json();

      clearIntervalAll();
      setIsSubmited(false);

      let date = new Date();

      const timestamp = date.toLocaleString().replaceAll("/", "_");
      data.filename.push({ filename: timestamp, description: "TimeStamp" });

      // get filename from URL parameter
      let url_filename = filename_from_url();
      if (url_filename.ok) {
        data.filename.unshift({
          filename: url_filename.filename,
          description: "URL",
        });
        data.ext.unshift({ ext: url_filename.ext, description: "URL" });
      }

      setFileSize(data.size);
      setSecured(data.secured);
      setFileExt(data.ext);
      setFilename_state(data.filename);
      setSelectedOption(data.ext[0]);
      setSelectedOption_f(data.filename[0]);

      setDownload_Info(true);
    }
  };
  //------------------------------------------------------------------- END get info

  // ================================================================================= URL param
  function filename_from_url() {
    if (searchFilename) {
      let name = path.parse(searchFilename).name;
      let ext = path.parse(searchFilename).ext.substring(1);

      return { ok: true, ext: ext, filename: name };
    }

    return { ok: false };
  }
  // ---------------------------------------------------------------------END of url params

  // ================================================================================== Download by CID
  const download = async () => {
    let endpoint = "/api/downloadFile";
    let data = { cid: input };

    getFile(endpoint, data);
  };
  //  ---------------------------------------------------------------------- END of download by CID

  // =================================================================================== Decrypt Password
  const decryptStream = async () => {
    setErr_msg([]);
    let err = [];
    let cid = cid_curr;

    let valid_passkey = validator.text(
      input_password,
      6,
      64,
      "Passkey",
      true
    ).err;

    err = err.concat(valid_passkey);

    if (err.length > 0) {
      setErr_msg(err);
    } else {
      let passKey = input_password;

      let endpoint = "/api/decryptApiStream";
      let data = {};

      data.cid = cid;
      data.passKey = passKey;

      getFile(endpoint, data);
    }
  };
  // ----------------------------------------------------------------------- END Decrypt Password
  // ==================================================================================== Decrypt KEY
  const decrypt_keyStream = async () => {
    let endpoint = "/api/decryptKeyApiStream";
    let data = {};

    data.cid = cid_curr;
    data.passKey = keyValue;

    getFile(endpoint, data);
  };

  // ----------------------------------------------------------------------- END Decrypt KEY

  // ===================================================================================== Actual DOWNLOAD
  async function getFile(endpoint, data) {
    try {
      server = await getServer(endpoint);

      /*
   let response = await fetch(server, {
      method: "POST",      
      body: JSON.stringify(data),
     headers: { "Content-type": "application/json;charset=utf-8" },
   });
*/
      let response = await apiCall(server, data);

      if (response.status == 202) {
        console.log("Job lost, resubmit..");
        resubmitCID();
      } else if (response.status == 200) {
        let startTime = Date.now();

        const reader = response.body.getReader();
        let totalBytesReceived = 0;

        let result = await reader.read();
        let chunks = [];

        while (!result.done) {
          totalBytesReceived += result.value.length;
          chunks.push(result.value);
          setProgress((totalBytesReceived / fileSize) * 100);

          let timeLapsed = (Date.now() - startTime) / 1000;

          if (timeLapsed > 0) {
            setProgress_speed(
              `${formatBytes(totalBytesReceived / timeLapsed)}/s`
            );
          }
          result = await reader.read();
        }
        setProgress(100);

        const uint8Array = new Uint8Array(totalBytesReceived);
        let offset = 0;
        for (const chunk of chunks) {
          uint8Array.set(chunk, offset);
          offset += chunk.length;
        }

        const blob = new Blob([uint8Array]);
        const url = URL.createObjectURL(blob);
        clearIntervalAll();

        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedOption_f.filename}.${selectedOption.ext}`; // advise filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.log(err);
      setErr_msg([err.toString()]);
    }
  }

  // ----------------------------------------------------------------------- END of download

  //======================================================================================= Handle submit
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = async (e) => {
    e.preventDefault();

    // setInput(input);
    setErr_msg([]);

    if (input) {
      setIsSubmited(true);

      let valid = validator.cid(input);
      if (valid.ok) {
        setCid_curr(input);

        let data = { cid: input };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        const response = await fetch("/api/get_by_CID", options);

        let res = await response.json();

        if (res.ok) {
          startInterval(getInfo, 1000);
        }
      } else {
        setIsSubmited(false);
        setErr_msg([valid.err]);
      }
    }
  };

  function updateExt(e) {
    setSelectedOption({ ext: e.currentKey });
  }
  function updateFilename(e) {
    setSelectedOption_f({ filename: e.currentKey });
  }
  //------------------------------------------------------------------------ END of submit
  // ======================================================================================= submit button
  function submitButton() {
    // sessionAddClick("submit");
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
  //--------------------------------------------------------------------- END of submit button
  // ======================================================================================== CID input
  function cidInput() {
    return (
      <Input
        type="text"
        placeholder={input ? input : "Please Enter Content-ID"}
        onInput={(e) => setInput(validator.clean(e.target.value))}
      />
    );
  }
  // ---------------------------------------------------------------------- End of input

  function fileNameSuggestion() {
    if (download_Info) {
      return (
        <>
          <ButtonGroup variant="ghost">
            <Button>{selectedOption_f.filename}</Button>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly>{"..."}</Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="ext_dropDown"
                selectedKeys={selectedOption_f.filename}
                selectionMode="single"
                onSelectionChange={updateFilename}
                className="max-w-[300px]"
                style={{
                  overflowX: "scroll",
                  width: "250px",
                }}
              >
                {Object.keys(filename_state).map((item, index) => (
                  <DropdownItem
                    key={`${filename_state[item].filename}`}
                    description={filename_state[item].description}
                  >
                    {filename_state[item].filename}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>

          <ButtonGroup variant="ghost">
            <Button>{selectedOption.ext}</Button>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly>{"..."}</Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="ext_dropDown"
                selectedKeys={selectedOption.ext}
                selectionMode="single"
                onSelectionChange={updateExt}
                className="max-w-[300px]"
                style={{
                  overflowY: "scroll",
                  height: "500px",
                }}
              >
                {Object.keys(fileExt).map((item, index) => (
                  <DropdownItem
                    //  key={`${fileExt[item].ext}`}
                    key={`${fileExt[item].ext}`}
                    description={fileExt[item].description}
                  >
                    {fileExt[item].ext}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </>
      );
    }
  }

  // ==================================================================================== Download Button
  function download_Btn() {
    if (download_Info) {
      if (secured == "password") {
        return (
          <>
            <div className="w-full flex flex-row gap-2 mt-10  justify-center">
              <div className="w-full flex flex-col gap-2 max-w-[240px]">
                <Input
                  placeholder="Decryption Passkey"
                  size="sm"
                  type="password"
                  onInput={(e) =>
                    setInput_password(validator.clean(e.target.value))
                  }
                  errorMessage="File is Encrypted. To decrypt please enter your passkey"
                />
              </div>
              <Button
                size="md"
                className="opacity-90"
                variant="ghost"
                color="warning"
                onClick={decryptStream}
              >
                Unlock
              </Button>
            </div>
          </>
        );
      } else if (secured == "key") {
        // QmeMhRjbkkm6GM44XTVPWCcyfzdGA8uACVX38wCqkMxjkc

        if (session.user) {
          return (
            <>
              <div className="w-full flex flex-row gap-2 mt-10  justify-center">
                <Select
                  label="Select Encryption Key"
                  className="max-w-xs"
                  selectedKey={keyValue}
                  onChange={(e) => setKeyValue(e.target.value)}
                  size="sm"
                >
                  {enc_keys.map((k) => (
                    <SelectItem size="sm" key={k.title} value={k.title}>
                      {k.title}
                    </SelectItem>
                  ))}
                </Select>

                <Button
                  size="md"
                  className="opacity-90"
                  variant="ghost"
                  color="warning"
                  onClick={decrypt_keyStream}
                >
                  Unlock
                </Button>
              </div>
            </>
          );
        } else {
          return (
            <div
              style={{ color: "red" }}
              className="w-full flex flex-row gap-2  justify-center"
            >
              File is encrypted, please login to decrypt.
            </div>
          );
        }
      } else {
        return (
          <>
            <div className="w-full flex flex-row gap-2 mt-5 justify-center">
              <Button
                className="opacity-90"
                variant="ghost"
                color="success"
                onClick={download}
              >
                Download {formatBytes(fileSize)}
              </Button>
            </div>
          </>
        );
      }
    }
  }
  // ------------------------------------------------------------------------------ End of Submit button

  function progressBar() {
    if (download_Info && progress > 0) {
      return (
        <div>
          <Progress
            classNames={{
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-yellow-500 to-green-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            value={progress}
            size="sm"
            aria-label="progress"
            showValueLabel={true}
          />
          <div>{progress > 0 && progress_speed}</div>
        </div>
      );
    }
  }

  // ================================= click button if cid provided as parameter
  useEffect(() => {
    const clickButtonByAriaLabel = () => {
      const button = document.querySelector('[aria-label="submitBtn"]');
      if (button && input) {
        button.click();
      }
    };
    clickButtonByAriaLabel();
  }, []);
  // ------------------------------------------  end of click button

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

  // ================================================================================== format bytes to readable representation
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
  // ------------------------------------------------------------------------------------end of format bytes
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();

        handleSubmit(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [input, handleSubmit]);
  //=================================================== actual return

  return (
    // <MediaRenderer src="ipfs://CID" />
    <DefaultLayout session={session}>
      {/**=======================================================================   Title  */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 30 }}
      >
        <Grid xs={3} item={true}></Grid>
        <Grid xs={6} item={true} className="flex justify-center items-center">
          <Image isZoomed width={50} alt="IPFS" src="logo/logo_white_s.png" />{" "}
          IPFS
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

      {/**===========================================================================   filename suggestion  */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 25 }}
      >
        <Grid xs={0} item={true} style={{}}></Grid>
        <Grid
          xs={12}
          item={true}
          style={{}}
          className="flex justify-center items-center"
        >
          {fileNameSuggestion()}
        </Grid>
        <Grid xs={0} item={true}></Grid>
      </Grid>

      {/**=========================================================================== download btn  */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 15 }}
      >
        <Grid xs={2} item={true} style={{}}></Grid>
        <Grid xs={8} item={true} style={{}} justify="center">
          {download_Btn()}
        </Grid>
        <Grid xs={2} item={true}>
          {" "}
        </Grid>
      </Grid>

      {/**===========================================================================  progress bar */}

      <Grid
        gap={2}
        container
        wrap="nowrap"
        item={true}
        justify="center"
        style={{ marginTop: 50 }}
      >
        <Grid xs={0} item={true} style={{}}></Grid>
        <Grid xs={12} item={true} style={{}} justify="center">
          {progressBar()}
        </Grid>
        <Grid xs={0} item={true}>
          {" "}
        </Grid>
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
      session.keys = context?.req?.session?.keys;
    }

    return {
      props: {
        session: JSON.stringify(session),
      },
    };
  },
  ironOptions
);
