const time = document.getElementById('time');

const worker = new Worker('worker.js');
worker.onmessage = (e) => {
	time.innerHTML = e.data;
};
