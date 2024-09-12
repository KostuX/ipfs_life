import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
import { create } from "kubo-rpc-client";
import { CID } from "multiformats/cid";
import myValidator from "./classes/myValidator";
import Jobs from "./classes/Jobs";
import { v4 as uuidv4 } from "uuid";

export default withIronSessionApiRoute(get_by_CID, ironOptions);

let history = [];
let metadata = {};
let download_path = `${process.cwd()}/public/ipfs/`;

async function get_by_CID(req, res) {
  const validator = new myValidator();
  let err = [];

  let valid_cid = validator.cid(req.body.cid).err;

  err = err.concat(valid_cid);

  if (err.length > 0) {
    res.status(200).send({ ok: false, err: err });
    await req.session.save();
  } else {
    let cid = req.body.cid;

    try {
      CID.parse(cid);
    } catch (e) {
      cid = "Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z"; // hello world <- change to error message
      console.log("Invalid CID");
    }

    // folder QmXFV6ZQJzNQ3DFJzVhPfzh6TBJY2yJt6Bqw5Fv2PkZEsr
    // 200mb folder QmNfkM6pjtr4WuD4sBPy5jsGU5Qm751aJRbpBXHASQJMos
    // single QmZnsHdEPZoLYhMfZWbQmGdkuyfLEVasGhjM9aFCAkiKj1
    metadata.connection = { ip: req.connection.remoteAddress };
    metadata.id = uuidv4();
    metadata.type = "download";
    metadata.start = new Date();
    metadata.ipfs = { CID: cid };

    await req.session.save();
    res.status(200).send({ ok: true, status: "received", id: metadata.id });

    Jobs.add(metadata);
  }
}
