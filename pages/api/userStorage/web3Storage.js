const axios = require("axios");

const apiKey = "api_key";
const cid = "your_cid";

const pinningServiceUrl = "https://api.web3.storage/pins";

const requestBody = {
  cid: cid,
};

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
};

axios
  .post(`${pinningServiceUrl}`, requestBody, axiosConfig)
  .then((response) => {
    console.log("Content pinned successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error pinning content:", error.response.data);
  });
