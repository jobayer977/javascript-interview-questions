class Person {
	#age = 0;
	name = '';
	constructor(name) {
		this.name = name;
	}

	getAge() {
		return this.#age;
	}

	setAge(age) {
		this.#age = age;
	}
}

const person = new Person('John');
person.setAge(30);
console.log(person.#age);
// Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class (
