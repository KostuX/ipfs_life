const fs = require('fs');
const tar = require('tar');
const path = require("path");
import { v4 as uuidv4 } from "uuid";
module.exports = async function (job, cb) {


//let  input = [`${job.location}`];
let output = path.join(`${process.cwd()}`,`${job.location}/${job.id}.tar`)
let input = []


job.file.forEach(e => {
    let filename =   `${job.location}/${e.name}.${e.ext}`
    input.push(filename)      
});


 tar.c(
    {
    gzip: true,
    file: output,    
    strip:10,
    preservePaths :false

 },input).then((e)=>{

    job.file =[]

    let file ={
        id: uuidv4(),
        time: new Date(),
        name: job.id,
        ext: "tar",
        size: job.size,
        currentFile: 1

    }

    job.file =[file]
    job.filecount = 1 

       cb({ok:true, msg:'Tar archive created successfully.'})

    })




 
  
  // Pipe the tar stream to the output file stream
  //tarStream.pipe(outputStream);
  
  // Close the tar stream after it's finished
 

/*
input.forEach((file) => {
    tarStream.add(file);
  });


tarStream.on('error', (err) => {
    console.error('Error creating tar archive:', err);
    cb({ok:false, msg:err})
  });
  
  tarStream.on('close', () => {
    console.log('Tar archive created successfully.');
    /*
    fs.rename(input, input+"_backup",(err) =>{
        fs.rename(output, input, (err) =>{   
         
   
    cb({ok:true, msg:'Tar archive created successfully.'})
        })
      })


  });
*/





}