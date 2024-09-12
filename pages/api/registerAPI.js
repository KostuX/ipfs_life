import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
const addUser_db = require("./database/queries/createUser");
const userInit = require("./classes/newUserInit");
const bcrypt = require("bcrypt");
import myValidator from "./classes/myValidator";
const validator = new myValidator();

export default withIronSessionApiRoute(regRoute, ironOptions);

// eslint-disable-next-line import/no-anonymous-default-export
async function regRoute(req, res) {
  let err_msg = [];
  let db_msg;
  let data = req.body.data;

  let username = data.username;
  let email = data.email;
  let password = data.password;

  let valid_pass = validator.text(password, 6, 64, "Password", true).err;
  let valid_username = validator.text(username, 4, 64, "Username", true).err;
  let valid_email = validator.isEmail(email).err;

  err_msg = err_msg
    .concat(valid_pass)
    .concat(valid_username)
    .concat(valid_email);

  if (err_msg.length > 0) {
    let data = { ok: false, data: err_msg };
    res.status(200).json(data);
  } else {
    let pass = bcrypt.hashSync(password, 5);

    await addUser_db(username, email, pass, async (resp) => {
      if (!resp.ok) {
        if (resp.data.code == 23505) {
          let details = resp.data.detail;

          if (details.includes("(username)")) {
            err_msg.push("Username already taken. ");
          } else if (details.includes("email")) {
            err_msg.push("Email already taken. ");
          }
        }
        let data = { ok: false, data: err_msg };

        res.status(200).json(data);
      } else {
        req.session.user = {
          user_id: resp.data.rows[0].user_id,
          name: username,
          email: email,
        };

        userInit(req.session.user);

        await req.session.save();

        let data = { ok: true, data: req.session.user };
        res.status(200).json(data);
      }
    });
  }
}
