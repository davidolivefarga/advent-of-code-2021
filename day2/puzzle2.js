const input = require("./input");

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

for (const { instruction, value } of input) {
	if (instruction === "forward") {
		horizontalPosition += value;
		depth += aim * value;
	} else if (instruction === "down") {
		aim += value;
	} else if (instruction === "up") {
		aim -= value;
	}
}

console.log(horizontalPosition * depth);
