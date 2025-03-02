import { LogMsgInterface } from '../interface/logmsg_interface'
import command_list from '../compiler/command_list.json' assert { type: 'json' };

function $put_log_msg_vals_in_span(
    color: string | null,
    msg: string
): string | null {
    if (color) {
        return `<span style="color:${color}">${msg}</span>`;
    }
    return null;
}

export function $convert_to_logmsg(LogInput: LogMsgInterface): string | null {
    if (LogInput.pg_theme === "dark") {
        if (!LogInput.success) {
            if (LogInput.show_time_of_log) {
                return `
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date())} =>
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task)}: 
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), LogInput.success_msg)}
                `;
            }
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task)}:
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), LogInput.success_msg)}
            `
        } else {
            if (LogInput.show_time_of_log) {
                return `
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date())} =>
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task)}:
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), LogInput.failure_msg)}
                `
            }
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task)}:
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), LogInput.failure_msg)}
            `
        }
    } else {
        if (LogInput.success) {
            if (LogInput.show_time_of_log) {
                return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date())} =>
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task)}:
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), LogInput.success_msg)}
            `;
            }
            return `
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task)}:
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), LogInput.success_msg)}
        `
        } else {
            if (LogInput.show_time_of_log) {
                return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date())}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task)}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), LogInput.failure_msg)}
            `
            }
            return `
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task)}
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), LogInput.failure_msg)}
        `
        }
    }
}

export function $setup_console_input(commandNumber: number): void {
    const inputElement = document.getElementById(`solver_console_input_${commandNumber}`) as HTMLInputElement;

    if (inputElement) {
        inputElement.addEventListener('keydown', function (event: KeyboardEvent) {
            if (event.key === 'Enter') {
                const inputValue: string = inputElement.value;
                $exec_func(inputValue);

                const outputElement = document.getElementById(`solver_console_output_${commandNumber}`) as HTMLElement;

                if (inputElement.value in command_list) {
                    if (outputElement) {
                        outputElement.innerHTML += $convert_to_logmsg({
                            task: `Executing command: ${inputValue}`,
                            success: true,
                            success_msg: "Success",
                            failure_msg: "Failed: No such command exists",
                            pg_theme: localStorage.getItem('solver_window_theme') as string,
                            show_time_of_log: false,
                        });
                        outputElement.innerHTML += `<br>`;
                    }    
                } else {
                    if (outputElement) {
                        outputElement.innerHTML += $convert_to_logmsg({
                            task: `Executing command: ${inputValue}`,
                            success: false,
                            success_msg: "Success",
                            failure_msg: "Failed: No such command exists",
                            pg_theme: localStorage.getItem('solver_window_theme') as string,
                            show_time_of_log: false,
                        });
                        outputElement.innerHTML += `<br>`;
                    }
    
                }

                document.getElementById(`solver_console_input_${commandNumber}`).value = inputElement.value;

                const newCommandNumber: number = commandNumber + 1;

                const solverConsole = document.getElementById('solver_console') as HTMLElement;

                if (solverConsole) {
                    solverConsole.innerHTML += `
              <label for="solver_console_input_${newCommandNumber}">$ </label>
              <input type="text" name="solver_console_input_${newCommandNumber}" id="solver_console_input_${newCommandNumber}" class="dark:bg-strict-gray-2 dark:text-white pl-1.5 w-[95%] focus:outline-none font-bold">
              <span id="solver_console_output_${newCommandNumber}"></span>
            `;

                    $setup_console_input(newCommandNumber);
                }
            }
        });
    }
}

// let command_number: number = 0;

// const solverConsole = document.getElementById('solver_console') as HTMLElement;

// if (solverConsole) {
//     solverConsole.innerHTML += `
//         <label for="solver_console_input_${command_number}">$ </label>
//         <input type="text" name="solver_console_input_${command_number}" id="solver_console_input_${command_number}" class="dark:bg-strict-gray-2 dark:text-white pl-1.5 w-[95%] focus:outline-none font-bold">
//         <span id="solver_console_output_${command_number}"></span>
//     `;
//     setupConsoleInput(command_number);
// }

// Assuming $exec_func and $convert_to_logmsg are defined elsewhere
declare function $exec_func(command: string): void;



