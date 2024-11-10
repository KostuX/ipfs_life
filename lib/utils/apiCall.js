export default async function apiCall(endpoint, data) {
  let response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),

    headers: { "Content-type": "application/json" },
  });

  return response;
}
