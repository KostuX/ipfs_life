const axios = require("axios");
module.exports = async function (cid) {
  const apiKey = "e26940bdb02a545f888a";
  const apiSecret =
    "fca986aeb2cb6a22d2137ce9a556eae7821b7de22fbe1e582106698d7c476e19";

  const pinataBaseUrl = "https://api.pinata.cloud/pinning/unpin/";

  try {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: apiKey,
        pinata_secret_api_key: apiSecret,
      },
    };

    const response = await axios.delete(`${pinataBaseUrl}${cid}`, axiosConfig);
    console.log("Pin removed from pinata:", response.data, cid);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("Error removing pin from pinata:", error.response.data, cid);
    return { ok: false, data: error.response.data };
  }
};
