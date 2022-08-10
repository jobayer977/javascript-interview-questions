class Animal {
	constructor(name) {
		this.name = name;
	}
	getName() {
		console.log(this.name);
		return this.name;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	getName() {
		return this.name + ' is a dog';
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	getName() {
		return this.name + ' is a cat';
	}
}

var dog = new Dog('Fido');
var cat = new Cat('Mimi');

console.dir(cat);
