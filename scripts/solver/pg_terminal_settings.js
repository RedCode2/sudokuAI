import { $convert_to_logmsg } from "../modules/solver_pg_terminal";

solver_terminal_settings_arrow = document.getElementById('solver_terminal_settings_arrow');
solver_terminal_settings_arrow_light_m = document.getElementById('solver_terminal_settings_arrow_light_m');
solver_log = document.getElementById('solver_log');

if (localStorage.getItem('solver_terminal_settings_open') === 'false') {
    solver_terminal_settings_arrow.classList.add('-rotate-90');
    solver_terminal_settings_arrow_light_m.classList.add('-rotate-90');
} else {
    solver_terminal_settings_arrow.classList.remove('-rotate-90');
    solver_terminal_settings_arrow_light_m.classList.remove('-rotate-90');
}
if (solver_terminal_settings_arrow.classList.contains('-rotate-90') || solver_terminal_settings_arrow_light_m.classList.contains('-rotate-90')) {
    solver_terminal_settings.classList.add('hidden');
} else {
    solver_terminal_settings.classList.remove('hidden');
}

document.getElementById('solver_terminal_settings_header').addEventListener('click', function() {
    solver_terminal_settings_arrow.classList.toggle('-rotate-90');
    solver_terminal_settings_arrow_light_m.classList.toggle('-rotate-90');

    if (solver_terminal_settings_arrow.classList.contains('-rotate-90')) {
        solver_terminal_settings.classList.add('hidden');
    } else {
        solver_terminal_settings.classList.remove('hidden');
    }

    if (localStorage.getItem('solver_terminal_settings_open') === 'true') {
        localStorage.setItem('solver_terminal_settings_open', 'false');
    } else if (localStorage.getItem('solver_terminal_settings_open') === 'false') {
        localStorage.setItem('solver_terminal_settings_open', 'true');
    } else {
        localStorage.setItem('solver_terminal_settings_open', 'true');
    }
})

document.getElementById('show_log_time').addEventListener('click', function() {
    document.getElementById('show_log_time_checkbox').checked = !document.getElementById('show_log_time_checkbox').checked;

    if (document.getElementById('show_log_time_checkbox').checked) {
        localStorage.setItem('show_log_time', true);
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: `Show Log Time`,
            success: true,
            success_msg: "True",
            failure_msg: "False",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')
        })
    } else {
        // localStorage.setItem('show_log_time', false);
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: `Show Log Time`,
            success: false,
            success_msg: "True",
            failure_msg: "False",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')
        })
    }
    
})