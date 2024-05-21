const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "monToolB00148740",
    //pass: "lbfjmtqqlvrtmmin",
    pass: "jnnxlvdsoyctdrhx",
  },
});
//transporter.verify().then(console.log).catch(console.error);

module.exports = { transporter };
