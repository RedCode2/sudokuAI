import { generateSudoku } from "../modules/generate";

function __generate_random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('generate_sudoku_btn').addEventListener('click', function() {
    let empty_cells = __generate_random_number(51, 64);
    let sudoku = generateSudoku(empty_cells);
    let _alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.getElementById(`cell_${_alphabets[i]}${j+1}`);
            if (sudoku[i][j] === 0) {
                cell.value = '';
            } else {
                cell.value = sudoku[i][j];
            }
        }
    }
})
document.getElementById('clear_sudoku_btn').addEventListener('click', function() {
    let _alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.getElementById(`cell_${_alphabets[i]}${j+1}`);
            cell.value = '';
        }
    }
})