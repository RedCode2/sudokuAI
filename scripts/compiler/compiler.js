"use strict";

import validatedActionRegistry from "./command_list.json";

import { $convert_to_logmsg } from "../modules/solver_pg_terminal";
import { solveSudoku, isValidSudoku } from "../modules/solve";
import { translate_to_2D_arr } from "../modules/translate_to_2D_arr";
import { translate_to_board_GUI } from "../modules/translate_to_board_GUI";

export function $exec_func(actionIdentifier) {
    var actionString = validatedActionRegistry[actionIdentifier];
    if (actionString) {
        try {
            var actionFunction = new Function(actionString);
            actionFunction();
        }
        catch (error) {
            console.error("Error executing action \"".concat(actionIdentifier, "\":"), error);
        }
    }
    else {
        console.warn("Action \"".concat(actionIdentifier, "\" not found."));
    }
}

window.set_ff = function(font_family) {
    document.documentElement.classList.remove(`font-mono`, `font-sans`, `font-serif`);
    document.documentElement.classList.add(`font-${font_family}`);
};
window.set_fs = function(font_size) {
    document.documentElement.classList.remove(`text-sm`, `text-xs`, `text-lg`);
    document.documentElement.classList.add(`text-${font_size}`);
};
window.solve_sudoku = function() {
    const sudokuBoard = translate_to_2D_arr(); // Get the Sudoku board
       
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: "Get cell_values from board",
            success: true,
            success_msg: "Success",
            failure_msg: "",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')    
        })
    
        if (isValidSudoku(sudokuBoard)) {
            solveSudoku(sudokuBoard);
    
            solver_log.innerHTML += '<br>' + $convert_to_logmsg({
                task: "Solve Sudoku",
                success: true,
                success_msg: "Success",
                failure_msg: "",
                pg_theme: localStorage.getItem('solver_window_theme'),
                show_time_of_log: localStorage.getItem('show_log_time')    
            })
        } else {
            solver_log.innerHTML += '<br>' + $convert_to_logmsg({
                task: "Solve Sudoku",
                success: false,
                success_msg: "",
                failure_msg: "Failed. Invalid Sudoku",
                pg_theme: localStorage.getItem('solver_window_theme'),
                show_time_of_log: localStorage.getItem('show_log_time')    
            })
        }
    
        translate_to_board_GUI(sudokuBoard, 0, 0, 8, 8);
}
window.clear_sudoku = function() {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: "Clear sudoku board",
            success: true,
            success_msg: "Success",
            failure_msg: "",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')    
        })
    
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                document.getElementById(`cell_${alphabets[i-1]}${j}`).value = '';
            }
        }
}
