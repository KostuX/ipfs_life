const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  console.log("running in main ");
}
else{

// Access the passed object from workerData
console.log('Object received in worker:', workerData);

// Perform some computation or task in the worker thread
const result = performTask(workerData);


parentPort.postMessage(result);


async function performTask(data) {
  let endpoint =  `http://127.0.0.1:5001/api/v0/cat?arg=${data.key}`
  let response = await fetch(endpoint, {
    method: "POST",
 
    headers: { "Content-type": "application/json;charset=utf-8" },
  });

 console.log(res)
 
 
  return `Result of task with data: ${"res"}`;
}
}

