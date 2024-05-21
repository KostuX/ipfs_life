const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (cid, tag) {
  try {
    let client = await getClient()
    client.connect()
    const query = ` INSERT INTO  public.wall ( cid, tag) VALUES ( $1::text, $2::text) ON CONFLICT (cid, tag) DO NOTHING; `;
    await client.query(query, [cid, tag]);
    client.end()
  } catch (e) {
    console.log(e);
  }
};
