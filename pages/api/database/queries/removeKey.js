const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, title, cb) {
  let client = await getClient();
  client.connect();
  try {
    const query = `DELETE FROM  "${user.user_id}"."keys" WHERE title  = $1::text ; `;
    await client.query(query, [title]);
    cb({ ok: true });
  } catch (e) {
    console.log(e);
    cb({ ok: false });
  }
  client.end();
};
