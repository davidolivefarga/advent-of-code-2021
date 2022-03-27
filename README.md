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

To avoid creating so many files manually, I implemented two scripts to automatize the process.

On one hand, `npm run skeleton` creates the skeleton folder and files for a given day.
This includes fetching the puzzles input from the website and copying it in the `input.txt` file.

Example:

```sh
# Creates the folder and files for day 1
npm run skeleton -- 1
```

On the other hand, `npm run stars`: adds the puzzle stars of a given day to the main README.

Example:

```sh
# Adds the stars for day 1
npm run stars -- 1
```

## How to run

To run any solution, use the `npm run solution` script specifying the day and the puzzle.

Example:

```sh
# Runs the solution of Day 1 - Puzzle 2
npm run solution -- 1 2
```

## Solved puzzles

Here's the list of all days, along with the stars obtained in each of them.

| Day                                   |  Stars  |
| :------------------------------------ | :-----: |
| [Day 1: Sonar Sweep](./day1)          | ⭐️ ⭐️ |
| [Day 2: Dive!](./day2)                | ⭐️ ⭐️ |
| [Day 3: Binary Diagnostic](./day3)    | ⭐️ ⭐️ |
| [Day 4: Giant Squid](./day4)          | ⭐️ ⭐️ |
| [Day 5: Hydrothermal Venture](./day5) | ⭐️ ⭐️ |
