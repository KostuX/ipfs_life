import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "./session/session_config";

const getUser_db = require("./database/queries/getUser");
const getUserKeys_db = require("./database/queries/getUserKeys");
const bcrypt = require("bcrypt");
import myValidator from "./classes/myValidator";
const validator = new myValidator();

export default withIronSessionApiRoute(loginRoute, ironOptions);
// eslint-disable-next-line import/no-anonymous-default-export
async function loginRoute(req, res) {
  let err_msg = [];
  let db_msg;
  let data = req.body.data;
  let username = data.username;
  let password = data.password;

  let valid_username = validator.text(username, 4, 64, "Username", true).err;
  let valid_pass = validator.text(password, 6, 64, "Password", true).err;

  err_msg = err_msg.concat(valid_pass).concat(valid_username);

  if (err_msg.length > 0) {
    let data = { ok: false, data: err_msg };
    res.status(200).json(data);
  } else {
    getUser_db(username, async (e) => {
      if (e.ok) {
        if (e.data.rows.length > 0) {
          let db_userID = e.data.rows[0].user_id;
          let db_username = e.data.rows[0].username;
          let db_password = e.data.rows[0].password;
          let db_email = e.data.rows[0].email;

          let result = bcrypt.compareSync(password, db_password);

          if (!result) {
            let msg = "Wrong password";

            res.status(200).json({ ok: false, data: msg });
          } else {
            let userData = {
              userID: db_userID,
              username: db_username,
              email: db_email,
            };

            req.session.user = {
              user_id: db_userID,
              user_name: db_username,
              user_email: db_email,
            };

            getUserKeys_db(req.session.user, async (e) => {
              req.session.keys = e.keys;
              await req.session.save();

              res.status(200).json({ ok: true, data: userData });
            });
          }
        } else {
          let msg = "User not found";
          res.status(200).json({ ok: false, data: msg });
        }
      } else {
        let err_msg = "Connecton error. Please try again later..";
        res.status(200).json({ ok: false, data: err_msg });
      }
    });
  }
}
