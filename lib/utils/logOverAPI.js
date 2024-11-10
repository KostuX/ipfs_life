export default async function logOverAPI(data) {
  try {
    fetch("/api/LoggerAPI", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
