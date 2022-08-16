---
title: What is the output of below code
---

## Write a `sum` method which will work properly when invoked using either syntax below.

```javascript
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

<details>
    <summary>Answer</summary>

```javascript
function sum(x) {
	if (arguments.length === 2) {
		return arguments[0] + arguments[1];
	} else {
		return function (y) {
			return x + y;
		};
	}
}
```

</details>
