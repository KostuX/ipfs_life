const db_getTag = require("./database/queries/getTag");
const db_getCid = require("./database/queries/getCID");
import myValidator from "./classes/myValidator";

export default async function getByTag(req, res) {
  const validator = new myValidator();

  let tag = validator.black_escape(req?.body?.tag);
  let output = [];

  let tags = await db_getTag(tag);

  await Promise.all(
    tags.map(async (e) => {
      let item = await db_getCid(e.cid);
      output.push(item);
    })
  );

  res.status(200).json({ ok: true, data: output });
}
