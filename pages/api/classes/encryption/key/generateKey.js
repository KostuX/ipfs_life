const path = require("path");
const fs = require("fs");
import { scryptSync, randomFill, createDecipheriv } from "node:crypto";

module.exports = async function (user, password, cb) {
  const algorithm = "aes-256-cbc";
  const size = 32;

  randomFill(new Uint8Array(16), (err, iv) => {
    randomFill(new Uint8Array(16), (err, salt) => {
      const key = scryptSync(password, salt, size);

      let enc_key = {
        key: key,
        algorithm: algorithm,
        iv: iv,
      };
      cb({ ok: true, key: enc_key });
    });
  });
  //  const salt = Buffer.from('ᮕﴵ䮢훻郥䖹ꓤ迦', 'utf-16le');
  // const iv  = Buffer.from('랁䣱봄쏜ﳿ汚혅ᵌ', 'utf-16le');
};
