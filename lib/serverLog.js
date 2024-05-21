const fs = require("fs");

module.exports = async function (message, type) {
  let file_Path = "Logs/info.log";
  if (type === "ERROR") {
    file_Path = "Logs/error.log";
  }
  fs.appendFileSync(file_Path, JSON.stringify(message) + "\n");
};
