/* eslint-disable import/no-anonymous-default-export */
import Jobs from "./classes/Jobs";
import myValidator from "./classes/myValidator";
const dec_password = require("./classes/encryption/password/decrypt");
const path = require("path");
export default async (req, res) => {

  const validator = new myValidator()
  let err =[]
  let valid_cid = validator.cid(req.body.cid).err
  let valid_passkey = validator.text(req.body.passKey,6,64,"Passkey",true).err
  err = err.concat(valid_cid).concat(valid_passkey)

  valid_cid = validator.black_escape(valid_cid)
  valid_passkey = validator.black_escape(valid_passkey)

  if(err.length>0){
    console.log("respnse 202","download file" )
    res.status(201).json({ ok: false });
  }
  
  else{

  let cid = req.body.cid;
  let passKey = req.body.passKey;

  let job = Jobs.getByCID(cid);

  if(Object.keys(job) == 0){
    res.status(202)
   }

  dec_password(job, passKey, (e) => {
    if (e.ok) {
      const filePath = path.join(
        `${process.cwd()}`,
        `fileStore/downloads/${cid}`
      );
      res.setHeader("Content-Type", "application/octet-stream");
      const stream = require("fs").createReadStream(filePath);
      stream.pipe(res);
      res.on("close", () => {});
    } else {
      res.status(201).json({ ok: false });
    }

    //
  });
}
};
