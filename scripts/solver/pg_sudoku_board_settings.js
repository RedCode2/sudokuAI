solver_sudoku_board_settings_arrow = document.getElementById('solver_sudoku_board_settings_arrow');
solver_sudoku_board_settings_arrow_light_m = document.getElementById('solver_sudoku_board_settings_arrow_light_m');
solver_sudoku_board_background_color = document.getElementById('solver_sudoku_board_background_color');

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

solver_sudoku_board_background_color.addEventListener('change', function() {
    
})