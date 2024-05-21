const { Worker } = require('worker_threads');

// Create a new worker thread
const worker = new Worker('./FromIpfs.js');

// Listen for messages from the worker
worker.on('message', (result) => {
  console.log(`Result from worker: ${result}`);
});

// Send a message to the worker to start asynchronous operations
worker.postMessage('Start asynchronous operations');