---
title: What will this code print?
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
for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, i * 1000);
}
```

It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.

</details>
