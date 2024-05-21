import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "./session/session_config";
const fs = require("fs");

// Specify the file path

export default withIronSessionApiRoute(logAPI, ironOptions);
async function logAPI(req, res) {
  let file = "./Logs/info.log";

  if (req.body === "ERROR") {
    file = "./Logs/error.log";
  }
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return { ok: false, data: [] };
    }

    let lines = data.split("\n");
    lines = lines.reverse();

    res.status(200).send({ ok: true, data: lines.slice(0, 100) });
  });
}
