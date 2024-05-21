const path = require("path");
const fs = require("fs");
const stats_fromIPFS_db = require("./database/queries/stats_fromIPFS");

import fromIpfs from "./classes/ipfsHelper/FromIpfs";
import Jobs from "./classes/Jobs";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let cid = req.body.cid;

  let data = {};
  let job = Jobs.getByCID(cid);

  console.log(data);
  if (job?.ipfs?.end) {
    //   let ext = job.ext ? "." + job.ext : "";
    job.done = new Date();
    stats_fromIPFS_db(job);

    const filePath = path.join(
      `${process.cwd()}`,
      `fileStore/downloads/${cid}`
    );

    res.setHeader("Content-Type", "application/octet-stream");

    let ext_all = [{ ext: "", description: "Default: none" }];

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

    res.setHeader("filename", `${encodeURIComponent(cid)}`);
    res.setHeader("data", JSON.stringify(data));

    // const stream = require("fs").createReadStream(filePath);
    // stream.pipe(res);

    if (job.type == "file") {
      let fileStream = await fromIpfs.getFileStream(job);
      fileStream.pipe(res);
    } else if (job.type == "folder") {
      let fileStream = await fromIpfs.getFolderStream(job);
      fileStream.pipe(res);
    }

    res.on("close", () => {
      console.log("end of stream");
    });
  } else {
    res.status(201).send();
  }
};
