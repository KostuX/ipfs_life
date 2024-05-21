const { getClient } = require("../connections/db_pg_connection");

module.exports = async function (user, cb) {
  let client = await getClient();
  client.connect();
  try {
    let query_schema = ` CREATE schema IF NOT EXISTS "${user.user_id}";`;
    await client.query(query_schema, []);

    let query_table = `
    CREATE TABLE  IF NOT EXISTS "${user.user_id}"."keys" ( 
    title varchar(50) DEFAULT NULL,
    key BYTEA NULL DEFAULT 'none',
    algorithm varchar(50) DEFAULT NULL,
    iv BYTEA NULL DEFAULT 'none',
    created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (created),
    CONSTRAINT unique_ UNIQUE (title)
    );
  `;

    await client.query(query_table, []);

    query_table = `
    CREATE TABLE  IF NOT EXISTS "${user.user_id}"."history" ( 
    cid varchar(50) DEFAULT NULL,
    size INTEGER  DEFAULT 0,
    filename varchar(50) DEFAULT NULL, 
    type varchar(50) DEFAULT NULL,
    created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (created)    
    );
  `;

    await client.query(query_table, []);

    query_table = `
    CREATE TABLE  IF NOT EXISTS "${user.user_id}"."pin" ( 
    cid varchar(50) DEFAULT NULL,
    provider varchar(50)  DEFAULT 0,
    size INTEGER DEFAULT NULL, 
    filename varchar(250) DEFAULT NULL,
    created timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (created)    
    );
  `;

    await client.query(query_table, []);

    cb({ ok: true });
  } catch (e) {
    cb({ ok: false });
    console.log("Error creating user schema\n", e);
  }

  client.end();
};
