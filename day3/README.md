# Day 3: Binary Diagnostic

You can find the puzzles [here](https://adventofcode.com/2021/day/3).

## ✍🏼 Input

A list of binary strings.

Example:

```js
const input = ["00100", "11110", "10110"];
```

## 🧩 First puzzle

### Objective

Calculate the product of the gamma rate and the epsilon rate, where:

- Each bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all input numbers
- Each bit in the epsilon rate can be determined by finding the least common bit in the corresponding position of all input numbers

It is not specified what to do if there's a tie, but apparently this won't happen for the provided input.

### Solution

Since we want to calculate gamma and epsilon in decimal, I went directly for the decimal representation.

The only thing worth noticing is that to calculate the power of 2 I used the [bitwise left shift operator (<<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift) instead of `Math.pow(2, exponent)`, because it's faster.

I was also playing with the idea of parsing the input strings to decimal numbers and then use the [bitwise AND operator (&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND), so that then I can do the filtering like this:

```js
const countWithZero = parsedInput.filter((num) => powerOf2 & num).length;
```

However, I don't think there's a big benefit in terms of performance due to the extra parsing on the input, so I abandoned the idea.

```js
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
```

## 🧩 Second puzzle

### Objective

Calculate the product of the O2 generator rating and the CO2 scrubber rating.

To find the O2 generator rating, get all the ratings and determine the most common bit in their first bit (if 0 and 1 are equally common, keep values with a 1). Then, discard the ratings whose bit is not the most common. Repeat the process with the remaining ratings for the second bit, and keep iterating until you're left with just one rating.

To find the CO2 generator rating, get all the ratings and determine the least common bit in their first bit (if 0 and 1 are equally common, keep values with a 0). Then, discard the ratings whose bit is not the least common. Repeat the process with the remaining ratings for the second bit, and keep iterating until you're left with just one rating.

### Solution

Straight-forward solution, nothing interesting to add.

```js
const input = require("./input");

const O2GeneratorRating = getO2GeneratorRating(input);
const CO2ScrubberRating = getCO2ScrubberRating(input);

console.log(O2GeneratorRating * CO2ScrubberRating);

function getO2GeneratorRating(ratings) {
	let pos = 0;

	while (ratings.length > 1) {
		const { with0, with1 } = splitRatingsByPos(ratings, pos);

		if (with0.length > with1.length) {
			ratings = with0;
		} else {
			ratings = with1;
		}

		pos++;
	}

	return parseInt(ratings[0], 2);
}

function getCO2ScrubberRating(ratings) {
	let pos = 0;

	while (ratings.length > 1) {
		const { with0, with1 } = splitRatingsByPos(ratings, pos);

		if (with0.length <= with1.length) {
			ratings = with0;
		} else {
			ratings = with1;
		}

		pos++;
	}

	return parseInt(ratings[0], 2);
}

function splitRatingsByPos(ratings, pos) {
	const with0 = [];
	const with1 = [];

	ratings.forEach((rating) => {
		if (rating[pos] === "0") {
			with0.push(rating);
		} else {
			with1.push(rating);
		}
	});

	return { with0, with1 };
}
```
