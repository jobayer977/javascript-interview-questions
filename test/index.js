function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

Person.getFullName = function () {
	return `${this.firstName} ${this.lastName}`
}
const member = new Person('Lydia', 'Hallie')

console.log(member.getFullName())
