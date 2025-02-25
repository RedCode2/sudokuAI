import { $convert_to_logmsg } from "../modules/solver_pg_terminal";

let solver_log = document.getElementById('solver_log');
let solver_console = document.getElementById('solver_console');
let solver_open_log_btn = document.getElementById('solver_open_log_btn');
let solver_open_console_btn = document.getElementById('solver_open_console_btn');

solver_open_console_btn.addEventListener('click', function() {
    solver_console.classList.remove('hidden');
    solver_log.classList.add('hidden');
})
solver_open_log_btn.addEventListener('click', function() {
    solver_console.classList.add('hidden');
    solver_log.classList.remove('hidden')
})

solver_log.innerHTML = $convert_to_logmsg("Generating Log Interface", true, "Success", "Failure", "dark")