function myInfo(strings, name, age) {
	console.log(strings);
	console.log(name); // "John"
	console.log(age); // 30
}

const name = 'John';
const age = 30;

myInfo`Hello, I'am ${name}. I'm ${age} years old.`;
