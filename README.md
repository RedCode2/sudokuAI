![Banner](https://github.com/RedCode2/sudokuAI/blob/main/resources/assets/banner.png?raw=true)

# SudokuAI (Not for phone)

SudokuAI is a tool that generates and solves Sudoku puzzles. It runs locally on your machine and provides an interactive interface for solving or generating Sudoku puzzles.

---

## Features

- **Generate Sudoku Puzzles**: Create random Sudoku puzzles of varying difficulty levels.
- **Solve Sudoku Puzzles**: Input your own Sudoku puzzle and let the AI solve it for you.
- **Interactive Interface**: Easy-to-use interface for interacting with the Sudoku board.
- **A Custom Log Component**: Logs messages when interacting with the solver interface.
- **A Custom Console**: Enter commands for interacting with the solver interface.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RedCode2/sudokuAI
cd sudokuAI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

To start SudokuAI locally, run:

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to `http://localhost:5178` to access SudokuAI.

---

## How to Use

### Generating a Sudoku Puzzle

1. Open the application in your browser.
2. Click on the **"Generate Sudoku"** link in the home page.
3. Click the **"Generate Sudoku"** button.
4. The Sudoku board will be populated with a new puzzle.
5. To clear the Sudoku board, click on **"Clear Sudoku"**.

### Solving a Sudoku Puzzle

1. Open the application in your browser.
2. Input your Sudoku puzzle into the board (leave empty cells as blank).
3. Click the **"Solve Sudoku"** button present at the bottom-right panel of your browser.
4. The Algorithm will solve the puzzle and display the solution on the board.

---

## Available Scripts on the Sudoku Solver Console

- `pg_ff sans`: Changes the Font Family of the page to Sans Serif.
- `pg_ff serif`: Changes the Font Family of the page to Serif.
- `pg_ff mono`: Changes the Font Family of the page to Monospace.
- `pg_ff default`: Changes the Font Family of the page to default (Sans Serif).
- `pg_fs small`: Changes the Font Size of the page to Small.
- `pg_fs medium`: Changes the Font Size of the page to Medium.
- `pg_fs large`: Changes the Font Size of the page to Large
- `pg_fs default`: Changes the Font Size of the page to default (Small).
- `solve_sudoku`: Solves the Sudoku Puzzle.
- `clear_sudoku`: Clears the Sudoku board.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Inspired by classic Sudoku puzzles.
- Styled with [Tailwind CSS](https://tailwindcss.com/).
- Some useful code using [TypeScript](https://www.typescriptlang.org/)

---
