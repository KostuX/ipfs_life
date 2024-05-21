const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (username,  cb) {
  let client = await getClient()
  client.connect()
  let res;
  try {
    let query = `SELECT * FROM "userData"."user" WHERE username ILIKE $1::text LIMIT 1; `;
    res = await client.query(query, [username]);
    cb({ ok: true, data: res });
  } catch (err) {
    cb({ ok: false, data: err });
  }
  client.end()
};


