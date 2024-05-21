const axios = require("axios");
module.exports = async function (cid, filename) {
  console.log(cid);
  const apiKey = "e26940bdb02a545f888a";
  const apiSecret =
    "fca986aeb2cb6a22d2137ce9a556eae7821b7de22fbe1e582106698d7c476e19";

 
  const pinningUrl = "https://api.pinata.cloud/pinning/pinByHash";

  const requestBody = {
    hashToPin: cid,
  
    pinataMetadata: {
      name: filename,
      keyvalues: {
        customKey: "test",
      },
    },
  };

  
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecret,
    },
  };

  
  axios
    .post(pinningUrl, requestBody, axiosConfig)
    .then((response) => {
      console.log("Pinata response:", response.data);
    })
    .catch((error) => {
      console.error("Error pinning CID on Pinata:", error.response.data);
    });
};
