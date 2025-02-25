function $put_log_msg_vals_in_span(
    color: string | null,
    msg: string
): string | null {
    if (color) {
        return `<span style="color:${color}">${msg}</span>`;
    }
    return null;
}

export function $convert_to_logmsg(
    task: string,
    success: boolean,
    success_msg: string,
    failure_msg: string,
    pg_theme: string
): string | null {
    if (pg_theme === "dark") {
        if (success) {
            if (localStorage.getItem("show_log_time") === "true") {
                return `
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date())}
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task)}
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), success_msg)}
                `;
            }
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task)}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), success_msg)}
            `
        } else {
            if (localStorage.getItem("show_log_time") === "true") {
                return `
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date())}
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task)}
                    ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), failure_msg)}
                `
            }
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task)}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), failure_msg)}
            `
        }
    }
    if (!success) {
        if (localStorage.getItem("show_log_time") === "true") {
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date())}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task)}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), success_msg)}
            `;
        }
        return `
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task)}
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), success_msg)}
        `
    } else {
        if (localStorage.getItem("show_log_time") === "true") {
            return `
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date())}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task)}
                ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), failure_msg)}
            `
        }
        return `
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task)}
            ${$put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), failure_msg)}
        `
    }
}
