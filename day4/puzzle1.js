const { boards, numbers } = require("./input");

console.log(findScoreOfFirstWinningBoard(boards, numbers));

function findScoreOfFirstWinningBoard(boards, numbers) {
	for (const num of numbers) {
		for (const board of boards) {
			board.markNumber(num);

			if (board.isWinning) {
				return board.score;
			}
		}
	}
}
