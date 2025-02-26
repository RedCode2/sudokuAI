import { LogMsgInterface } from '../interface/logmsg_interface'

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
        if (LogInput.success) {
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
    }
    if (!LogInput.success) {
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
