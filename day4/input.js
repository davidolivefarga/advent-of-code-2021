const fs = require("fs");
const path = require("path");

const Board = require("./Board");

const rawInputPath = path.join(__dirname, "input.txt");
const rawInput = fs.readFileSync(rawInputPath, "utf8");

const input = rawInput.trim().split("\n\n");

module.exports = {
	numbers: input[0].split(",").map((n) => parseInt(n, 10)),
	boards: input.slice(1).map((boardData) => {
		const board = boardData.split("\n").map((row) =>
			row
				.trim()
				.split(/\s+/)
				.map((n) => parseInt(n, 10))
		);

		return new Board(board);
	}),
};
