const {  getClient } = require("../connections/db_pg_connection");


module.exports = async function (cid) {
  let data;
  let  client
  try {
    client = await getClient()
    client.connect()
    const query = ` SELECT * FROM "public"."cid" WHERE "cid" ILIKE trim($1::text) LIMIT 1; `;
    data = await client.query(query, [cid]);
    client.end()
  } catch (e) {
    console.log(e);
  }

  if (data.rows[0]) {
   
    return data.rows[0];

  } else {
    return { filename: "", ext: "" };
  }
};
