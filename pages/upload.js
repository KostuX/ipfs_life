import { ironOptions } from "../config/session_config.js";
import { withIronSessionSsr } from "iron-session/next";
import DefaultLayout from "@/layouts/default";
import { v4 as uuidv4 } from "uuid";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

import Image from "next/image.js";
import { DragNdrop } from "../components/icons.tsx";
import React, { useState, useEffect } from "react";
import clipboard from "clipboard-copy";
import { Snackbar, Slide } from "@mui/material";
import {
  ipfsTooltip,
  optionsTooltip,
} from "../public/templates/tooltip/tooltip";

import {
  Button,
  ButtonGroup,
  Progress,
  Spinner,
  Accordion,
  AccordionItem,
  Input,
  Switch,
  CheckboxGroup,
  Checkbox,
  Tabs,
  Tab,
  Tooltip,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useDropzone } from "react-dropzone";
import Grid from "@mui/material/Grid";
import myValidator from "./api/classes/myValidator";
import FileUpload from "./UploadChunks";
import { forEachChild } from "typescript";
import db_pins from "./api/database/queries/getPins";

export default function UploadPage({ session }) {
  session = JSON.parse(session);
  const validator = new myValidator();
  const endpoint = `/api/uploadApi`;
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [status, setStatus] = useState("");
  const [cid, setCID] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [opt_wall_sw, setOpt_wall_sw] = useState(false);
  const [opt_wall_tag, setOpt_wall_tag] = useState("");
  const [opt_ext_pin, setOpt_ext_pin] = useState("");
  const [err_msg, setErr_msg] = useState([]);
  const [opt_pass_sw, setOpt_pass_sw] = useState(false);
  const [opt_pass_pass, setOpt_pass_pass] = useState("");
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [secure_type, setSecure_type] = useState(["shadow", "bordered"]);

  const [groupSelected, setGroupSelected] = React.useState([]);

  const [selected_sec_option, setSelected_sec_option] = React.useState();

  const [keyValue, setKeyValue] = React.useState("default");

  let enc_keys = session.keys;

  let pins = [];
  if (session.keys) {
    enc_keys = session.keys;
  } else {
    enc_keys = [];
  }
  if (session.pins) {
    pins = session.pins;
  }

  let pin_allowance = 1000 * 1000 * 1000;

  //pin_allowance
  let totUsage = 0;
  pins.forEach((e) => {
    totUsage += parseInt(e.size);
  });
  totUsage = (totUsage / pin_allowance) * 100;
  const chunkSize = 4 * 1024 * 1024;
  let jobs = [];
  let jobUpdateInterval;

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      setCID([]);
      setProgress(0);
    },
  });

  const clearFileList = () => {
    setUploadedFiles([]);
    setCID([]);
    setProgress(0);
  };

  function totSize() {
    let totSize = 0;
    uploadedFiles.forEach((file) => {
      totSize += file.size;
    });
    return totSize;
  }

  function totChunks() {
    let tot = 0;
    uploadedFiles.forEach((file) => {
      tot += Math.ceil(file.size / chunkSize);
    });
    return tot;
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

  async function processJobs() {
    setUploadCompleted(true);

    jobs.forEach(async (job) => {
      switch (job.status) {
        case 1: {
          let req_type = "job";

          const endpoint = `./api/jobApi`;
          const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ job, req_type, user: session?.user }),
          };
          let data = await fetch(endpoint, options);
          let response = await data.json();

          if (response?.job?.ipfs?.CID) {
            clearInterval(jobUpdateInterval);
            setCID([response?.job?.ipfs?.CID]);
          }
          break;
        }
      }
    });
  }

  function getExt(filename) {
    let ext = "";

    if (filename.lastIndexOf(".") > 0) {
      ext =
        filename.substring(filename.lastIndexOf(".") + 1, filename.length) ||
        "none";
    }
    return ext;
  }

  function getFilename(filename) {
    let file = filename;

    if (filename.lastIndexOf(".") > 0) {
      file = filename.substring(0, filename.lastIndexOf("."));
    }
    return file;
  }

  const handleFileUpload = () => {
    setIsSubmited(true);
    setErr_msg([]);
    let loc_err_msg = [];

    if (groupSelected.includes("Public Wall")) {
      let err = validator.text(opt_wall_tag, 0, 255, "Tag", true).err;

      loc_err_msg = loc_err_msg.concat(err);
    }

    if (groupSelected.includes("Secure") && selected_sec_option == "password") {
      let err = validator.text(opt_pass_pass, 6, 255, "Password", true).err;
      loc_err_msg = loc_err_msg.concat(err);
    }

    if (loc_err_msg.length == 0) {
      let timer = { start_time: new Date(), data_uploaded: 0 };

      let chunksUploaded = 0;
      let currentFile = 1;
      let settings = {};
      let metadata = {};
      let userOptions = {};
      metadata.file = {};
      metadata.id = uuidv4();
      metadata.start = new Date();
      metadata.size = totSize();
      metadata.filecount = uploadedFiles.length;
      metadata.chunks = totChunks();
      metadata.status = 0;
      metadata.type = "upload";

      userOptions.secure = {
        selected: groupSelected.includes("Secure"),
        type: selected_sec_option,
        enc_key: keyValue,
        password: opt_pass_pass,
      };

      userOptions.pWall = {
        selected: groupSelected.includes("Public Wall"),
        tag: opt_wall_tag,
      };

      userOptions.externalPin = {
        selected: groupSelected.includes("External Pin"),
      };

      metadata.userOptions = userOptions;

      settings.metadata = metadata;

      uploadedFiles.forEach((selectedFile) => {
        let filename = validator.clean(selectedFile.name);

        let file = {};
        file.id = uuidv4();
        file.time = new Date();
        file.name = getFilename(filename);
        file.ext = getExt(filename);
        file.size = selectedFile.size;
        file.currentFile = currentFile++;

        metadata.file = file;

        const totalChunks = Math.ceil(selectedFile.size / chunkSize);
        const chunkProgress = 100 / totChunks();
        let chunkNumber = 0;
        let start = 0;
        let end = 0;

        const uploadNextChunk = async () => {
          if (end <= selectedFile.size) {
            let settings_str = JSON.stringify(settings);
            end = end == 0 ? chunkSize : end;
            end = start + chunkSize;

            const chunk = selectedFile.slice(start, end);

            const formData = new FormData();
            formData.append("file", chunk);
            formData.append("chunkNumber", chunkNumber);
            formData.append("totalChunks", totalChunks);
            formData.append(
              "fileName",
              getFilename(validator.clean(selectedFile.name))
            );
            formData.append(
              "fileExt",
              getExt(validator.clean(selectedFile.name))
            );
            formData.append("settings", settings_str);

            await fetch(endpoint, {
              method: "POST",
              body: formData,
            });

            let timeLapse = new Date() - timer.start_time;
            let data_uploaded = (timer.data_uploaded += chunk.size);
            let data_perSecond = data_uploaded / (timeLapse / 1000);

            setStatus(`${formatBytes(data_perSecond)}/s`);
            chunksUploaded++;
            const temp = `Chunk ${
              chunkNumber + 1
            }/${totalChunks} uploaded successfully`;

            setProgress(Number((chunksUploaded + 1) * chunkProgress));

            chunkNumber++;
            start = end;

            uploadNextChunk();
          }
        };

        uploadNextChunk();
      });
      metadata.status = 1;
      setProgress(100);

      jobs.push(metadata);
      jobUpdateInterval = setInterval(processJobs, 1000);
    } else {
      setErr_msg(loc_err_msg);
    }
  };

  function removeFileFromUploadList(index) {
    let msg = `File removed: ${uploadedFiles[index].name}`;
    notification(msg);

    if (index > -1) {
      let arr = uploadedFiles;
      arr.splice(index, 1);
      setUploadedFiles([...arr]);
    }
  }

  function notification(msg) {
    setSnackMessage(msg);
    setOpen(true);
  }

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

    /*


    let response = await axios.post(
      endpoint,
      { cid: cid },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

 
    */
  }

  function spinner() {
    if (cid.length > 0) {
      return (
        <ul className="flex justify-center items-center">
          {cid.map((c) => (
            <li key={c}>
              {c}{" "}
              <ButtonGroup size="sm">
                <Button
                  onClick={(event) => {
                    copyCID(c);
                  }}
                >
                  Copy CID
                </Button>
                <Button
                  onClick={(event) => {
                    copyCID(`https://ip-fs.cloud/?cid=${c}`);
                  }}
                >
                  Copy Link
                </Button>
                <Button
                  isDisabled={!session.user}
                  onClick={(event) => {
                    cidToEmail(c);
                  }}
                >
                  To email
                </Button>
              </ButtonGroup>
            </li>
          ))}
        </ul>
      );
    } else if (
      isSubmited &&
      cid.length == 0 &&
      uploadCompleted &&
      progress >= 100
    ) {
      return <Spinner label="adding to an IPFS..." size="sm" color="default" />;
    }
  }

  function options() {
    if (uploadedFiles.length > 0) {
      return (
        <CheckboxGroup
          color="danger"
          className="gap-1"
          label="Options"
          orientation="horizontal"
          value={groupSelected}
          onChange={(e) => {
            if (!e.target) {
              setGroupSelected(e);
            }
          }}
        >
          <Accordion title="Options" isCompact variant="bordered">
            <AccordionItem key="1" aria-label="Accordion 1" title="Public Wall">
              <Checkbox value="Public Wall">Public Wall</Checkbox>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="text"
                  size="sm"
                  id="tagInput"
                  isRequired
                  placeholder="Enter your tag"
                  value={opt_wall_tag}
                  onInput={(e) =>
                    setOpt_wall_tag(validator.clean(e.target.value))
                  }
                />
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              color="warning"
              title="Secure"
            >
              <Checkbox value="Secure">Secure</Checkbox>

              <div className="flex w-full flex-col">
                <Tabs
                  aria-label="Options"
                  selectedKey={selected_sec_option}
                  onSelectionChange={setSelected_sec_option}
                  variant="underlined"
                >
                  <Tab key="password" title="Password">
                    <div
                      style={{ marginTop: 25 }}
                      className="flex w-full flex-wrap md:flex-nowrap gap-4"
                    >
                      <Input
                        type="password"
                        size="sm"
                        id="passwordInput"
                        isRequired
                        placeholder="Enter password"
                        value={opt_pass_pass}
                        onInput={(e) =>
                          setOpt_pass_pass(validator.clean(e.target.value))
                        }
                      />
                    </div>
                  </Tab>
                  <Tab key="key" title="Key" isDisabled={!session.user}>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                      <Select
                        label="Select Encryption Key"
                        className="max-w-xs"
                        selectedKey={keyValue}
                        onChange={(e) => setKeyValue(e.target.value)}
                        size="sm"
                      >
                        {enc_keys.map((k) => (
                          <SelectItem key={k.title} value={k.title}>
                            {k.title}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              color="warning"
              title="External Pinning"
              isDisabled={!session.user}
            >
              <Checkbox value="External Pin" isDisabled={totUsage >= 100}>
                Pin to Pinata
              </Checkbox>
              <div className="m-5 gap-4">
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
              </div>
            </AccordionItem>
          </Accordion>
          <p style={{ color: "red" }} className="mt-4 ml-1 text-default-500">
            {groupSelected.length > 0 ? "Selected: " : ""}
            {groupSelected.join(", ")}
          </p>
        </CheckboxGroup>
      );
    }
  }

  // transiton for snackbar
  function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
  }

  return (
    <DefaultLayout session={session}>
      {/*  Top line    */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        style={{ marginTop: 30 }}
        item={true}
        justify="center"
      >
        <Grid
          xs={4}
          item={true}
          style={{ order: "1px solid grey", height: "100px" }}
        ></Grid>
        {/*  file drop    */}
        <Grid
          xs={4}
          style={{
            border: "1px solid grey",
            height: "150px",
            borderRadius: 10,
            textAlign: "center",
          }}
          item={true}
          {...getRootProps()}
        >
          <p>Drag and Drop</p>
          <p>Or</p>
          <p>Click</p>

          <input {...getInputProps()} />
          <DragNdrop />
        </Grid>

        <Grid xs={4} item={true} style={{}}>
          {options()}
        </Grid>
      </Grid>

      {/*  Midle line    */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        style={{ marginTop: 25 }}
        item={true}
        justify="center"
      >
        <Grid xs={4} item={true} style={{}}>
          {" "}
        </Grid>
        <Grid xs={4} item={true} style={{}}>
          {/*  Upload Buttons drop    */}
          {uploadedFiles.length > 0 && (
            <Button
              onClick={handleFileUpload}
              style={{ float: "right" }}
              ize="sm"
            >
              Upload
            </Button>
          )}
          {uploadedFiles.length > 0 && (
            <Button
              onClick={clearFileList}
              style={{ float: "right" }}
              color="danger"
              size="sm"
            >
              Clear
            </Button>
          )}
        </Grid>

        <Grid xs={4} item={true} style={{}}>
          {" "}
        </Grid>
      </Grid>

      {/*  CID line    */}
      <Grid
        gap={2}
        container
        wrap="nowrap"
        style={{ marginTop: 25 }}
        className=" mt-5 "
        item={true}
        justify="center"
      >
        <Grid xs={2} item={true} style={{}}></Grid>
        <Grid xs={8} item={true} style={{}}>
          {/* CID    */}
          <div
            className="flex justify-center items-center"
            style={{ color: "red" }}
          >
            {err_msg.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          {<div className="flex justify-center items-center"> {spinner()}</div>}
        </Grid>

        <Grid xs={2} item={true} style={{}}></Grid>
      </Grid>

      {progress > 0 && (
        <Progress
          classNames={{
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-yellow-500 to-green-500",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          value={progress}
          size="sm"
          showValueLabel={true}
          aria-label="progress"
        />
      )}
      <div>{progress > 0 && status}</div>
      {/*  Bottom line    */}
      <Grid gap={2} container wrap="nowrap" item={true} justify="center">
        <Grid xs={2} item={true}></Grid>
        {/*  List of Files    */}
        <Grid xs={8} item={true}>
          <div className="flex justify-center items-center ">
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={file.name} className="mb-2">
                  {file.name}
                  {"     " + formatBytes(file.size)}
                  <Button
                    className="ml-2"
                    isIconOnly
                    size="sm"
                    color="danger"
                    aria-label="Like"
                    onPress={(x) => {
                      removeFileFromUploadList(index);
                    }}
                  >
                    {" X "}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid xs={2} item={true}>
          {" "}
        </Grid>
      </Grid>
      <Snackbar
        TransitionComponent={TransitionLeft}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={snackMessage}
        color="warning"
        aria-label="snackbar"
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
      session.keys = context?.req?.session?.keys;
    }
    let pins = await db_pins(session.user);
    session.pins = pins;
    return {
      props: {
        session: JSON.stringify(session),
      },
    };
  },
  ironOptions
);
