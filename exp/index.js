'use strict';
const person = {
	name: 'John',
	age: 30,
	isMarried: false
};

Object.defineProperty(person, 'name', {
	value: 'Jack',
	writable: false,
	enumerable: false,
	configurable: false
});

delete person.name;
// Uncaught TypeError: Cannot delete property 'name
