const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (username, email, password, cb) {
  let res;
  let client = await getClient();
  client.connect();

  console.log(username, email, password);
  try {
    let query = `INSERT INTO "userData"."user" (username, email, password) VALUES ( $1::text, $2::text, $3::text) RETURNING user_id;`;
    res = await client.query(query, [username, email, password]);
    cb({ ok: true, data: res });
  } catch (err) {
    cb({ ok: false, data: err });
  }
  client.end();
};
