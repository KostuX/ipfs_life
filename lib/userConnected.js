const fs = require("node:fs");

let IPGeolocationAPI = require("ip-geolocation-api-javascript-sdk");
var GeolocationParams = require("ip-geolocation-api-javascript-sdk/GeolocationParams.js");
import log_write from "./logs/LOG_write";
import sendEmail from "./email/email";
export default async function userConnected(data) {
  let ip = data.data.ip;
  let filename_userRecord = "./LOG/userRecord.log";
  let sendEmailInfo = process.env.LOG_EMAIL_INFO;

  function handleResponse(data) {
    // ip: ip
    // continent_name: 'Europe',
    // country_name: 'Ireland',
    // state_prov: 'County Cavan',
    // city: 'Cavan',
    // isp: 'Smyths Cablevision',
    // organization: 'Smyths Audio and Video Systems Ltd.',

    let text = `
          User connected - ${data.ip} * 
          Country - ${data.country_name} * 
          State -  ${data.state_prov} * 
          City -  ${data.city} * 
          ISP -  ${data.isp} * 
          Organization -  ${data.organization}\n * 
          
          `;

    if (data.ip == process.env.SERVER_IP) {
      try {
        let writeStream = fs.createWriteStream(filename_userRecord, {
          flags: "a",
        });
        writeStream.write(`${new Date().toUTCString()} | ${text}`);
        writeStream.write("\n");
        writeStream.close();
      } catch (e) {
        console.log(e);
        log_write(
          "ERROR",
          `Error writing userRecord log file \n| ${e.toString()}`
        );
      }
      if (sendEmailInfo == "true") {
        sendEmail({
          email: "INFO",
          text: `${new Date().toUTCString()} [x]\n ${text}`,
        });
      }
    }
  }
  let ipgeolocationApi = new IPGeolocationAPI(process.env.IP_API_KEY, false);
  var geolocationParams = new GeolocationParams();
  geolocationParams.setIPAddress(ip);
  ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);
}
