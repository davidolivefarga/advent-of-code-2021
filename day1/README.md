# Day 1 - Sonar Sweep

You can find the puzzles [here](https://adventofcode.com/2021/day/1).

## ✍🏼 Input

A list of positive integers.

Example:

```js
const input = [199, 200, 208, 210, 200];
```

## 🧩 First puzzle

### Objective

Count the number of times a number in the list is bigger than its previous one.

### Solution

Straight-forward solution, nothing interesting to add.

```js
const input = require("./input");

let count = 0;

for (let i = 1; i < input.length; i++) {
	if (input[i] > input[i - 1]) {
		count++;
	}
}

console.log(count);
```

## 🧩 Second puzzle

### Objective

Count the number of times the sum of three consecutive numbers is bigger than the sum of the previous three numbers.

### Solution

We don't need to compute `input[i] + input[i + 1] + input[i + 2]` and `input[i + 1] + input[i + 2] + input[i + 3]` to compare their values.

Notice that the second sum will be bigger than the first one if and only if `input[i + 3]` > `input[i]`.

Hence, we only need to count the amount of times this condition is satisified.

```js
const input = require("./input");

let count = 0;

for (let i = 3; i < input.length; i++) {
	if (input[i] > input[i - 3]) {
		count++;
	}
}

console.log(count);
```
