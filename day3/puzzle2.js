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
