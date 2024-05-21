const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, cb) {
  let client = await getClient();
  client.connect();

  let user_id = user.user_id;
  try {
    const query = ` SELECT title, created FROM "${user_id}"."keys" ; `;
    let data = await client.query(query, []);
    cb({ ok: true, keys: data.rows });
    return data;
  } catch (e) {
    console.log(e);
    cb({ ok: false });
  }
  client.end();
};
