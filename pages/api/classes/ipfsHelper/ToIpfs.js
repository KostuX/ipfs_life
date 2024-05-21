import { create, globSource, urlSource } from "kubo-rpc-client";
const { spawn } = require("node:child_process");

let db_addCID = require("../../database/queries/addCID");
import { CID } from "multiformats";

import Jobs from "../Jobs";
import { link } from "@nextui-org/react";
const { join } = require("path");
const fs = require("fs");
//import Jobs from "../../../fileStore"
export default class ToIpfs {
  constructor() {}
  static ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });

  static async getCid(data, callback) {
    let ipfs_ = {};
    ipfs_.start = new Date();
    let linkFolder = join(process.cwd(), data.location);

    if (data.file.length == 1) {
      let linkFile = join(
        linkFolder,
        `${data.file[0].name}.${data.file[0].ext}`
      );

      // let fileData = fs.readFileSync(linkFile);
      let fileData = fs.createReadStream(linkFile);

      this.ipfs.add(fileData).then(async (e) => {
        ipfs_.CID = e.path;
        ipfs_.type = "file";
        ipfs_.end = new Date();
        data.ipfs = ipfs_;

        spawn("ipfs-cluster-ctl", [
          "pin",
          "add",
          e.path,
          "--expire-in 168h",
          "--no-status",
        ]);

        Jobs.update(data);
        callback("ok");
      });
    } else if (data.file.length > 1) {
      let cid = "";

      const options = {
        wrapWithDirectory: true,
      };

      for await (const file of this.ipfs.addAll(
        globSource(linkFolder, `**/*`),
        options
      )) {
        if (file.path == "") {
          cid = file.cid;
        }
      }
      spawn("ipfs-cluster-ctl", [
        "pin",
        "add",
        e.path,
        "--expire-in 168h",
        "--no-status",
      ]);
      ipfs_.CID = cid + "".substring(4, cid.length);
      ipfs_.type = "folder";
      ipfs_.end = new Date();
      data.ipfs = ipfs_;
      Jobs.update(data);
      callback("ok");
      //db_addCID(data.ipfs.CID, "", "", data.ipfs.type);
    }
  }
}
