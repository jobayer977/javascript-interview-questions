const getNumber = new Promise((resolve, reject) => {
	setInterval(() => {
		resolve(10);
	}, 100);
});
getNumber
	.then((number) => {
		console.log(number); // 11
		return number + 1;
	})
	.then((number) => {
		console.log(number); // 12
		return number + 1;
	})
	.then((number) => {
		console.log(number);
		return number + 1; // 13
	});

// 11
// 12
// 13
