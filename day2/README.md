# Day 2: Dive!

You can find the puzzles [here](https://adventofcode.com/2021/day/2).

## ✍🏼 Input

A list of instructions, each of them carrying an integer value.

There are three types of instructions: `forward`, `down` and `up`.

Example:

```js
[
	{ instruction: "forward", value: 5 },
	{ instruction: "down", value: 5 },
	{ instruction: "forward", value: 8 },
	{ instruction: "up", value: 3 },
];
```

## 🧩 First puzzle

### Objective

Starting with horizontal position and depth at 0, we apply the instructions as following:

- `forward X` increases horizontal position by `X`
- `down X` increases depth by `X`
- `up X` decreases depth by `X`

Calculate the product of horizontal position and depth after applying all instructions.

### Solution

Straight-forward solution, nothing interesting to add.

```js
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
```

## 🧩 Second puzzle

### Objective

Starting with horizontal position, depth and aim at 0, we apply the instructions as following:

- `down X` increases aim by `X`
- `up X` decreases aim by `X`
- `forward X`:
  - Increases horizontal position by `X`
  - Increases depth by the result of multiplying aim by `X`

Calculate the product of horizontal position and depth after applying all instructions.

### Solution

Straight-forward solution, nothing interesting to add.

```js
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
```
