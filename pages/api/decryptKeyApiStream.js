/* eslint-disable import/no-anonymous-default-export */
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
import Jobs from "./classes/Jobs";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";
import fromIpfs from "./classes/ipfsHelper/FromIpfs";
const decryptStream = require("./classes/encryption/key/decryptStream");
import { pipeline } from "node:stream";
export default withIronSessionApiRoute(enc_Key, ironOptions);

async function enc_Key(req, res) {
  let session = await getServerSession(req, res, authOptions);
  let cid = req.body.cid;
  let keyTitle = req.body.passKey;

  if (!session) {
    session = req.session;
  }

  let user = session.user;

  let job = Jobs.getByCID(cid);

  decryptStream(user, keyTitle, (e) => {
    if (e.ok) {
      if (job.type == "file") {
        let fileStream = fromIpfs.getFileStream(job);

        pipeline(fileStream, e.decipher, res, (err) => {
          if (err) {
            console.log(err);
            res.json({ ok: false, msg: ["Decrypt error"] });
          } else {
            console.log("Decryption Stream Completed");
          }
        });
      }
    }
  });
}
