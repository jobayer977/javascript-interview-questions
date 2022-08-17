---
title:  Difference between Function Scope vs Block Scope in JavaScript?
---
## Difference between Function Scope vs Block Scope in JavaScript?

**Function Scope**:
variables defined inside a function are not accessible outside the function.

```javascript
function foo() {
 var a = 1;
 function bar() {
  console.log(a); // 1
 }
 bar();
}

foo(); // 1
```

**Block Scope :**

variables defined inside a block are accessible outside the block.

```javascript
if (true) {
 let a = 1;
 console.log(a); // 1
}
console.log(a); // ReferenceError: a is not defined
```
