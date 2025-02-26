import { $convert_to_logmsg } from "../modules/solver_pg_terminal";
import { $exec_func } from "../compiler/compiler"

let solver_log = document.getElementById('solver_log');
let solver_console = document.getElementById('solver_console');
let solver_open_log_btn = document.getElementById('solver_open_log_btn');
let solver_open_console_btn = document.getElementById('solver_open_console_btn');

document.getElementById('solver_terminal_open_window').innerHTML = `<strong class="text-green-700 dark:text-green-500">Open Terminal Window</strong>: <span class="text-red-700 dark:text-red-500">Log</span>`

solver_open_console_btn.addEventListener('click', function() {
    solver_console.classList.remove('hidden');
    solver_log.classList.add('hidden');
    document.getElementById('solver_terminal_open_window').innerHTML = `<strong class="text-green-700 dark:text-green-500">Open Terminal Window</strong>: <span class="text-red-700 dark:text-red-500">Console</span>`
})
solver_open_log_btn.addEventListener('click', function() {
    solver_console.classList.add('hidden');
    solver_log.classList.remove('hidden')
    document.getElementById('solver_terminal_open_window').innerHTML = `<strong class="text-green-700 dark:text-green-500">Open Terminal Window</strong>: <span class="text-red-700 dark:text-red-500">Log</span>`
})

document.getElementById('solver_console_input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        $exec_func(document.getElementById('solver_console_input').value)
    }
})