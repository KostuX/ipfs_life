export default async function getWorker(e) {
  let data = { api: e, cid: input, time: Date.now() };
  let endpoint = "api/apiRouter";
  let response = await apiCall(endpoint, data);
  let res = await response.json();
  if (res.ok) {
    return res.server;
  } else {
    return "/";
  }
}
