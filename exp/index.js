const myWorker = new Worker('worker.js');

myWorker.postMessage('Hello From Main');
