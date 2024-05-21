let loadSignatures = require("./magicBypeSource");

  //const hexString = "00 05 04"; 
 // const byteArray = hexString.split(' ').map(hex => parseInt(hex, 16));
    
 //const byteArray = [0x00, 0x05, 0x04];
 //const hexString = byteArray.map(byte => byte.toString(16).padStart(2, '0')).join(' ');


export default class extPredict {

    constructor() {}

static async getExt(job, mBytes){
   
  this.getByMagicBytes(job, mBytes)
   

}

static async getByMagicBytes(job, mBytes){
    
    const mBytes_str = Array.from(mBytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join(' ');

   let possibleExt = []
   let signatures = await loadSignatures()

let maxMatch = 0
   signatures.forEach(e => {
   
    if(  mBytes_str.startsWith(e["Header (hex)"].toLowerCase()) )
    {
      if(e["Header (hex)"].length > maxMatch){
        e["File extension"] = e["File extension"].split("|")
        possibleExt = [e]
        maxMatch = e["Header (hex)"].length
      }
      else if(e["Header (hex)"].length == maxMatch ){
        e["File extension"] = e["File extension"].split("|")
        possibleExt.push(e)
      }

     // maxMatch = e["Header (hex)"].length> maxMatch? e["Header (hex)"].length:maxMatch
     // console.log(e["Header (hex)"].length)
      //  e["File extension"] = e["File extension"].split("|")
     //   possibleExt.push(e)
    }   
   });


    job.mBytesExt = possibleExt

}

}