import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "./session/session_config";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

const generateKey = require("./classes/encryption/key/generateKey");
const addEncKey_db = require("./database/queries/addEncKey");
const removeEncKey_db = require("./database/queries/removeKey");
const getUserKeys_db = require("./database/queries/getUserKeys");
import myValidator from "./classes/myValidator";

export default withIronSessionApiRoute(keyAPI, ironOptions);
async function keyAPI(req, res) {
  const session = await getServerSession(req, res, authOptions);

  const validator = new myValidator();

  let err = [];
  let valid_task = validator.text(req.body.task, 0, 64, "task", true).err;

  if (valid_task.length > 0) {
    res.status(200).json({ ok: false, msg: err });
  } else {
    let task = validator.black_escape(req.body.task);

    if (task == "add") {
      let err = [];

      let valid_password = validator.text(
        req.body.password,
        0,
        64,
        "password",
        true
      ).err;
      let valid_title = validator.text(
        req.body.title,
        0,
        64,
        "title",
        true
      ).err;
      let valid_user = validator.text(
        session.user.name,
        0,
        64,
        "user",
        true
      ).err;

      let password = validator.black_escape(req.body.password);
      let title = validator.black_escape(req.body.title);
      let user = session.user;

      err = err.concat(valid_password).concat(valid_title).concat(valid_user);

      if (err.length > 0) {
        // manage error
        res.status(200).json({ ok: false, msg: err });
      } else {
        generateKey(user, password, async (key) => {
          addEncKey_db(user, key.key, title, async (e) => {
            if (e.ok) {
              getUserKeys_db(user, async (e) => {
                req.session.keys = e.keys;
                await req.session.save();
                res.status(200).json({ ok: true });
              });
            } else {
              res.status(200).json({ ok: false, msg: e.msg });
            }
          });
        });
      }
    } else if (task == "remove") {
      let err = [];

      let valid_title = validator.text(
        req.body.title,
        0,
        64,
        "title",
        true
      ).err;
      let valid_user = validator.text(
        session.user.name,
        0,
        64,
        "user",
        true
      ).err;

      err = err.concat(valid_title).concat(valid_user);

      if (err.length > 0) {
        // manage error
        res.status(200).json({ ok: false, msg: err });
      } else {
        let title = validator.black_escape(req.body.title);
        let user = session.user;
        removeEncKey_db(user, title, async (e) => {
          if (e.ok) {
            getUserKeys_db(user, async (e) => {
              session.keys = e.keys;
              await req.session.save();
              res.status(200).json({ ok: true });
            });
          }
        });
      }
    }
  }
}
