/* eslint-disable import/no-anonymous-default-export */
import { create, globSource, urlSource } from "kubo-rpc-client";
import multer from "multer";
const path = require("path");
const fs = require("fs");
let db_CreateAll = require("./database/queries/createTable");
let db_addFile = require("./database/queries/addFileHeader");
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "./session/session_config";
import myValidator from "./classes/myValidator";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { useSession } from "next-auth/react";

import Jobs from "./classes/Jobs";

const upload = multer();

export const config = {
  api: {
    bodyParser: false,
  },
};
export default withIronSessionApiRoute(uploadApi, ironOptions);

async function uploadApi(req, res) {
  let session = await getServerSession(req, res, authOptions);
  //db_CreateAll();
  const validator = new myValidator();
  let err = [];

  if (!session) {
    session = req.session;
  }

  const chunkDir = "./chunks";

  //let jobs = [];

  upload.single("file")(req, res, async function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
    const file = req.file;

    let chunk = file.buffer;
    let chunkNumber = Number(validator.black_escape(req.body.chunkNumber));
    let totalChunks = Number(validator.black_escape(req.body.totalChunks));
    let fileName = req.body.fileName;
    let fileExt = validator.black_escape(req.body.fileExt);
    let settings = JSON.parse(req.body.settings);

    settings.metadata.user = session.user;

    let metadata = settings.metadata;
    Jobs.createIfNotExists(metadata);

    if (metadata.filecount == metadata.file.length) {
      Jobs.getJobById(metadata.id).done = new Date();
      console.log("uploaded");
    }

    const chunkFilePath = path.join(
      `${process.cwd()}`,
      `${chunkDir}/${fileName}.${fileExt}.part_${chunkNumber}`
    );

    if (!fs.existsSync(chunkDir)) {
      fs.mkdirSync(chunkDir);
    }

    try {
      await fs.promises.writeFile(chunkFilePath, chunk);

      if (chunkNumber == 0) {
        let header = chunk.slice(0, 128);
        db_addFile(metadata.file.ext, header);
      }

      res.status(200).json({ message: "msg" });

      if (chunkNumber === totalChunks - 1) {
        await mergeChunks(`${fileName}.${fileExt}`, totalChunks, metadata);
        console.log("File marged");
      }
    } catch (error) {
      console.error("Error saving chunk:", error);
      res.status(500).json({ error: "Error saving chunk" });
    }
  });

  const mergeChunks = async (fileName, totalChunks, metadata) => {
    const mergedFilePath = `./fileStore/uploads/${metadata.id}`;

    if (!fs.existsSync(mergedFilePath)) {
      fs.mkdirSync(mergedFilePath, { recursive: true });
    }

    const writeStream = fs.createWriteStream(`${mergedFilePath}/${fileName}`);
    for (let i = 0; i < totalChunks; i++) {
      const chunkFilePath = `${chunkDir}/${fileName}.part_${i}`;
      const chunkBuffer = await fs.promises.readFile(chunkFilePath);
      writeStream.write(chunkBuffer);
      fs.unlinkSync(chunkFilePath);
    }

    writeStream.end();

    writeStream.on("finish", function () {
      let job = Jobs.getById(metadata.id);
      db_CreateAll();

      job.file.push(metadata.file);

      if (metadata.filecount == job.file.length) {
        job.connection = { ip: req.connection.remoteAddress };
        job.location = mergedFilePath;
        job.status = 1;
        //job.done = new Date();
        Jobs.add(job);

        console.log("Upload completed");
      }
    });
  };
}
