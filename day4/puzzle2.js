const { boards, numbers } = require("./input");

console.log(findScoreOfLastWinningBoard(boards, numbers));

function findScoreOfLastWinningBoard(boards, numbers) {
	let lastWinningBoardScore = 0;
	let lastWinningBoardTurn = 0;

	for (const board of boards) {
		for (let turn = 0; turn < numbers.length; turn++) {
			const num = numbers[turn];

			board.markNumber(num);

			if (board.isWinning) {
				if (turn > lastWinningBoardTurn) {
					lastWinningBoardTurn = turn;
					lastWinningBoardScore = board.score;
				}

				break;
			}
		}
	}

	return lastWinningBoardScore;
}
