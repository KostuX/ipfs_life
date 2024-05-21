const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (ext, header) {
  let client = await getClient()
     
  if (!(ext == "")) {
    try {
      client.connect().then(async ()=>{
        const query = ` INSERT INTO  public.fileheader ( ext, header) VALUES ( $1::text, $2::bytea) ON CONFLICT (ext, header) DO NOTHING; `;
        await client.query(query, [ext, header])
      })
      
      
    } catch (e) {
      console.log(e);
    }
  }
 
};
