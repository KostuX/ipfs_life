const path = require("path");
const fs = require("fs");
const stats_fromIPFS_db = require("./database/queries/stats_fromIPFS");
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";
import addHistory from "./database/queries/addHistory";

import Jobs from "./classes/Jobs";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let cid;
  let user;

  try {
    let d = JSON.parse(req.body);
    cid = d.cid;
    user = d?.user;
  } catch (e) {
    cid = req.body.cid;
    user = req?.body?.user;
  }

  let data = {};
  let job = Jobs.getByCID(cid);

  if (Object.keys(job) == 0) {
    console.log("respnse 202", "info");
    res.status(202).send();
  } else {
    if (job?.ipfs?.end) {
      //   let ext = job.ext ? "." + job.ext : "";
      job.done = new Date();
      stats_fromIPFS_db(job);

      addHistory(
        user,
        job.ipfs.CID,
        job.filename_db,
        job.ext_db,
        job.ipfs.info.CumulativeSize,
        "download"
      );

      // default extension
      let ext_all = [{ ext: "", description: "Default: none" }];
      // default filename
      let filename_all = [{ filename: cid, description: "Default: ContentID" }];

      if (job?.filename_db?.length > 0) {
        filename_all.unshift({
          filename: job.filename_db,
          description: "Database",
        });
      }

      if (job.ext) {
        ext_all.unshift({ ext: job.ext, description: "" });
      } else if (job.ext_db) {
        ext_all.unshift({ ext: job.ext_db, description: "Database" });
      }

      if (job.mBytesExt) {
        job.mBytesExt.forEach((e) => {
          let description = e["File description"];
          e["File extension"].forEach((ee) => {
            ext_all.push({ ext: ee, description: description });
          });
        });
      }

      data.ext = ext_all;
      data.filename = filename_all;
      data.secured = job.secured;
      data.size = job.ipfs.info.CumulativeSize;

      res.status(200).json(data);
    } else if (job) {
      res.status(201).send();
    } else {
      console.log("job not found");
      res.status(202).send();
    }
  }
};
