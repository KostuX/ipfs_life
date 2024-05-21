const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, title, cb) {
  let client = await getClient();
  client.connect();

  let user_id = user.user_id;
  //console.log(user_id)
  try {
    const query = ` SELECT * FROM "${user_id}"."keys" WHERE title = $1::text LIMIT 1; `;
    let data = await client.query(query, [title]);
    cb({ ok: true, key: data.rows[0] });
  } catch (e) {
    console.log(e);
    cb({ ok: false });
  }
  client.end();
};
