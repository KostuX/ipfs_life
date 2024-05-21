import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';

  const fs = require('fs');
  
  import {
    pipeline,
  } from 'node:stream';
  
  import {
    scrypt,
    scryptSync,
    randomFill,
    createCipheriv,
  } from 'node:crypto';

  const toTar = require("../../compress/toTar")
  const path = require("path");

  module.exports = function (job,callback) {



   const password = job.userOptions.secure.password

   

    const algorithm = 'aes-192-cbc';
    const size = 24
    const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');


   const key = scryptSync(password, salt, size);
   const cipher = createCipheriv(algorithm, key, iv);

    let input =""
    let output =""


    if(job.filecount == 1)
    {
       input = path.join(
        `${process.cwd()}`,
        `${job.location}/${job.file[0].name}.${job.file[0].ext}`
      );
  
       output = path.join(
        `${process.cwd()}`,
        `${job.location}/${job.file[0].name}.${job.file[0].ext}_enc`
      );
      encrypt(input, output, password,callback)
    }
  
    else{
  
      toTar(job, (e)=>{    
  
        if(e.ok){
           input = path.join(
            `${process.cwd()}`,
            `${job.location}/${job.file[0].name}.${job.file[0].ext}`
          );
      
           output = path.join(
            `${process.cwd()}`,
            `${job.location}/${job.file[0].name}.${job.file[0].ext}_enc`
          );
      
          encrypt(input, output, password,callback)  
        }
  
      
      })
  
    }


    function encrypt(input, output){
        pipeline(createReadStream(input), cipher, createWriteStream(output), (err) => {
            if (err) {console.log(err)}
            else{
                fs.rename(input, input+"_backup",(err) =>{
                    fs.rename(output, input, (err) =>{
                      console.log('Encryption successful');
                      callback("ok");
                    })
                  })
            }
          });
    


    }


/*
       let key =  scrypt(password, salt, size, (err, key) => { 
        if(err){console.log("Error generating key: ", err)}
        else{
            
            const bufferToString = key.toString('utf-16le');
            console.log(bufferToString)
        
        
        }
       })
*/
    

 /*

  scrypt(password, 'salt', 24, (err, key) => {
    if (err) throw err;

    randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
  
   
  
      const input = createReadStream('test.js');
      const output = createWriteStream('test.enc');
  
      pipeline(input, cipher, output, (err) => {
        if (err) throw err;
      });
    });
  });
*/
}