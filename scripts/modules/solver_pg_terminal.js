"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.$convert_to_logmsg = $convert_to_logmsg;
function $put_log_msg_vals_in_span(color, msg) {
    if (color) {
        return "<span style=\"color:".concat(color, "\">").concat(msg, "</span>");
    }
    return null;
}
export function $convert_to_logmsg(task, success, success_msg, failure_msg, pg_theme) {
    if (pg_theme === "dark") {
        if (success) {
            if (localStorage.getItem("show_log_time") === "true") {
                return "\n                    ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date()), "\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task), "\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), success_msg), "\n                ");
            }
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), success_msg), "\n            ");
        }
        else {
            if (localStorage.getItem("show_log_time") === "true") {
                return "\n                    ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date()), "\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task), "\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), failure_msg), "\n                ");
            }
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), task), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), failure_msg), "\n            ");
        }
    }
    if (!success) {
        if (localStorage.getItem("show_log_time") === "true") {
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date()), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), success_msg), "\n            ");
        }
        return "\n            ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task), "\n            ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), success_msg), "\n        ");
    }
    else {
        if (localStorage.getItem("show_log_time") === "true") {
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date()), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), failure_msg), "\n            ");
        }
        return "\n            ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), task), "\n            ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), failure_msg), "\n        ");
    }
}
