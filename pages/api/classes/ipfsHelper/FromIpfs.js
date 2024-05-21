const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { Readable } = require('stream');
import { create, globSource, urlSource } from "kubo-rpc-client";
import { CID } from "multiformats";
import Jobs from "../Jobs";
import IpfsInfo from "./IpfsInfo";
import extPredict from "../extPredict/extPredict";
const { join } = require("path");
const fs = require("fs");
export default class ToIpfs {
  constructor() {}
  static ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });

  static async getFromJob(job) {
    let cid = job.ipfs.CID;

    // if it is folder
    //  if(await IpfsInfo.isFolder(cid)){
    //      job.ipfs.type = "folder"
    //   this.getFolder(job)
    //   }else{

    this.getFile(job);
    //  }
  }

  static async getFolder(job) {
    let cid = job.ipfs.CID;
    let response = new Uint8Array([]);
    job.ipfs.start = new Date();
    job.ipfs.status = "downloading"
    let proc = 0

    const download = `./fileStore/downloads`;

    if (!fs.existsSync(download)) {
      fs.mkdirSync(download, { recursive: true });
    }
   let info = await this.ipfs.object.stat(cid)  
   
       
    const resultBuffer = new Uint8Array(info.CumulativeSize+10000);

    console.log("connecting to ipfs: folder");

    let kubo_res = this.ipfs.get(CID.parse(cid), { archive: true });
    
    for await (const resp of kubo_res) {
    //  const resultBuffer = new Uint8Array(response.length + resp.length);
   //   resultBuffer.set(response, 0);
    //  resultBuffer.set(resp, response.length);
    //  response = resultBuffer;   

    resultBuffer.set(resp, proc);
    proc+=resp.length 
     }
     response = trimByteArray( resultBuffer)

    console.log("Folder received..");
    job.ipfs.end = new Date();
    job.ipfs.type = "folder";
    job.ext = "tar";
    await fs.promises.writeFile(`${download}/${cid}`, response);
    job.location = download + "/" + cid;
    Jobs.update(job);
  }

  static async getFileInfo(job) {   
    let cid = job.ipfs.CID;
    let info = await this.ipfs.object.stat(cid)  
  
    let magicBites = new Uint8Array([]); 

    try {
      console.log("Connecting to ipfs: Getting file info");    
      let kubo_res = this.ipfs.cat(CID.parse(cid))    
    
        for await (const resp of kubo_res) { 
            magicBites = resp.slice(0, 32);
           extPredict.getExt(job, magicBites); 
          break 
      }    
    

      job.ipfs.end = new Date();
      job.ipfs.type = "file";
      job.ipfs.info = info
      job.magicBites = magicBites;
      delete job.ext; 
  
      Jobs.update(job);     

    
    } catch (HTTPError) {
      
      job.ipfs.end = new Date();
      job.ipfs.type = "folder";
      job.ipfs.info = info
      job.magicBites = magicBites;
      job.ext = "tar"; 
  
      Jobs.update(job); 

 
    } 

 

  
  }


  static async getFile(job) {   
    let cid = job.ipfs.CID;
    let response = new Uint8Array([]);
    job.ipfs.start = new Date();
    job.ipfs.status = "downloading"
   
  
    let magicBites = new Uint8Array([]);
    const download = `./fileStore/downloads`;

    if (!fs.existsSync(download)) {
      fs.mkdirSync(download, { recursive: true });
    }


    try {
      console.log("Connecting to ipfs: Getting file");      

      let info = await this.ipfs.object.stat(cid)
      const resultBuffer = new Uint8Array(info.CumulativeSize);
    
      let kubo_res = this.ipfs.cat(CID.parse(cid))     
      let proc = 0
      let justStarted = true
   
        for await (const resp of kubo_res) {
        
          if (justStarted) {
            magicBites = resp.slice(0, 32);
            extPredict.getExt(job, magicBites); 
            justStarted=false
              }                        
 
        resultBuffer.set(resp, proc);
        proc+=resp.length   
      }
      response = trimByteArray( resultBuffer)
    

      job.ipfs.end = new Date();
      job.ipfs.type = "file";
      job.magicBites = magicBites;
      delete job.ext;
  
      await fs.promises.writeFile(`${download}/${cid}`, response);
      job.location = download + "/" + cid;
      Jobs.update(job);
      

      console.log("File received..");
    } catch (HTTPError) {
 
      
      console.log("Failed with file, trying as folder");

      this.getFolder(job);
    } 

 

  
  }

  static   getFileStream(job) {
    let cid = job.ipfs.CID;
    job.ipfs.start = new Date();
    job.ipfs.status = "downloading" 
    let magicBites = new Uint8Array([]);

    let kubo_res = this.ipfs.cat(CID.parse(cid))  
 /*
    // get magicbits
      for await (const resp of kubo_res) {        
          magicBites = resp.slice(0, 32);
          extPredict.getExt(job, magicBites); 
        break        
      }
*/
     
    return Readable.from(kubo_res)
  }


  static getFolderStream(job) {
    let cid = job.ipfs.CID;
    job.ipfs.start = new Date();
    job.ipfs.status = "downloading" 

    let kubo_res = this.ipfs.get(CID.parse(cid), { archive: true }); 
   
    return Readable.from(kubo_res)
  }




  static  videoStream(cid) {

    let kubo_res = this.ipfs.cat(CID.parse(cid))  

     
    return Readable.from(kubo_res)
  }





}





function trimByteArray(uint8Array) {
  let lastIndex = uint8Array.length - 1;
  while (lastIndex >= 0 && uint8Array[lastIndex] === 0) {
    lastIndex--;
  }
 
  return uint8Array.subarray(0, lastIndex + 1);
}