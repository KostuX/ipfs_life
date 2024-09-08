const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_FROM = process.env.EMAIL_FROM;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function sendEmail(msg) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_FROM,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "www.konstantinas.com",
      text: msg.text,
      html: `<h1>Email sent from www.konstantinas.com</h1>
      <h2>Sender: ${msg.email}</h2> 
       <h3>${msg.text}</h3>`,
    };

    return transport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
}
