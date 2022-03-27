# Day 5: Hydrothermal Venture

You can find the puzzles [here](https://adventofcode.com/2021/day/5).

## ✍🏼 Input

A list of 2D segments, each represented by two points.

The segments are either horizontal, vertical or diagonal (making a 45º angle with the X-axis).

Example:

```js
const input = [
	[
		[0, 9],
		[5, 9],
	],
	[
		[8, 0],
		[0, 8],
	],
	[
		[7, 0],
		[7, 4],
	],
];
```

## 🧩 First puzzle

### Objective

Find the number of overlapping points amongst all horizontal and vertical segments.

### Solution

There are two possible strategies for this problem:

- Stores all points of all segments, and count the points that were stored at least twice
- Compare all segments with each other, and count the points that are overlapping

Without knowing the type of input that we will receive, it's hard to know which strategy is the best one. If there are `n` segments of average length `k`, the first strategy will run in `O(nk)` time, whereas the second strategy will run in `O(n^2)`. In the case of this puzzle, it appears that `n ~ k`, so it doesn't matter much which strategy do we choose; hence, the first strategy was chosen as it's easier to implement.

Regarding the solution itself, the only thing worth mentioning is that I'm encoding the point so that I only need a single object to store the points.

```js
const input = require("./input");

const visitedPointsCount = {};

const encodePoint = (x, y) => `${x},${y}`;

for (const [[x1, y1], [x2, y2]] of input) {
	if (x1 === x2) {
		const minY = Math.min(y1, y2);
		const maxY = Math.max(y1, y2);

		for (let y = minY; y <= maxY; y++) {
			const encodedPoint = encodePoint(x1, y);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	} else if (y1 === y2) {
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);

		for (let x = minX; x <= maxX; x++) {
			const encodedPoint = encodePoint(x, y1);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	}
}

const overlappingPointsCount = Object.values(visitedPointsCount).filter(
	(c) => c > 1
).length;

console.log(overlappingPointsCount);
```

## 🧩 Second puzzle

### Objective

Find the number of overlapping points amongst all horizontal, vertical and diagonal segments.

### Solution

Same as before, but this time we need to take diagonal lines into account. We're guaranteed that diagonal segments will make a 45º with the X-axis, but this means there are two types: ascendant diagonals and descendant diagonal; hence, we need to add two new cases.

```js
const input = require("./input");

const visitedPointsCount = {};

const encodePoint = (x, y) => `${x},${y}`;

for (const [[x1, y1], [x2, y2]] of input) {
	if (x1 === x2) {
		const minY = Math.min(y1, y2);
		const maxY = Math.max(y1, y2);

		for (let y = minY; y <= maxY; y++) {
			const encodedPoint = encodePoint(x1, y);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	} else if (y1 === y2) {
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);

		for (let x = minX; x <= maxX; x++) {
			const encodedPoint = encodePoint(x, y1);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	} else if (x1 + y1 === x2 + y2) {
		const maxY = Math.max(y1, y2);
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);

		for (let i = maxX - minX; i >= 0; i--) {
			const encodedPoint = encodePoint(minX + i, maxY - i);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	} else {
		const minY = Math.min(y1, y2);
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);

		for (let i = maxX - minX; i >= 0; i--) {
			const encodedPoint = encodePoint(minX + i, minY + i);

			visitedPointsCount[encodedPoint] =
				(visitedPointsCount[encodedPoint] || 0) + 1;
		}
	}
}

const overlappingPointsCount = Object.values(visitedPointsCount).filter(
	(c) => c > 1
).length;

console.log(overlappingPointsCount);
```
