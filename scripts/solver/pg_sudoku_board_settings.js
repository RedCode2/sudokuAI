import { $convert_to_logmsg } from "../modules/solver_pg_terminal.js";
import { solveSudoku } from "../modules/solve.js";



solver_sudoku_board_settings_arrow = document.getElementById('solver_sudoku_board_settings_arrow');
solver_sudoku_board_settings_arrow_light_m = document.getElementById('solver_sudoku_board_settings_arrow_light_m');
solver_sudoku_board_background_color = document.getElementById('solver_sudoku_board_background_color');
solver_log = document.getElementById('solver_log');

if (localStorage.getItem('solver_sudoku_board_settings_open') === 'false') {
    solver_sudoku_board_settings_arrow.classList.add('-rotate-90');
    solver_sudoku_board_settings_arrow_light_m.classList.add('-rotate-90');
} else {
    solver_sudoku_board_settings_arrow.classList.remove('-rotate-90');
    solver_sudoku_board_settings_arrow_light_m.classList.remove('-rotate-90');
}
if (solver_sudoku_board_settings_arrow.classList.contains('-rotate-90') || solver_sudoku_board_settings_arrow_light_m.classList.contains('-rotate-90')) {
    solver_sudoku_board_settings.classList.add('hidden');
} else {
    solver_sudoku_board_settings.classList.remove('hidden');
}

document.getElementById('solver_sudoku_board_settings_header').addEventListener('click', function() {
    solver_sudoku_board_settings_arrow.classList.toggle('-rotate-90');
    solver_sudoku_board_settings_arrow_light_m.classList.toggle('-rotate-90');

    if (solver_sudoku_board_settings_arrow.classList.contains('-rotate-90')) {
        solver_sudoku_board_settings.classList.add('hidden');
    } else {
        solver_sudoku_board_settings.classList.remove('hidden');
    }

    if (localStorage.getItem('solver_sudoku_board_settings_open') === 'true') {
        localStorage.setItem('solver_sudoku_board_settings_open', 'false');
    } else if (localStorage.getItem('solver_sudoku_board_settings_open') === 'false') {
        localStorage.setItem('solver_sudoku_board_settings_open', 'true');
    } else {
        localStorage.setItem('solver_sudoku_board_settings_open', 'true');
    }
})

document.getElementById('solver_show_headers').addEventListener('click', function() {
    let solver_show_headers_checkbox = document.getElementById('solver_show_headers_checkbox');
    
    solver_show_headers_checkbox.checked = !solver_show_headers_checkbox.checked;

    Array.from(document.getElementsByClassName('sudoku_board_headers')).forEach(element => {
        if (solver_show_headers_checkbox.checked) {
            element.classList.remove('hidden');
            element.classList.add('visible');
            document.getElementById('solver_sudoku_board_9x9').classList.remove('grid-cols-9');
            document.getElementById('solver_sudoku_board_9x9').classList.add('grid-cols-10');
        } else {
            element.classList.remove('visible');
            element.classList.add('hidden');
            document.getElementById('solver_sudoku_board_9x9').classList.remove('grid-cols-10');
            document.getElementById('solver_sudoku_board_9x9').classList.add('grid-cols-9');
        }
    });

    if (solver_show_headers_checkbox.checked) {
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: "Show Headers",
            success: true,
            success_msg: "True",
            failure_msg: "False",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')
        })
    } else {
        solver_log.innerHTML += '<br>' + $convert_to_logmsg({
            task: "Show Headers",
            success: false,
            success_msg: "True",
            failure_msg: "False",
            pg_theme: localStorage.getItem('solver_window_theme'),
            show_time_of_log: localStorage.getItem('show_log_time')
        })
    }
})

document.getElementById('solver_sudoku_board_background_color_input').addEventListener('change', function() {
    document.getElementById('solver_sudoku_board_background').style.backgroundColor = this.value;

    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
        task: `Change sudoku_board bgcolor to ${this.value}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
})

let prev_border_color = '#000000';

document.getElementById('solver_sudoku_board_border_color_input').addEventListener('change', function () {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let i = 0; i < 9; i++) {
        for (let j = 1; j < 10; j++) {
            const cell = document.getElementById(`cell_${alphabets[i]}${j}`);
            cell.style.borderColor = prev_border_color;
            cell.style.borderColor = this.value;
        }
    }

    prev_border_color = this.value;

    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
        task: `Change sudoku_board border color to ${this.value}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});

document.getElementById('solver_sudoku_board_header_color_input').addEventListener('change', function () {
    Array.from(document.getElementsByClassName('sudoku_board_headers')).forEach(element => {
        element.style.color = this.value;
    })

    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
        task: `Change sudoku_board header color to ${this.value}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});

let prev_user_text_color = '#000000';

document.getElementById('solver_sudoku_board_user_text_color_input').addEventListener('change', function () {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let i = 0; i < 9; i++) {
        for (let j = 1; j < 10; j++) {
            const cell = document.getElementById(`cell_${alphabets[i]}${j}`);
            cell.style.color = prev_user_text_color;
            cell.style.color = this.value;
        }
    }

    prev_user_text_color = this.value;

    solver_log.innerHTML += '<br>' + $convert_to_logmsg({
        task: `Change sudoku_board user text color to ${this.value}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});
