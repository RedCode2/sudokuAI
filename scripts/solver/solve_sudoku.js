import { translate_to_2D_arr } from "../modules/translate_to_2D_arr";
import { translate_to_board_GUI } from "../modules/translate_to_board_GUI";

import { solveSudoku } from "../modules/solve";
import { $convert_to_logmsg } from "../modules/solver_pg_terminal";

let solver_log = document.getElementById('solver_log')

// Event listener for the submit button
document.getElementById("solver_solve_sudoku_btn").addEventListener("click", () => {
    const sudokuBoard = translate_to_2D_arr(); // Get the Sudoku board
   
    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
        task: "Get cell_values from board",
        success: true,
        success_msg: "Success",
        failure_msg: "",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')    
    })

    solveSudoku(sudokuBoard);

    translate_to_board_GUI(sudokuBoard);
});