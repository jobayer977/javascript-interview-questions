---
title: What will be the output of this code?
source: https://www.toptal.com
---

```javascript
var x = 21;
var girl = function () {
	console.log(x);
	var x = 20;
};
girl();
```

<details>
    <summary>Answer</summary>

```js
// Load state
var x = undefined;
var girl = function () {
	console.log(x);
	var x = 20;
};

// Execution State
var x = 21;
// loading State
var girl = function () {
	var x = undefined;
	console.log(x);
};
// Execution State
var girl = function () {
	var x = undefined;
	console.log(x); // undefined
	x = 20;
};
```

Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

</details>
