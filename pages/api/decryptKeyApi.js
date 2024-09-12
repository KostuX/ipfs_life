/* eslint-disable import/no-anonymous-default-export */
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
import Jobs from "./classes/Jobs";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

const dec_password = require("./classes/encryption/key/decrypt");
const path = require("path");

export default withIronSessionApiRoute(enc_Key, ironOptions);

async function enc_Key(req, res) {
  const session = await getServerSession(req, res, authOptions);
  let cid = req.body.cid;
  let passKey = req.body.passKey;

  let user = session.user;

  let job = Jobs.getByCID(cid);

  dec_password(job, user, passKey, (e) => {
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
  });
}
