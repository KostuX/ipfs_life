import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session_config";
import userConnected from "../../lib/userConnected";

import log_read from "../../lib/logs/LOG_read";
import log_write from "../../lib/logs/LOG_write";

export default withIronSessionApiRoute(LoggerAPI, ironOptions);

async function LoggerAPI(req, res) {
  res.status(200).send();
  let data = req.body;
  console.log(data);

  if (data?.type === "add") {
    log_write("INFO", `[*] ${data.data.type} - ${data.data.data.ip}`);

    // log user that connected to server
    if (data.data.type === "connected") {
      userConnected(data.data);
    }
  }
}
