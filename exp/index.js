// What is object.create()?
// Ans: It is a method that creates a new object and links it to an existing object and inherits all the properties of the existing object as prototype. Object.create() is helpful to use existing objects as prototypes.

// Example:
var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function () {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = Object.create(person);
