const fs = require("fs");
const { Client, Pool } = require("pg");

// move to env
let user = "ipfs_b00148740"
let password = "Vz1nVqus5rCOHRvWGKqLRA"
let database = "IPFS_web" 

const config = {
  connectionString: `postgresql://${user}:${password}@plain-ibex-7671.8nj.cockroachlabs.cloud:26257/${database}?sslmode=verify-full`,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync("./pages/api/database/connections/cockroach_db_root.crt").toString(),
  },
};


let pool = new Pool({config})

let client =  pool.connect()





module.exports = { client };
