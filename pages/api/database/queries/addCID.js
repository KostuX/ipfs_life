const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (cid, filename, ext, type, secured) {
  
  try {
   
    let client = await getClient()
    client.connect()
    const query = ` INSERT INTO  public.cid ( cid, filename, ext, type,secured) VALUES ( $1::text, $2::text, $3::text, $4::text, $5::text) ON CONFLICT (cid) DO NOTHING; `;
    await client.query(query, [cid, filename, ext, type, secured]);

    client.end()
    
  } catch (e) {
    console.log(e);
  }
};
