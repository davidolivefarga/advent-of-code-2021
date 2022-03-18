const input = require("./input");

let horizontalPosition = 0;
let depth = 0;

for (const { instruction, value } of input) {
	if (instruction === "forward") {
		horizontalPosition += value;
	} else if (instruction === "down") {
		depth += value;
	} else if (instruction === "up") {
		depth -= value;
	}
}

console.log(horizontalPosition * depth);
