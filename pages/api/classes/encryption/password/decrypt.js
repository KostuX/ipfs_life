import {
    createReadStream,
    createWriteStream,
 
  } from 'node:fs';
  import { Buffer } from 'node:buffer';

  const path = require("path");
  const fs = require('fs');
  import {
    scryptSync,
    createDecipheriv,
  } from 'node:crypto';

  import {
    pipeline,
  } from 'node:stream';

  module.exports = async function (job, password, cb) {   



    let in_path = path.join(`${process.cwd()}`,`${job.location}`) 

    let out_path = path.join(`${process.cwd()}`,`${job.location}_`)
    const input =  createReadStream(in_path);
    const output =createWriteStream (out_path);
    
   // const input = createReadStream('test.enc');
  //  const output = createWriteStream('test.js');
  decrypt(input, output, password, cb)


  function decrypt(input, output, password, cb) {
      
    const algorithm = 'aes-192-cbc';
    const size = 24
    const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');

  const key = scryptSync(password, salt, size);
  
  const decipher = createDecipheriv(algorithm, key, iv);



/*
  
  pipeline(input, decipher, output, (err) => {
    if (err) {
    console.error('Decryption failed:', err);
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
  });

  */
  
  input.pipe(decipher).pipe(output);

  

  output.on('finish', () => {
    fs.rename(in_path, in_path+"_backup",(err) =>{
        fs.rename(out_path, in_path, (err) =>{
          console.log('Decryption successful');
         cb({ok:true, msg:'Decryption successful'});
})
    })
  });
  }
  }