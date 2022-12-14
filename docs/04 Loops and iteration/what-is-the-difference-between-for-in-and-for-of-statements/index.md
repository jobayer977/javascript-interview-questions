---
title: What is the difference between ( for... in ) and ( for... of ) statements?
---

**for in** loops over enumerable property names of an object.

```javascript
var obj = {
	a: 1,
	b: 2,
	c: 3
};

for (var key in obj) {
	console.log(key);
}

// a
// b
// c
```

**for of** (new in ES6) does use an object-specific iterator and loops over the values generated by that.

```javascript
var obj = {
	a: 1,
	b: 2,
	c: 3
};

for (let item of Object.entries(obj)) {
	console.log(item);
}

// Output:
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
```
