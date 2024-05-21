const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (job) {
  let cid = job.ipfs?.CID;
  let ip = job.connection.ip;
  let start = job.start;
  let done = job.done;
  let ipfs_start = job.ipfs?.start;
  let ipfs_end = job.ipfs?.end;
  let size = job.size;

  //if(job.userOptions.secure.type)
  let encryption = job.secured;

  let client = await getClient();
  client.connect();

  try {
    const query = ` INSERT INTO  stats.to_ipfs ( cid, start, done, ipfs_start, ipfs_end, ip, size,encryption) VALUES ( $1::text, $2::timestamp, $3::timestamp, $4::timestamp, $5::timestamp, $6::text, $7::int, $8::text) ; `;
    await client.query(query, [
      cid,
      start,
      done,
      ipfs_start,
      ipfs_end,
      ip,
      size,
      encryption,
    ]);
  } catch (e) {
    console.log(e);
  }

  client.end();
};
