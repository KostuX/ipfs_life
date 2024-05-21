import ToIpfs from "./ipfsHelper/ToIpfs";
import FromIpfs from "./ipfsHelper/FromIpfs";
import InfoIpfs from "./ipfsHelper/IpfsInfo";
let db_getByCID = require("../database/queries/getCID");
let db_addToWall = require("../database/queries/addToWall");
let db_addCID = require("../database/queries/addCID");
let db_addPin = require("../database/queries/addPin");
let pinnataPIN = require("../userStorage/pinnata");

let enc_password = require("./encryption/password/encrypt");
let enc_key = require("./encryption/key/encrypt");

const fromIpfs_worker = require("./ipfsHelper/FromIpfs_worker");

export default class Jobs {
  constructor() {}
  static jobs = [];

  static assignTasks(job) {
    let opt = job.userOptions;

    console.log(opt)

    let taskList = [];
    if (opt?.secure?.selected) {
      if (opt.secure.type == "password") {
        taskList.push("password");
        job.secured = "password";
      } else if (opt.secure.type == "key") {
        taskList.push("key");
        job.secured = "key";
      }
    }
    taskList.push("IPFS");

    if (opt?.pWall?.selected) {
      taskList.push("pWall");
    }
    if (opt?.externalPin?.selected) {
      taskList.push("extPin");
    }

    //  taskList.push("end")
    job.taskList = taskList;

    this.nextStep(job);
  }

  static createIfNotExists(job_receive) {
    if (!this.jobs[job_receive.id]) {
      let job = Object.assign({}, job_receive);
      job.file = [];
      this.jobs[job.id] = job;
    }
  }

  static add(job) {
    this.jobs.push(job);
    this.assignTasks(job);
    //this.nextStepD(job);
  }

  static update(data) {
    this.jobs.forEach((job) => {
      if (job.id == data.id) {
        job = data;
        // this.assignTasks(job);
      }
    });
  }

  static getAll() {
    return this.jobs;
  }

  static getById(id) {
    return this.jobs[id];
  }

  static getByCID(cid) {
    let job_res = {};
    this.jobs.forEach((job) => {
      if (job.ipfs.CID == cid) job_res = job;
    });

    return job_res;
  }

  static async ipfs(job, callback) {
    if (job.type == "upload") {
      ToIpfs.getCid(job, callback);
    } else if (job.type == "download") {
      InfoIpfs.getSummary(job);

      await FromIpfs.getFileInfo(job);

      let db_data = await db_getByCID(job.ipfs.CID);
      job.filename_db = db_data.filename;
      job.ext_db = db_data.ext;
      job.secured = db_data.secured;
      job.type = db_data.type;
    } else {
      console.log("Unknown job", job);
    }
  }

  static async nextStep(job) {
    let taskList = job.taskList;

    if (taskList.length > 0) {
      switch (taskList[0]) {
        case "password": {
          enc_password(job, (e) => {
            if (e == "ok") {
              job.taskList.shift();
              this.nextStep(job);
            }
          });

          break;
        }
        case "key": {
          enc_key(job, (e) => {
            if (e == "ok") {
              job.taskList.shift();
              this.nextStep(job);
            }
          });

          break;
        }
        case "IPFS": {
          job.taskList.shift();

          await this.ipfs(job, (e) => {
            if (e == "ok") {
              db_addCID(
                job.ipfs.CID,
                job.file[0].name,
                job.file[0].ext,
                job.ipfs.type,
                job.secured
              );
             
              this.nextStep(job);
            }
          });

          break;
        }
        case "pWall": {
          let cid = job.ipfs.CID;
          let tag = job.userOptions.pWall.tag;
          db_addToWall(cid, tag);
          break;
        }
        case "extPin": {
          let filename =""          
          let cid = job.ipfs.CID;
          if(job.ipfs.type === 'file')
          {
          filename = `${job.file[0].name}.${job.file[0].ext}`
          }else{
            filename = cid
          }
          
          
           pinnataPIN(cid,filename);
           db_addPin(job.user, cid, "pinata", filename, job.size)
          break;
        }
      }
    }
  }
}
