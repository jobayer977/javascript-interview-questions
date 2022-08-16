---
title: What is the output of below code
---

## What is the output of below code ?

```javascript
for (var i = 0; i < 5; i++) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	(function (i) {
		btn.addEventListener('click', function () {
			console.log(i);
		});
	})(i);
	document.body.appendChild(btn);
}
```

<details>
    <summary>Answer</summary>

```javascript
// 4
```

</details>

<br>

## Provide one or more alternate implementations that will work as expected.

<br>

<details>
    <summary>Answer</summary>

```javascript
for (let i = 0; i < 5; i++) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	(function (i) {
		btn.addEventListener('click', function () {
			console.log(i);
		});
	})(i);
	document.body.appendChild(btn);
}
```

</details>
