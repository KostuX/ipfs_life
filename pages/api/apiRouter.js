import WorkerInfo from "./classes/workers/workerInfo";

export default async function apiRouter(req, res) {
  let api;

  try {
    let d = JSON.parse(req.body);
    api = d.api;
  } catch (e) {
    api = req.body.api;
  }

  let server = "/";

  if (api) {
    switch (api) {
      case "/api/downloadFile": {
        server = await findBalance(api, 3);

        res.status(200).json({ ok: true, server: server });
        break;
      }
      case "/api/downloadVideo": {
        server = await findBalance(api, 3);
        res.status(200).json({ ok: true, server: server });
        break;
      }
      default: {
        console.log("api, apie", api);
        res.status(200).json({ ok: true, server: api });
      }
    }
  }
}

async function findBalance(api, i) {
  /*
  let servers = [
    `https://worker-1.ip-fs.cloud`,
    `https://worker-2.ip-fs.cloud`,
    `https://worker-3.ip-fs.cloud`,
  ];
  */
  let servers = WorkerInfo.getLessUserCount();
  i = Math.floor(Math.random() * (servers.length - 0)) + 0;

  return `/:18888${api}`;
  return `${servers[i].address}${api}`;
}
