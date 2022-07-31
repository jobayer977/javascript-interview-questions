---
title: Array Prototype concat
---

### Array Prototype concat

```js
Array.prototype.concatImpl = function (arr) {
	const newArr = this.slice()
	newArr.push(...arr)
	return newArr
}
```