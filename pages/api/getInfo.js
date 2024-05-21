//import Jobs from "./classes/Jobs";

export default async function getInfo(req, res) {
  let cid = req.body.cid;

  let data = {};
  // let job = Jobs.getByCID(cid);

  // QmZnsHdEPZoLYhMfZWbQmGdkuyfLEVasGhjM9aFCAkiKj1 15 kb
  // QmcdF6EwhRnHbpemqXB6sxrP5j8qPyc7THU5A4XtUD86Mo 341 kb
  // QmYFyYnH5b9HkW3mZymXYohbSeV3z2VmVxJhZHStT2WfXb 13 mb
  // QmRUtMaMfi2t1ShjCnBaUzUXwriwPVbkrjNTXfebaYw8tH 26 mb
  // QmZwDUmAU6VsSEupkzD1PN8cNXgyJxeDdAD1hDZFvjjwCj 125 mb
  // QmVpKcvTfxA5eJgnEioAoVR7HVvvAU7qbCyKYqVNpG7WbC 1 gb

  res.status(200).json({ message: "msg" });
}
