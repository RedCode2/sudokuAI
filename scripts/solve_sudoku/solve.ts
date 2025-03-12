import { $convert_to_logmsg } from "../modules/solver_pg_terminal";

let solver_log: HTMLDivElement = document.getElementById("solver_log") as HTMLDivElement;

function __generate_random_number(minVal: number, maxVal: number): number {
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function move_to_next_cell(current_row_number: number, current_col_number: number): { current_row_number: number, current_col_number: number } {
    if (current_col_number === 9) {
        // Go to next row
        current_row_number += 1;
        current_col_number = 1;
    } else {
        // Go to next column
        current_col_number += 1;
    }

    return { current_row_number, current_col_number }
}
function get_3x3_grid_array(board: (number | string)[][], row_number: number, col_number: number): (number | string)[] {
    let _grid: (number | string)[] = [];

    const _start_row: number = Math.floor(row_number / 3) * 3;
    const _start_col: number = Math.floor(col_number / 3) * 3;

    for (let i = _start_row; i < _start_row + 3; i++) {
        for (let j = _start_col; j < _start_col + 3; j++) {
            _grid.push(board[i][j]);
        }
    }

    return _grid
}

export function $solve_sudoku(board: (number | string)[][]): (number | string)[][] {
    const _alphabets: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    let current_row_number: number = 0;
    let current_col_number: number = 0;
    
    let _board: (number | string)[][] = board;
    let _attempted_cell_val: number[] = [];
    
    let solving_sudoku: boolean = true;

    while (solving_sudoku) {

        // Find free cell
        let finding_free_cell: boolean = true;

        while (finding_free_cell) {
            if (_board[current_row_number][current_col_number] === '.') {
                finding_free_cell = false;
            } else {
                ({ current_row_number, current_col_number } = move_to_next_cell(current_row_number, current_col_number));
            }
        }

        let finding_cell_val: boolean = true;

        while (finding_cell_val) { 
            let temp_cell_val_attempt: number = __generate_random_number(1, 9);

            if (!(temp_cell_val_attempt in _attempted_cell_val)) {
                if (
                    !(   
                        temp_cell_val_attempt in _board[current_row_number]                      &&
                        temp_cell_val_attempt in _board.map(row => row[current_col_number])      &&
                        temp_cell_val_attempt in get_3x3_grid_array(_board, current_row_number, current_col_number)
                    )
                ) 
                {
                    _board[current_row_number][current_col_number] = temp_cell_val_attempt;
        
                    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
                        task: `cell_${_alphabets[current_col_number]}${current_row_number + 1} value:  ${temp_cell_val_attempt}`,
                        success: true,
                        success_msg: ``,
                        failure_msg: ``,
                        pg_theme: localStorage.getItem("pg_theme") || "dark",
                        show_time_of_log: Boolean(localStorage.getItem("show_time_of_log")) || true
                    })
        
                    finding_cell_val = false;
                } else {
                    // Check if any value is possible for current cell
                    let tried_values_count: number = 0;

                    for (let i = 1; i <= 9; i++) {
                        if (tried_values_count < 9) {
                            if (
                                i in _board[current_row_number]                      ||
                                i in _board.map(row => row[current_col_number])      ||
                                i in get_3x3_grid_array(_board, current_row_number, current_col_number)
                            ) 
                            {
                                tried_values_count += 1;
                            }
                        }
                    }

                    if (tried_values_count === 9) {
                        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
                            task: `cell has no possible value. Clearing computed cells`,
                            success: true,
                            success_msg: `Success`,
                            failure_msg: ``,
                            pg_theme: localStorage.getItem("pg_theme") || "dark",
                            show_time_of_log: Boolean(localStorage.getItem("show_time_of_log")) || true
                        });

                        // Break out of finding_cell_val loop
                        finding_cell_val = false;

                        // Reset values for next iteration
                        _board = board;
                        _attempted_cell_val = [];

                        current_row_number = 0;
                        current_col_number = 0;
                    }
                }
            }
        }

        if (current_row_number === 9 && current_col_number === 9) {
            solving_sudoku = false;
        }
    }

    return _board;
}