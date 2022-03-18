const input = require("./input");

let count = 0;

for (let i = 1; i < input.length; i++) {
	if (input[i] > input[i - 1]) {
		count++;
	}
}

console.log(count);
