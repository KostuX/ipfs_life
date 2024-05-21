const getKey = require("../../../database/queries/getEncKey");
import { createDecipheriv } from "node:crypto";

module.exports = async function (user, key_title, cb) {
  getKey(user, key_title, (e) => {
    if (e.ok) {
      let enc_key = e.key;
      const algorithm = enc_key.algorithm;
      const iv = enc_key.iv;
      const key = enc_key.key;
      const decipher = createDecipheriv(algorithm, key, iv);

      cb({ ok: true, decipher: decipher });
      return decipher;
    }
  });
};
