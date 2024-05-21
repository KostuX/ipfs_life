const path = require("path");
const fs = require("fs");
const stats_fromIPFS_db = require("./database/queries/stats_fromIPFS");

import fromIpfs from "./classes/ipfsHelper/FromIpfs";
import Jobs from "./classes/Jobs";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let cid = JSON.parse(req.body).cid;

  req.session.path[0].clicks.push({ type: "download", time: new Date() });
  await req.session.save();

  let job = Jobs.getByCID(cid);
  if (Object.keys(job) == 0) {
    res.status(202).send();
  }

  res.setHeader("Content-Type", "application/octet-stream");

  if (job.type == "file") {
    let fileStream = fromIpfs.getFileStream(job);
    fileStream.pipe(res);
  } else if (job.type == "folder") {
    let fileStream = fromIpfs.getFolderStream(job);
    fileStream.pipe(res);
  }

  res.on("close", () => {
    console.log("end of stream");
  });
};
