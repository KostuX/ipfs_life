const mailtransporter = require("./connectGmail");

module.exports = async function sendMail(user, cid, cb) {
  let email = user.email;
  let name = user.name;

  console.log("EMAIL:", email);

  let mailDetails = {
    from: "ip-fs.cloud",
    to: email,
    subject: `IPFS info`,
    text: `CID: ${cid}  \nLink: https://ip-fs.cloud/?cid=${cid}`,
  };

  mailtransporter.transporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error sending email", err);
      cb({ ok: false, msg: err });
    } else {
      console.log("Email sent successfully");
      cb({ ok: true, msg: "Email sent successfully" });
    }
  });
};
