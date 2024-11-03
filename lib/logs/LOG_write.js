const fs = require("node:fs");

export default async function log_write(type, data) {
  let path = process.env.LOG_PATH;

  let filename = "default.txt";
  let logStream ;

  try {
    if (type === "INFO") {
      filename = process.env.LOG_FILENAME_INFO;
    } else if (type === "ERROR") {
      filename = process.env.LOG_FILENAME_ERROR;
    } else {
      console.log("UNKNOWN Log type [Please use INFO or ERROR]");
    }

    let msg = `[${type}] ${new Date().toUTCString()} - ${data}`;


   
       logStream = fs.createWriteStream(`${path}${filename}`, {
        flags: "a+",
      });

      logStream.on('error', function(err) {
        console.log("ERROR: " + err);
       
      });
      
    
   
    logStream.write(msg);
    logStream.end("\n");
  } catch (error) {
    console.log("ERROR: writing log file", error);
  }
}
