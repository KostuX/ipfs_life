let sendMail = require("./email/email");
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

export default withIronSessionApiRoute(sendEmailAPI, ironOptions);

async function sendEmailAPI(req, res) {
  const session = await getServerSession(req, res, authOptions);
  let cid = JSON.parse(req.body).cid;
  let user = session.user;

  sendMail(user, cid, (e) => {
    res.status(200).json({ ok: e.ok, message: e.msg });
  });
}
