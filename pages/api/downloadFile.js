import { CID } from "multiformats";
import { create, globSource, urlSource } from "kubo-rpc-client";
const { Readable } = require("stream");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });

  if (req.body) {
    res.setHeader("Content-Type", "application/octet-stream");

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    let cid;
    try {
      let d = JSON.parse(req.body);
      cid = d.cid;
    } catch (e) {
      cid = req.body.cid;
    }

    let kubo_res = ipfs.cat(CID.parse(cid));
    let ipfsStream = Readable.from(kubo_res);

    ipfsStream.pipe(res);

    res.on("close", () => {
      console.log("end of stream");
    });
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    res.status(200).send();
  }
};
