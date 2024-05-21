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

  const getKey = require("../../../database/queries/getEncKey")

  const toTar = require("../../compress/toTar")
  const path = require("path");

  module.exports = function (job,callback) {

    let key_title = job.userOptions.secure.enc_key
    let user = job.user

    getKey(user, key_title, (e)=>{

      if(e.ok)
      {


      const key = e.key.key
      const algorithm = e.key.algorithm;
      const iv  = e.key.iv

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
      encrypt(input, output, callback)
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
      
          encrypt(input, output, callback)  
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
    


    }}
    })



    
   

  

    /*


  

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

*/


}