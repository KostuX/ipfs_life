const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, cid, filename, ext, size, type) {
  if (user)
    try {
      let client = await getClient();
      client.connect();
      const query = ` INSERT INTO  "${user.user_id}"."history" ( cid, filename, ext, size, type) VALUES ( $1::text, $2::text,$3::text, $4::int,$5::text) ; `;
      await client.query(query, [cid, filename, ext, size, type]);
      client.end();
    } catch (e) {
      console.log(e);
    }
};
