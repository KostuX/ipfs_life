import ipfs from "./ipfsHelper/FromIpfs";
const fs = require("node:fs");
const path = require("path");
import IpfsInfo from "./ipfsHelper/IpfsInfo";
import { create, globSource, urlSource } from "kubo-rpc-client";
import { CID } from "multiformats";
const { Readable } = require("stream");

export default class TEMPfile {
  static ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });
  static pathToTemp = "/fileStore/TEMP";
  static files = [];

  static getFileInfo(cid) {
    return this.files[cid];
  }

  static getFileData(cid, offset, chunksize) {
    const filePath = path.join(`${process.cwd()}`, `${this.pathToTemp}`);
    const buffer = Buffer.alloc(chunksize);

    fs.open(`${filePath}/${cid}`, "r", (err, fd) => {
      if (err) {
        console.log(err);
      }
      fs.read(fd, buffer, 0, chunksize, 0, (readErr, bytesRead, buff) => {
        console.log(readErr);
      });
      fs.close(fd, (closeErr) => {
        if (closeErr) {
          throw closeErr;
        }

        console.log("File closed successfully.");
        return buffer;
      });
    });
  }

  static async writeFile(cid, chunkSize) {
    let file = this.files[cid];
    const filePath = path.join(`${process.cwd()}`, `${this.pathToTemp}`);
    // this.getFileData(cid, 0, 1000);
    if (!file) {
      let info = await this.ipfs.object.stat(cid);
      let totSize = info.CumulativeSize;
      this.files[cid] = {
        time: new Date(),
        totSize: totSize,
        ready: 0,
      };

      fs.writeFileSync(`${filePath}/${cid}`, "");
    }
    file = this.files[cid];

    let kubo_res = this.ipfs.cat(cid, {
      offset: file.ready,
      length: Math.min(chunkSize, file.totSize),
    });

    let buff = new Uint8Array(Math.min(chunkSize, file.totSize));
    let off = 0;

    for await (const resp of kubo_res) {
      buff.set(resp, off);
      off += resp.length;
    }

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    fs.open(`${filePath}/${cid}`, "a", (err, fd) => {
      fs.write(
        fd,
        buff,
        0,
        buff.length,
        file.ready,
        (writeErr, written, buffer) => {
          if (writeErr) {
            console.log(writeErr);
          }
        }
      );
      fs.closeSync(fd, (err) => {
        this.files[cid].ready += buff.length;
      });
    });
  }
}
export const config = {
  api: {
    responseLimit: false,
  },
};
