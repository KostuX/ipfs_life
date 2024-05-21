const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, key, title, cb) {
  try {
    let key_key = key.key;
    let algorithm = key.algorithm;
    let iv = key.iv;
    let client = await getClient();
    client.connect();

    const query = ` INSERT INTO  "${user.user_id}"."keys" (title, key, algorithm, iv) VALUES ( $1::text, $2::bytea, $3::text, $4::bytea) ; `;
    await client.query(query, [title, key_key, algorithm, iv]);
    if (cb) cb({ ok: true });
    client.end();
  } catch (e) {
    if (cb) cb({ ok: false, msg: ["Key exists"] });
  }
};
