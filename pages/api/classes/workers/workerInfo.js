const fs = require("fs");
export default class WorkerInfo {
  static filePath = "workers.log";
  static workers = [
    {
      address: `https://worker-1.ip-fs.cloud`,
      userCount: 0,
      lastSeen: Date.now(),
      connection: { ip: "146.190.159.49", port: 28888 },
      name: "WORKER-1",
    },
  ];

  static updateWorker(msg) {
    for (let i = 0; i < this.workers.length; i++) {
      let localName = this.workers[i].name.toUpperCase();
      let remoteName = msg.hostname.toUpperCase();

      if (localName === remoteName) {
        this.workers[i].userCount = msg.userCount;
        this.workers[i].lastSeen = Date.now();
      }
    }

    fs.writeFileSync(this.filePath, JSON.stringify(this.workers) + "\n");
  }

  static getList() {
    try {
      let data = fs.readFileSync(this.filePath, "utf8");
      let w = JSON.parse(data);
      return w;
    } catch (e) {
      return this.workers;
    }
  }
  static getLessUserCount() {
    let res = [];
    let data = "";
    try {
      data = fs.readFileSync(this.filePath, "utf8");
    } catch (e) {
      return this.workers;
    }
    let w = JSON.parse(data);

    w.forEach((worker) => {
      if (res.length == 0) {
        res.push(worker);
      } else {
        if (res[0].userCount > worker.userCount) {
          res = [worker];
        } else if (res[0].userCount == worker.userCount) {
          res.push(worker);
        }
      }
    });
    return res;
  }
}
