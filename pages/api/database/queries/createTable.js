const { getClient } = require("../connections/db_pg_connection");

module.exports = async function () {

  let client = await getClient()
  client.connect().then(()=>{

 
  client.query(`
    CREATE TABLE IF NOT EXISTS "fileheader" (
    ext varchar(50) DEFAULT NULL,
    header BYTEA NULL DEFAULT 'none',
    created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (created),
    CONSTRAINT unique_column1_column2 UNIQUE (ext, header)
    );
  `);
  

  client.query(`
    CREATE TABLE IF NOT EXISTS "cid" (
    cid varchar(50) DEFAULT NULL,
    filename varchar(254) NULL DEFAULT 'none',
    ext varchar(10) NULL DEFAULT 'none',
    type varchar(10) NULL DEFAULT 'file',
    created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cid)   
    );
  `);

  client.query(`
  CREATE TABLE IF NOT EXISTS "wall" (
  cid varchar(50) DEFAULT NULL,
  tag varchar(254) NULL DEFAULT 'none', 
  created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT unique_column1_column2 UNIQUE (cid, tag)
  );
`);



})

}



//   cid, filename, ext, type