
  import { Buffer } from 'node:buffer';

 
  import {
    scryptSync,
    createDecipheriv,
  } from 'node:crypto';

  module.exports =  function (password) {   

      
    const algorithm = 'aes-192-cbc';
    const size = 24
    const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
    const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');

  const key = scryptSync(password, salt, size);
  
  return  createDecipheriv(algorithm, key, iv);

   

 
  }