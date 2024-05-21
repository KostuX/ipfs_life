const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, cid) {
  if (user)
    try {
      let client = await getClient();
      client.connect();
      const query = ` DELETE FROM  "${user.user_id}"."pin" WHERE  cid =  $1::text ; `;
      let res = await client.query(query, [cid]);
      client.end();
      return { ok: true, data: res };
    } catch (e) {
      console.log(e);
      return { ok: false, data: e };
    }
};
