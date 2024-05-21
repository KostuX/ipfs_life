const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (tag) {
  let data;
  let client = await getClient()
    client.connect()
  try {
    const query = ` SELECT * FROM "public"."wall" WHERE "tag" ILIKE trim($1::text) ; `;
    data = await client.query(query, [tag]);
  } catch (e) {
    console.log(e);
  }

  client.end()
    return data.rows;

};
