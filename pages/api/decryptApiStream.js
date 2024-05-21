/* eslint-disable import/no-anonymous-default-export */
import Jobs from "./classes/Jobs";
import myValidator from "./classes/myValidator";
const dec_password = require("./classes/encryption/password/decryptStream");
import fromIpfs from "./classes/ipfsHelper/FromIpfs";
const path = require("path");

import { pipeline } from "node:stream";

export default async (req, res) => {
  let fileStream;
  let cid = req.body.cid;
  let passKey = req.body.passKey;
  let job = Jobs.getByCID(cid);

  if (Object.keys(job) == 0) {
    console.log("respnse 202", "pass");
    res.status(202).send();
  } else {
    let decipher = dec_password(passKey);

    if (job.type == "file") {
      let fileStream = fromIpfs.getFileStream(job);

      pipeline(fileStream, decipher, res, (err) => {
        if (err) {
          console.log(err);
          res.json({ ok: false });
        } else {
          console.log("Decryption Stream Completed");
        }
      });
    } else if (job.type == "folder") {
      console.log("folder!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

      fileStream = fromIpfs.getFolderStream(job);

      pipeline(fileStream, decipher, res, (err) => {
        if (err) {
          console.log(err);
          res.json({ ok: false });
        } else {
          console.log("Decryption Stream Completed");
        }
      });
    }

    res.on("close", () => {
      console.log("end of stream");
    });
    /*
  dec_password(job, passKey, (e) => {
    if (e.ok) {
      const filePath = path.join(
        `${process.cwd()}`,
        `fileStore/downloads/${cid}`
      );
      res.setHeader("Content-Type", "application/octet-stream");
      const stream = require("fs").createReadStream(filePath);
      stream.pipe(res);
      res.on("close", () => {});
    } else {
      res.status(201).json({ ok: false });
    }

    //
  });
*/
  }
};
