// What is WeakMap in JavaScript?
// WeakMap is a data structure that allows you to store key-value pairs but only if the keys are objects. If the keys are primitive values, then the WeakMap will not store them. This is useful for storing objects that you don’t want to keep in memory, but you do want to reference later. For example, you might want to store a reference to a DOM element in a WeakMap so that you can easily access it later.

// Example
var myWeakMap = new WeakMap();
var myObj = {
	foo: 'bar'
};
myWeakMap.set(myObj, 'baz');
console.log(myWeakMap.get(myObj)); // 'baz'
console.log(myWeakMap.has(myObj)); // true

// When we should use WeakMap?
