const parseRange = require("range-parser");
import { create } from "kubo-rpc-client";

import hartBeat from "./services/hartbeat";

const { Readable } = require("stream");
import UserMng from "./userMng/userCount";

let ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });



export default async (req, res) => {
  let cid = req.query.cid;
  let token = req.query.token;

  let chunkSize = 1024 * 1000 * 100; // MB

  let size = 0;

  let info = await ipfs.object.stat(cid);
  size = info.CumulativeSize;

  let range = parseRange(size, req.headers.range)[0];
  let chunkStart = range.start;
  let chunkEnd = Math.min(chunkStart + chunkSize, size - 1);

  let currChunk = chunkEnd - chunkStart + 1;

  let headerOptions = {
    "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${size}`,
    "Accept-Ranges": "bytes",
    "Content-Length": currChunk,
    "Content-Type": "video/webm",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

  res.writeHead(206, headerOptions);

  let kubo_res = ipfs.cat(cid, { offset: chunkStart, length: chunkSize });

  let buff = new Uint8Array(chunkSize);
  let off = 0;

  for await (const resp of kubo_res) {
    buff.set(resp, off);
    off += resp.length;
  }

  const ipfsStream = Readable.from(Buffer.from(buff));

  ipfsStream.pipe(res);

  // work after response
  let user = {
    lastSeen: Date.now(),
    token: token,
    cid: cid,
    range: range,
  };

  UserMng.addUser(user);
  UserMng.cleanUserList();

  let usr = UserMng.getUserList();

  hartBeat();
};
