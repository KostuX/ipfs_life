const parseRange = require("range-parser");
import { create, globSource, urlSource } from "kubo-rpc-client";
import ipfsInfo from "./classes/ipfsHelper/IpfsInfo";
import fromIpfs from "./classes/ipfsHelper/FromIpfs";
import tempFile from "./classes/TEMPfile";
const { Readable } = require("stream");
const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });

  let chunkSize = 1024 * 1000 * 20; // MB
  let cid = req.query.cid;
  let size = 0;

  // cid = "QmUTuANnYEm88hTEK7muUBh3SwtKWTDpMpjB6ptBdyJRid"
  //Qmb9AcW6vS8B2v7RXKyP6r8XKC3LCcf7BKRhPtxbGvLPjq

  let info = await ipfsInfo.getSummaryCID(cid);
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
  };
  res.writeHead(206, headerOptions);

  let fileData = tempFile.getFileData(cid, 0, chunkSize);

  let kubo_res = ipfs.cat(cid, { offset: chunkStart, length: chunkSize });

  let buff = new Uint8Array(chunkSize);
  let off = 0;

  for await (const resp of kubo_res) {
    buff.set(resp, off);
    off += resp.length;
  }

  const ipfsStream = Readable.from(Buffer.from(buff));

  ipfsStream.pipe(res);
  tempFile.writeFile(cid, chunkSize);
};
export const config = {
  api: {
    responseLimit: false,
  },
};
