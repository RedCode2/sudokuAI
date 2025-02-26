"use strict";
function $put_log_msg_vals_in_span(color, msg) {
    if (color) {
        return "<span style=\"color:".concat(color, "\">").concat(msg, "</span>");
    }
    return null;
}
export function $convert_to_logmsg(LogInput) {
    if (LogInput.pg_theme === "dark") {
        if (LogInput.success) {
            if (LogInput.show_time_of_log) {
                return "\n                    ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date()), " =>\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task), ": \n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), LogInput.success_msg), "\n                ");
            }
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task), ":\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_dark_m"), LogInput.success_msg), "\n            ");
        }
        else {
            if (LogInput.show_time_of_log) {
                return "\n                    ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_dark_m"), Date()), " =>\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task), ":\n                    ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), LogInput.failure_msg), "\n                ");
            }
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_dark_m"), LogInput.task), ":\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_dark_m"), LogInput.failure_msg), "\n            ");
        }
    }
    if (!LogInput.success) {
        if (LogInput.show_time_of_log) {
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date()), " =>\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task), ":\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), LogInput.success_msg), "\n            ");
        }
        return "\n            ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task), ":\n            ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_success_color_light_m"), LogInput.success_msg), "\n        ");
    }
    else {
        if (LogInput.show_time_of_log) {
            return "\n                ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_time_of_log_color_light_m"), Date()), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task), "\n                ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), LogInput.failure_msg), "\n            ");
        }
        return "\n            ".concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_task_color_light_m"), LogInput.task), "\n            ").concat($put_log_msg_vals_in_span(localStorage.getItem("solver_log_error_color_light_m"), LogInput.failure_msg), "\n        ");
    }
}
