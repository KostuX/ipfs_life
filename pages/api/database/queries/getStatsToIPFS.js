const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (limit, cb) {
  let client = await getClient();
  client.connect();
  let res;
  try {
    let query = `SELECT * FROM  "stats"."to_ipfs" ORDER BY created ASC  LIMIT  $1::int; `;
    res = await client.query(query, [limit]);
    return res.rows;
    cb({ ok: true, data: res });
    return res;
  } catch (err) {
    cb({ ok: false, data: err });
  }
  client.end();
};
