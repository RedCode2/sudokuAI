let solver_window_settings = document.getElementById('solver_window_settings');
let solver_window_settings_header = document.getElementById('solver_window_settings_header');
let solver_window_settings_arrow = document.getElementById('solver_window_settings_arrow');
let solver_window_settings_to_dark = document.getElementById('solver_window_settings_to_dark');
let solver_window_settings_to_light = document.getElementById('solver_window_settings_to_light');
let solver_window_theme_dark_checkbox = document.getElementById('solver_window_theme_dark_checkbox');
let solver_window_theme_light_checkbox = document.getElementById('solver_window_theme_light_checkbox');

if (localStorage.getItem('solver_window_theme') === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// localStorage.removeItem('window_settings_open');

function set_and_save_solver_theme(localStorageKey, fromTheme, changeToTheme) {
    if (localStorage.getItem(localStorageKey) !== changeToTheme) {
        document.documentElement.classList.remove(fromTheme);
        localStorage.setItem(localStorageKey, changeToTheme);
        document.documentElement.classList.add(changeToTheme);
    }
}

// if (localStorage.getItem('solver_window_theme') === 'dark') {
//     set_and_save_solver_theme('solver_window_theme', 'light', 'dark');
//     solver_window_theme_dark_checkbox.checked = true;
//     solver_window_theme_light_checkbox.checked = false;
// } else {
//     set_and_save_solver_theme('solver_window_theme', 'dark', 'light');
//     solver_window_theme_light_checkbox.checked = true;
//     solver_window_theme_dark_checkbox.checked = false;
// }

// if (solver_window_theme_dark_checkbox.checked) {
//     set_and_save_solver_theme('solver_window_theme', 'light', 'dark');
// } else {
//     set_and_save_solver_theme('solver_window_theme', 'dark', 'light');
// }

if (localStorage.getItem('solver_window_settings_open') === 'false') {
    solver_window_settings_arrow.classList.add('-rotate-90');
} else {
    solver_window_settings_arrow.classList.remove('-rotate-90');
}

if (solver_window_settings_arrow.classList.contains('-rotate-90')) {
    solver_window_settings.classList.add('hidden');
} else {
    solver_window_settings.classList.remove('hidden');
}

solver_window_settings_header.addEventListener('click', function() {
    solver_window_settings_arrow.classList.toggle('-rotate-90')

    if (solver_window_settings_arrow.classList.contains('-rotate-90')) {
        solver_window_settings.classList.add('hidden');
    } else {
        solver_window_settings.classList.remove('hidden');
    }

    if (localStorage.getItem('solver_window_settings_open') === 'true') {
        localStorage.setItem('solver_window_settings_open', 'false');
    } else if (localStorage.getItem('solver_window_settings_open') === 'false') {
        localStorage.setItem('solver_window_settings_open', 'true');
    } else {
        localStorage.setItem('solver_window_settings_open', 'true');
    }
})

solver_window_settings_to_dark.addEventListener('click', function() {
    solver_window_theme_dark_checkbox.checked = true;
    solver_window_theme_light_checkbox.checked = false;

    set_and_save_solver_theme('solver_window_theme', 'light', 'dark');
})
solver_window_settings_to_light.addEventListener('click', function() {
    solver_window_theme_light_checkbox.checked = true;
    solver_window_theme_dark_checkbox.checked = false;

    set_and_save_solver_theme('solver_window_theme', 'dark', 'light');
})