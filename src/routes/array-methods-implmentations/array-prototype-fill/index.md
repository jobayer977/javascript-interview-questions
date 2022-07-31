---
title: Array Prototype fill
---


### Array Prototype fill

```js
Array.prototype.fillImpl = function (value, start, end) {
	start = start || 0
	end = end || this.length
	for (let i = start; i < end; i++) {
		this[i] = value
	}
}
```
