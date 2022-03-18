# 🌲 Advent of Code 2021 🌲

Solutions for the [Advent of Code 2021](https://adventofcode.com/2021) puzzles, written in Javascript.

Every day of Advent two new puzzles are released, but you need to solve the first to unlock the second. Each puzzle grants a star, so the objective is to get all 50 stars. My aim is to code efficient solutions and provide an explanation for each of them.

Thanks [Eric Wastl](https://twitter.com/ericwastl) for organising this event!

## Project structure

Every day has its own folder with the following files:

- `input.txt`: raw input
- `input.js`: formatted input
- `puzzle1.js`: solution to the first puzzle
- `puzzle2.js`: solution to the second puzzle
- `README.md`: explanation for both solutions

_Note_: both puzzles always share the same input, that's why there's only one input file.

## How to run

To run any solution, use the `npm run solution` script specifying the day and the puzzle.

For example:

```sh
# Runs the solution of Day 1 - Puzzle 2
npm run solution -- 1 2
```

## Solved puzzles

Here's the list of all days, along with the stars obtained in each of them.

| Day                           |  Stars  |
| :---------------------------- | :-----: |
| [Day 1 - Sonar Sweep](./day1) | ⭐️ ⭐️ |
