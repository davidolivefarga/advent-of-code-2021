module.exports = class Board {
	static SIZE = 5;

	constructor(board) {
		const positionByNum = {};

		let score = 0;

		for (let i = 0; i < Board.SIZE; i++) {
			for (let j = 0; j < Board.SIZE; j++) {
				positionByNum[board[i][j]] = [i, j];
				score += board[i][j];
			}
		}

		this._positionByNum = positionByNum;
		this._score = score;
		this._marksPerRow = Array(Board.SIZE).fill(0);
		this._marksPerCol = Array(Board.SIZE).fill(0);
		this._isWinning = false;
	}

	get score() {
		return this._score;
	}

	get isWinning() {
		return this._isWinning;
	}

	markNumber(num) {
		if (!this._positionByNum[num]) {
			return;
		}

		const [i, j] = this._positionByNum[num];

		this._score -= num;
		this._marksPerRow[i]++;
		this._marksPerCol[j]++;

		if (
			this._marksPerRow[i] === Board.SIZE ||
			this._marksPerCol[j] === Board.SIZE
		) {
			this._isWinning = true;
			this._score *= num;
		}
	}
};
