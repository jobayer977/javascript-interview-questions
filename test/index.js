(function () {
	try {
		throw new Error();
	} catch (x) {
		var x = 1,
			y = 2;
		console.log('INSIDE', x);
		console.log('INSIDE', y);
	}
	console.log('OUTSIDE', x);
	console.log('OUTSIDE', y);
})();

// 1
// 1
// 2
