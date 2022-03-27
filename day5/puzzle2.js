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
