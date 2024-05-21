import Jobs from "./classes/Jobs";
const stats_toIPFS_db = require("./database/queries/stats_toIPFS");
import addHistory from "./database/queries/addHistory";

export default async function jobApi(req, res) {
  let job_req = req?.body?.job;
  let user = req?.body?.user;

  if (req.body.req_type == "job") {
    let job_res = Jobs.getById(job_req.id);

    if (job_res?.ipfs?.end) {
      job_res.done = new Date();
      stats_toIPFS_db(job_res);

      addHistory(
        user,
        job_res.ipfs.CID,
        job_res.file[0].name,
        job_res.file[0].ext,
        job_res.size,
        "upload"
      );
    }

    res.status(200).json({ job: job_res });
  }

  res.status(200).json({ res: "No Data" });
}
