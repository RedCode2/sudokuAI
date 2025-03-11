function __generate_random_number(minVal: number, maxVal: number): number {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function move_to_next_cell(current_col_number: number, current_row_number: number): { current_col_number: number, current_row_number: number } {
    if (current_col_number === 9) {
        // Go to next row
        current_row_number += 1;
        current_col_number = 1;
    } else {
        // Go to next column
        current_col_number += 1;   
    }

    return { current_col_number, current_row_number }
}

export function $solve_sudoku(board: (number | string)[][]): number[][] {
    let current_col_number: number = 1
    let current_row_number: number = 1;
    
    // Assume that board is valid
    let solving_sudoku: boolean = true;

    while (solving_sudoku) {

        // Find free cell
        let finding_free_cell: boolean = true;

        while (finding_free_cell) {
            if (board[current_col_number][current_row_number] === '.') {
                ({ current_col_number, current_row_number } = move_to_next_cell(current_col_number, current_row_number));
            } else {
                if (current_col_number !== 9) {
                    if (board[current_col_number + 1][current_row_number] === '.') {
                        finding_free_cell = true;
                    } else {
                        finding_free_cell = false;
                    }
                } else {
                    if (board[1][current_row_number + 1] === '.') {
                        finding_free_cell = true;
                    } else {
                        finding_free_cell = false;
                    }
                }
            }
        }


    }

    return [[0], [0]];
}