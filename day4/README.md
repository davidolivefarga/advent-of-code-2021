# Day 4: Giant Squid

You can find the puzzles [here](https://adventofcode.com/2021/day/4).

## ✍🏼 Input

A list of numbers and a list of 5x5 boards, representing a bingo game.

Every time a number is drawn, it is marked in all boards containing it. The moment all numbers in a row or column are marked, the board wins, and its score is calculated by summing all the unmarked numbers and multiplying them by the last marked number.

Since boards need to hold some state, I decided to wrap them into the following `Board` class:

```js
class Board {
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
}
```

Some interesting things about this class:

- To prevent looping over the whole board everytime a new number is drawn, instead of storing the board as a matrix I'm storing the position of each board number in a key-value obejct. This means that marking a number becomes `O(1)` instead of `O(Board.SIZE * Board.SIZE)`. It doesn't matter much for small boards, but if will have an impact for bigger board sizes.
- To know if a board is winning, we only need to inspect the know if there's any row or column with all numbers marked. To make this as efficient as possible, it suffices to use `O(Board.SIZE)` space to hold the amount of marked numbers per row and column.

Example:

```js
const input = {
	numbers: [72, 99, 88, 8, 59],
	boards: [Board, Board, Board],
};
```

## 🧩 First puzzle

### Objective

Find the score of the first winning board.

### Solution

Straight-forward solution, nothing interesting to add.

```js
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
```

## 🧩 Second puzzle

### Objective

Find the score of the last winning board.

### Solution

Straight-forward solution, nothing interesting to add.

```js
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
```
