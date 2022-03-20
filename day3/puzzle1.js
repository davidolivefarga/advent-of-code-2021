const input = require("./input");

const n = input.length;
const m = input[0].length;

let gamma = 0;
let epsilon = 0;

for (let i = 0; i < m; i++) {
	const powerOf2 = 1 << (m - i - 1);

	const countWithZero = input.filter((str) => str[i] === "0").length;
	const countWithOne = n - countWithZero;

	if (countWithOne > countWithZero) {
		gamma += powerOf2;
	} else {
		epsilon += powerOf2;
	}
}

console.log(gamma * epsilon);
