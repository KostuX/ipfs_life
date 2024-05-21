const crypto = require('crypto');
const fs = require('fs');
const { pipeline } = require('stream');
const path = require("path");

const toTar = require("../../compress/toTar")

const encryptJob = require("./encrypt")


module.exports = function (job,callback) {
  const password = job.userOptions.pass.password

  encryptJob(job)

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
  

 

function generateKeyAndIV(password, salt) {
    const key = crypto.scryptSync(password, salt, 32);
   // const iv = crypto.randomBytes(16); 

    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');
    
   
    return { key, iv };
  }

  function encrypt(inputFilePath, outputFilePath, password, callback) {
   // const salt = crypto.randomBytes(16);

   // const bufferToString = salt.toString('utf-16le');
   // console.log(bufferToString)


   // const { key, iv } = generateKeyAndIV(password, salt);  
    const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');
    const key = crypto.scryptSync(password, salt, 32);


    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
  
    pipeline(
      readStream,
      cipher,
      writeStream,
      (err) => {
        if (err) {
          console.error('Encryption failed:', err);
          callback(err);
        } else {
            fs.rename(input, input+"_backup",(err) =>{
              fs.rename(output, input, (err) =>{
                console.log('Encryption successful');
                callback("ok");
              })
            })
   
        }
      }
    );
  }

}