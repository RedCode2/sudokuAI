"use strict";

import commandList from '../compiler/command_list.json' assert { type: 'json' };
import { $exec_func } from '../compiler/compiler';

function $put_log_msg_vals_in_span(color, msg) {
    if (color) {
        return `<span style="color:${color}">${msg}</span>`;
    }
    return "";
}

export function $convert_to_logmsg(LogInput) {
    const theme = localStorage.getItem("solver_window_theme");
    let showTime;

    if (LogInput.show_time_of_log === "false") {
        showTime = false;
    } else {
        showTime = true;
    }

    if (theme === "dark") {
        let timeColor = localStorage.getItem("solver_time_of_log_color_dark_m");
        let taskColor = localStorage.getItem("solver_log_task_color_dark_m");
        let successColor = localStorage.getItem("solver_log_success_color_dark_m");
        let errorColor = localStorage.getItem("solver_log_error_color_dark_m");

        if (timeColor === null) { timeColor = "#05df72"; }
        if (taskColor === null) { taskColor = "#b293c8" }
        if (successColor === null) { successColor = "#7bf1a8" }
        if (errorColor === null) { errorColor = "#e9b58a" }

        if (LogInput.success) {
            let logMessage = "";
            if (showTime) {
                logMessage += `\n${$put_log_msg_vals_in_span(timeColor, new Date().toString())} =>\n`;
            }
            logMessage += `${$put_log_msg_vals_in_span(taskColor, LogInput.task)}: \n${$put_log_msg_vals_in_span(successColor, LogInput.success_msg)}\n`;
            return logMessage;
        } else {
            let logMessage = "";
            if (showTime) {
                logMessage += `\n${$put_log_msg_vals_in_span(timeColor, new Date().toString())} =>\n`;
            }
            logMessage += `${$put_log_msg_vals_in_span(taskColor, LogInput.task)}:\n${$put_log_msg_vals_in_span(errorColor, LogInput.failure_msg)}\n`;
            return logMessage;
        }
    } else {
        let timeColor = localStorage.getItem("solver_time_of_log_color_light_m");
        let taskColor = localStorage.getItem("solver_log_task_color_light_m");
        let successColor = localStorage.getItem("solver_log_success_color_light_m");
        let errorColor = localStorage.getItem("solver_log_error_color_light_m");

        if (timeColor === null) { timeColor = "#73b39d" };
        if (taskColor === null) { taskColor = "#8c78a9" };
        if (successColor === null) { successColor = "#5eb18f" }
        if (errorColor === null) { errorColor = "#c48c66" }

        if (LogInput.success) {
            let logMessage = "";
            if (showTime) {
                logMessage += `\n${$put_log_msg_vals_in_span(timeColor, new Date().toString())} =>\n`;
            }
            logMessage += `${$put_log_msg_vals_in_span(taskColor, LogInput.task)}:\n${$put_log_msg_vals_in_span(successColor, LogInput.success_msg)}\n`;
            return logMessage;
        } else {
            let logMessage = "";
            if (showTime) {
                logMessage += `\n${$put_log_msg_vals_in_span(timeColor, new Date().toString())} =>\n`;
            }
            logMessage += `${$put_log_msg_vals_in_span(taskColor, LogInput.task)}\n${$put_log_msg_vals_in_span(errorColor, LogInput.failure_msg)}\n`;
            return logMessage;
        }
    }
}

export function $setup_console_input(commandNumber) {
    const inputElement = document.getElementById(`solver_console_input_${commandNumber}`);
    if (inputElement) {
        inputElement.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const inputValue = inputElement.value;
                $exec_func(inputValue);
                const outputElement = document.getElementById(`solver_console_output_${commandNumber}`);

                const logObject = {
                    task: `Executing command: ${inputValue}`,
                    success: commandList.hasOwnProperty(inputValue),
                    success_msg: "Success",
                    failure_msg: "Failed: No such command exists",
                    pg_theme: localStorage.getItem('solver_window_theme'),
                    show_time_of_log: false,
                };

                if (outputElement) {
                    outputElement.innerHTML += $convert_to_logmsg(logObject);
                    outputElement.innerHTML += "<br>";
                }

                // Do NOT clear the input field.
                // Do NOT change the previous input field.

                const newCommandNumber = commandNumber + 1;
                const solverConsole = document.getElementById('solver_console');

                if (solverConsole) {
                    // Remove the initial prompt and input, if it exists
                    const initialContent = solverConsole.innerHTML;
                    if (initialContent.includes("Sudoku Solver Console")) {
                        // Remove the initial content
                        solverConsole.innerHTML = initialContent.replace(/<span>Sudoku Solver Console<br>Type <code>--help<\/code> for help<\/span><br><br>[\s\S]*?<label for="solver_console_input_\d+">\$ <\/label>[\s\S]*?<\/span>/, '');
                    }
                
                    // Add the user's input and the log message
                    solverConsole.innerHTML += `
                        <br>
                        <span>$ <span class="dark:bg-strict-gray-2 dark:text-white pl-1.5 w-[95%] focus:outline-none font-bold">${inputValue}</span></span><br>
                        <span id="solver_console_output_${commandNumber}">${$convert_to_logmsg(logObject)}</span><br>
                        <label for="solver_console_input_${newCommandNumber}">$ </label>
                        <input type="text" name="solver_console_input_${newCommandNumber}" id="solver_console_input_${newCommandNumber}" class="dark:bg-strict-gray-2 dark:text-white pl-1.5 w-[95%] focus:outline-none font-bold">
                        <span id="solver_console_output_${newCommandNumber}"></span>
                    `;
                
                    setTimeout(() => {
                        $setup_console_input(newCommandNumber);
                    }, 0);
                }
            }
        });
    }
}