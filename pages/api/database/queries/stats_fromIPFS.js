const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (job) {
  let cid = job.ipfs.CID;
  let ip = job.connection.ip;
  let start = job.start;
  let done = job.done;
  let ipfs_start = job.ipfs.start;
  let ipfs_end = job.ipfs.end;
  let size = job.ipfs.info.CumulativeSize;

  try {
    let client = await getClient();
    client.connect();
    const query = ` INSERT INTO  stats.from_ipfs ( cid, start, done, ipfs_start, ipfs_end, ip, size) VALUES ( $1::text, $2::timestamp, $3::timestamp, $4::timestamp, $5::timestamp, $6::text, $7::int) ; `;
    await client.query(query, [
      cid,
      start,
      done,
      ipfs_start,
      ipfs_end,
      ip,
      size,
    ]);
    client.end();
  } catch (e) {
    console.log(e);
  }
};
