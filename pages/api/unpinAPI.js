const path = require("path");
const fs = require("fs");
const stats_fromIPFS_db = require("./database/queries/stats_fromIPFS");
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import pinataUnpin from "./userStorage/pinataUnpin.js";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
import db_rmPin from "./database/queries/removePin";

// eslint-disable-next-line import/no-anonymous-default-export
export default withIronSessionApiRoute(rmPin, ironOptions);
async function rmPin(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (!session) {
    session = req.session;
  }

  let cid = req.body.cid;
  let user = session.user;

  let unpinStatus = await pinataUnpin(cid);

  if (unpinStatus.ok) {
    let db_res = await db_rmPin(user, cid);

    if (db_res.ok) {
      res.status(200).json({ ok: true, data: db_res });
    }
  }

  res.status(200).json({ ok: true, data: "test" });
}
