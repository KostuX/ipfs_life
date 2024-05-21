import { createReadStream, createWriteStream } from "node:fs";
import { Buffer } from "node:buffer";
const getKey = require("../../../database/queries/getEncKey");

const path = require("path");
const fs = require("fs");
import { scryptSync, createDecipheriv } from "node:crypto";

import { pipeline } from "node:stream";

module.exports = async function (job, user, key_title, cb) {
  getKey(user, key_title, (e) => {
    if (e.ok) {
      let in_path = path.join(`${process.cwd()}`, `${job.location}`);
      let out_path = path.join(`${process.cwd()}`, `${job.location}_`);
      const input = createReadStream(in_path);
      const output = createWriteStream(out_path);

      try{decrypt(input, output, e.key, cb);}
      catch(err){
        console.log("dec err")
      }

      

      function decrypt(input, output, enc_key, cb) {
       
        const algorithm = enc_key.algorithm;
        const iv = enc_key.iv;
        const key = enc_key.key;
        const decipher = createDecipheriv(algorithm, key, iv);


      
        input.pipe(decipher).pipe(output);
       
        output.on("finish", (err) => {       
          fs.rename(in_path, in_path + "_backup", (err) => {
            fs.rename(out_path, in_path, (err) => {
              console.log("Decryption successful");
              cb({ ok: true, msg: "Decryption successful" });
            });
          });
        });
       
      }
    }
  });
};
