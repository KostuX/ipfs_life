import { create, globSource, urlSource } from "kubo-rpc-client";
import { CID } from "multiformats";
import Host from "./IPFS_HOST";

import Jobs from "../Jobs";
const { join } = require("path");
const fs = require("fs");

export default class IpfsInfo {
  static ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });

  // not working properly  !!!!!!!!!!!!!!!!!!
  // some has 1 item but it is folder
  static async isFolder(cid) {
    let count = 0;
    for await (const file of this.ipfs.ls(CID.parse(cid))) {
      count++;
    }

    return count > 1;
  }

  static async getSummary(job) {
    let info;
    let cid = job.ipfs.CID;

    info = await this.getSummaryCID(cid);

    job.ipfs.info = info;

    return info;
  }

  static async getSummaryCID(cid) {
    let ipfs_host = new Host().get();
    let info;

    let res = await fetch(
      `${ipfs_host}dag/stat?arg=${cid}&encoding=json&progress=false`,
      {
        method: "POST",
      }
    );
    info = await res.json();
    return info;
  }
}
