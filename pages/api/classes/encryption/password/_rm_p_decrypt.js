const crypto = require('crypto');
const fs = require('fs');

const path = require("path");
const { pipeline } = require('stream');

module.exports = async function (job, password, cb) {


const input = path.join(`${process.cwd()}`,`${job.location}`);
const output = path.join(`${process.cwd()}`,`${job.location}_`);



decrypt(input, output, password, cb)

  
  function decrypt(input, output, password, cb) {

    const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');
    //const key = Buffer.from('鱪殢⟻ꂲ楾插훈＇凑劌ﵹꂴ玴㎘', 'utf-16le');

    const key = crypto.scryptSync(password, salt, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);


    const readStream = fs.createReadStream(input);
    const writeStream = fs.createWriteStream(output);
  
    pipeline(
      readStream,
      decipher,
      writeStream,
      (err) => {
        if (err) {
        //  console.error('Decryption failed:', err);
          cb({ok:false, msg:err.reason});
   cb(err);
        } else {
          fs.rename(input, input+"_backup",(err) =>{
            fs.rename(output, input, (err) =>{
             // console.log('Decryption successful');
              cb({ok:true, msg:'Decryption successful'});
            })
          })
        
         
        }
      }
    );
  }


}