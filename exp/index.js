const methods = {
	greet() {
		console.log(`hello, my name is ${this.name}!`);
	}
};
class user {
	constructor(name) {
		this.name = name;
	}
}
Object.assign(user.prototype, methods);

const person1 = new user('Jobayer Hossain');
person1.greet();

console.dir(user);
