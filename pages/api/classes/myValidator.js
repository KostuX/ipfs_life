var validator = require("validator");
var xss = require("xss");
import { CID } from "multiformats/cid";

export default class myValidator {
  cid(cid) {
    let err = [];
    cid = this.clean(cid);
    cid = this.black_escape(cid);

    let e = this.text(cid, 5, 100, "CID", true).err;
    err = err.concat(e);
    try {
      CID.parse(cid);
    } catch (error) {
      err.push("Invalid CID ");
    }
    return { ok: err.length == 0, err };
  }

  text(input, min, max, tag, ascii) {
    let err = [];
    tag = tag ? tag : "Input";
    if (input) {
      if (!validator.isLength(input, { min: min, max: max })) {
        err.push(`${tag} must be between ${min} and ${max} characters. `);
      } else if (ascii && !validator.isAscii(input)) {
        err.push(`${tag} contains invalid characters. `);
      }
    } else {
      err.push(`${tag} cannot be blank`);
    }
    return { ok: err.length == 0, err };
  }

  clean(input) {
    let output = "";
    output = xss(input);
    return output;
  }

  isEmail(email) {
    let err = [];
    let ok = true;
    if (!email) {
      return { ok, err: ["Blank Email"] };
    }
    if (validator.isEmail(email)) {
      ok = true;
    } else {
      ok = false;
      err = `Email is not valid.`;
    }
    return { ok, err };
  }

  black_escape(input) {
    let output = "";
    const chars_blacklist = "{;#%/=?`:|&$}+-";
    output = validator.escape(input);
    output = validator.blacklist(input, chars_blacklist);
    return output;
  }
}
