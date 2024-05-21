import { create,globSource,  urlSource } from "kubo-rpc-client";
import {CID} from "multiformats"

import Jobs from "../Jobs"
const { join } = require('path')
const fs = require("fs");

export default class IpfsInfo {
    constructor() {}
    static ipfs = create({ url: "http://127.0.0.1:5001/api/v0" });


    // not working properly  !!!!!!!!!!!!!!!!!!
    // some has 1 item but it is folder
    static async isFolder(cid){   
        let count = 0;     
        for await(const file of this.ipfs.ls(CID.parse(cid))) {
           count++;    
          }           
     
        return count > 1
    }

    static async getSummary(job){  
       let info;
       let cid = job.ipfs.CID   

        
info = await this.ipfs.dag.stat(cid)

job.ipfs.info = info
return info
           
    }


    static async getSummaryCID(cid){  
        let info;
        
 
         
 info = await this.ipfs.dag.stat(cid)
 

 return info
            
     }
    



}