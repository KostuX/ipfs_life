const fs = require("node:fs");
import sendEmail from "../email/email";

export default async function log_write(type, data) {
  let path = process.env.LOG_PATH;
  let mailError = process.env.LOG_EMAIL_ERROR;
  let mailInfo = process.env.LOG_EMAIL_INFO;

  let filename = "default.txt";

  try {
    if (type === "INFO") {
      filename = process.env.LOG_FILENAME_INFO;
    } else if (type === "ERROR") {
      filename = process.env.LOG_FILENAME_ERROR;
    } else {
      console.log("UNKNOWN Log type [Please use INFO or ERROR]");
    }

    let msg = `[${type}] ${new Date().toUTCString()} - ${data}`;
    const logStream = fs.createWriteStream(`${path}${filename}`, {
      flags: "a",
    });
    logStream.write(msg);
    logStream.end("\n");

    if (
      (mailError === "true" && type === "ERROR") ||
      (mailInfo === "true" && type === "INFO")
    ) {
      sendEmail({
        email: "LOG",
        text: msg,
      });
    }
  } catch (error) {
    console.log("ERROR: writing log file", error);
  }
}
