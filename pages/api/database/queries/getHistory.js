const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, limit) {
  let client = await getClient();
  client.connect();
  let res;
  if (user)
    try {
      let query = `SELECT * FROM  "${user.user_id}"."history" ORDER BY created DESC LIMIT  $1::int ; `;
      res = await client.query(query, [limit]);
      return res.rows;
    } catch (err) {
      console.log(err);
    }
  client.end();
};
