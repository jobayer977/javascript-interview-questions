const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6
};
let n = 1;
for (let key of Object.entries(obj)) {
	if (!--n) {
		console.log(n);
	}
}
