const numbers = [1, 2, 3, 4, 5];

// how many ways we can check if a number is in the array
// 1. for loop
// 2. forEach
// 3. some
// 4. every
// 5. find
// 6. findIndex
// 7. includes
// 8. indexOf
// 9. lastIndexOf
// 10. findLastIndex
// 11. filter
// 12. map

// 1. for loop
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 3) {
		console.log('found it');
	}
}

// 2. forEach
numbers.forEach((number) => {
	if (number === 3) {
		console.log('found it');
	}
});

// // 3. some
// if (numbers.some((number) => number === 3)) {
// 	console.log('found it');
// }

// // 4. every
// if (numbers.every((number) => number === 3)) {
// 	console.log('found it');
// }

// // 5. find
// const found = numbers.find((number) => number === 3);
// console.log(found);

// // 6. findIndex
// const foundIndex = numbers.findIndex((number) => number === 3);
// console.log(foundIndex);

// 7. includes
if (numbers.includes(3)) {
	console.log('found it');
}

// // 8. indexOf
// const index = numbers.indexOf(3);
// console.log(index);

// // 9. lastIndexOf
// const lastIndex = numbers.lastIndexOf(3);
// console.log(lastIndex);

// // 10. findLastIndex
// const findLastIndex = numbers.findLastIndex((number) => number === 3);
// console.log(findLastIndex);

// // 11. filter
// const filtered = numbers.filter((number) => number === 3);
// console.log(filtered);

// // 12. map
// const mapped = numbers.map((number) => number * 2);
// console.log(mapped);
