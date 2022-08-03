function clock() {
	setInterval(() => {
		postMessage(`tick ${new Date().toLocaleTimeString()}`);
	}, 1000);
}
clock();
