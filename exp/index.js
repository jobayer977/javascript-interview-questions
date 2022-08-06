function test(a) {
	return function () {
		return function () {
			return a;
		};
	};
}
var t = test(1);
console.dir(t);
