const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user) {
  let client = await getClient();
  client.connect();
  let res;
  if (user)
    try {
      let query = `SELECT * FROM  "${user.user_id}"."pin" ORDER BY created DESC  ; `;
      res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.log(err);
    }
  client.end();
};
