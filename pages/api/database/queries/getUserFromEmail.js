const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (email) {
  let client = await getClient();
  client.connect();
  let res;
  try {
    let query = `SELECT * FROM "userData"."user" WHERE email ILIKE $1::text LIMIT 1; `;
    res = await client.query(query, [email]);

    return res;
  } catch (err) {}
  client.end();
};
