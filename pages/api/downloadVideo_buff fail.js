const parseRange = require("range-parser");
import { create, globSource, urlSource } from "kubo-rpc-client";
import ipfsInfo from "./classes/ipfsHelper/IpfsInfo";
import fromIpfs from "./classes/ipfsHelper/FromIpfs";
import { t } from "tar";
const { Readable } = require("stream");
const fs = require("fs");

let chunkSize = 1024 * 1000 * 10; // MB

let tempBuff = {
  buff: new Uint8Array(chunkSize * 2 + 10),
  usedUpTo: 0,
  start: 0,
  end: 0,
  size: 0,
};

let reqRange = {};

let lastChunk = false;
let size;
let ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  console.log(
    "\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% request "
  );
  let cid = req.query.cid;
  chunkSize = 1024 * 1000 * 10; // MB
  // cid = "QmUTuANnYEm88hTEK7muUBh3SwtKWTDpMpjB6ptBdyJRid"
  //Qmb9AcW6vS8B2v7RXKyP6r8XKC3LCcf7BKRhPtxbGvLPjq

  let info = await ipfsInfo.getSummaryCID(cid);
  size = info.CumulativeSize;

  let range = parseRange(size, req.headers.range)[0];
  let chunkStart = range.start;
  let chunkEnd = Math.min(chunkStart + chunkSize, size - 1);

  lastChunk = chunkEnd + 1 == size;

  reqRange = range;

  let currChunk = chunkEnd - chunkStart + 1;
  print("REQ_", chunkStart, chunkEnd);

  print(`Buff`, tempBuff.start, tempBuff.end);
  let headerOptions = {
    "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${size}`,
    "Accept-Ranges": "bytes",
    "Content-Length": currChunk,
    "Content-Type": "video/webm",
  };
  res.writeHead(206, headerOptions);

  if (tempBuff.start <= chunkStart && tempBuff.end >= chunkEnd) {
    console.log("read buff");
    let buff = await loadFromBuffer(chunkStart, chunkEnd);
    const ipfsStream = Readable.from(Buffer.from(buff));
    ipfsStream.pipe(res);
  } else {
    let buff = await loadDataIPFS(cid, chunkStart, chunkEnd);
    const ipfsStream = Readable.from(Buffer.from(buff));
    ipfsStream.pipe(res);
    loadNextBuffer(cid, chunkEnd + 1, chunkSize, size);
  }

  res.on("finish", (e) => {
    console.log(
      "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Stream finished"
    );
  });

  if (chunkStart == 0 && tempBuff.size == 0) {
    chunkEnd = -1;
  }

  if (tempBuff.size == 0) {
    chunkSize = tempBuff.buff.length;
  }
};

async function loadNextBuffer(cid, chunkStart, chunkSize, size) {
  if (chunkStart + chunkSize > size) {
    print("Load end of file", chunkStart, chunkStart + chunkSize);
  } else {
    print("Load", chunkStart, chunkStart + chunkSize);

    let kubo_res = ipfs.cat(cid, { offset: chunkStart, length: chunkSize });
    let buff = new Uint8Array(chunkSize);
    let off = 0;

    for await (const resp of kubo_res) {
      buff.set(resp, off);
      off += resp.length;
    }

    if (tempBuff.size == 0) {
      tempBuff.buff.set(buff, 0);
      tempBuff.size = buff.length;
      tempBuff.start = chunkStart;
      tempBuff.end = buff.length - 1;
    } else if (tempBuff.size < tempBuff.length) {
      tempBuff.buff.set(buff, tempBuff.size);
      tempBuff.size = buff.length + tempBuff.size;
      tempBuff.end = tempBuff.end + chunkSize;
    } else if (tempBuff.size == tempBuff.buff.length) {
      let temp = tempBuff.buff.subarray(chunkSize, tempBuff.size);
      console.log(chunkSize, tempBuff.size);
      tempBuff.buff.set(temp, 0);
      tempBuff.buff.set(buff, chunkSize);
      tempBuff.start = tempBuff.end;
      tempBuff.end = chunkStart + chunkSize;
    }
  }
}

async function loadDataIPFS(cid, chunkStart, chunkEnd, size) {
  print("IPFS", chunkStart, chunkEnd);
  let chunkSize = chunkEnd - chunkStart;
  let kubo_res = ipfs.cat(cid, { offset: chunkStart, length: chunkSize });

  let buff = new Uint8Array(chunkSize);
  let off = 0;

  for await (const resp of kubo_res) {
    buff.set(resp, off);
    off += resp.length;
  }

  return buff;
}

async function loadFromBuffer(start, end) {
  let buffPositionStart = start - tempBuff.start;
  let buffPositionEnd = end - tempBuff.end;

  let res = tempBuff.buff.subarray(buffPositionStart, buffPositionEnd);
  tempBuff.buff.set(res, 0);
  //tempBuff.size = res.length;
  tempBuff.size = 0;

  return res;
}

function print(a, b, c) {
  console.log(`${a}: ${b} - ${c}`);
}

export const config = {
  api: {
    responseLimit: false,
  },
};
