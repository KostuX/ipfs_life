const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, cid, provider, filename,  size) {
  if (user)
    try {
      let client = await getClient();
      client.connect();
      const query = ` INSERT INTO  "${user.user_id}"."pin" ( cid, provider, filename,  size) VALUES ( $1::text, $2::text,$3::text, $4::int) ; `;
      await client.query(query, [cid, provider, filename,  size]);
      client.end();
    } catch (e) {
      console.log(e);
    }
};
