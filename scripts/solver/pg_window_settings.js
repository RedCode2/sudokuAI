import { $convert_to_logmsg } from "../modules/solver_pg_terminal";

const solver_window_elements_fs = document.querySelectorAll('.text-xs');
let solver_window_settings = document.getElementById('solver_window_settings');
let solver_window_settings_header = document.getElementById('solver_window_settings_header');
let solver_window_settings_arrow = document.getElementById('solver_window_settings_arrow');
let solver_window_settings_arrow_light_m = document.getElementById('solver_window_settings_arrow_light_m');
let solver_window_settings_to_dark = document.getElementById('solver_window_settings_to_dark');
let solver_window_settings_to_light = document.getElementById('solver_window_settings_to_light');
let solver_window_theme_dark_checkbox = document.getElementById('solver_window_theme_dark_checkbox');
let solver_window_theme_light_checkbox = document.getElementById('solver_window_theme_light_checkbox');
let solver_window_ff = document.getElementById('solver_window_ff');
let solver_window_ff_selectbox = document.getElementById('solver_window_ff_selectbox');
let solver_window_ff_selectbox_change_to_font_sans = document.getElementById('solver_window_ff_selectbox_change_to_font_sans');
let solver_window_ff_selectbox_change_to_font_serif = document.getElementById('solver_window_ff_selectbox_change_to_font_serif');
let solver_window_ff_selectbox_change_to_font_mono = document.getElementById('solver_window_ff_selectbox_change_to_font_mono');
let solver_window_fs_selectbox = document.getElementById('solver_window_fs_selectbox');
let solver_window_fs_selectbox_change_to_font_size_small = document.getElementById('solver_window_fs_selectbox_change_to_font_size_small');
let solver_window_fs_selectbox_change_to_font_size_medium = document.getElementById('solver_window_fs_selectbox_change_to_font_size_medium');
let solver_window_fs_selectbox_change_to_font_size_large = document.getElementById('solver_window_fs_selectbox_change_to_font_size_large');

function set_and_save_solver_theme(localStorageKey, fromTheme, changeToTheme) {
    if (localStorage.getItem(localStorageKey) !== changeToTheme) {
        document.documentElement.classList.remove(fromTheme);
        localStorage.setItem(localStorageKey, changeToTheme);
        document.documentElement.classList.add(changeToTheme);
    }
}

function set_and_save_ff(localStorageKey, fontFamily) {
    document.documentElement.classList.remove(`font-${localStorage.getItem(localStorageKey)}`);
    document.documentElement.classList.add(`font-${fontFamily}`);
    localStorage.setItem(localStorageKey, fontFamily);
}


function set_and_save_fs(localStorageKey, fontSize) {
    document.documentElement.classList.remove(`text-sm`, `text-xs`, `text-lg`);
    document.documentElement.classList.add(`text-${fontSize}`);
    
    localStorage.setItem(localStorageKey, fontSize);
}

if (localStorage.getItem('solver_window_theme') === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

if (solver_window_fs_selectbox_change_to_font_size_small.selected) {
    set_and_save_fs('solver_window_fs', 'xs');
} else if (solver_window_fs_selectbox_change_to_font_size_medium.selected) {
    set_and_save_fs('solver_window_fs', 'sm');
} else if (solver_window_fs_selectbox_change_to_font_size_large.selected) {
    set_and_save_fs('solver_window_fs', 'md');
} else {
    set_and_save_fs('solver_window_fs', 'xs');
}

if (localStorage.getItem('solver_window_ff') === 'sans') {
    set_and_save_ff('solver_window_ff', 'sans');
    solver_window_ff_selectbox.value = 'sans';
} else if (localStorage.getItem('solver_window_ff') === 'serif') {
    set_and_save_ff('solver_window_ff', 'serif');
    solver_window_ff_selectbox.value = 'serif';
} else if (localStorage.getItem('solver_window_ff') === 'mono') {
    set_and_save_ff('solver_window_ff', 'mono');
    solver_window_ff_selectbox.value = 'mono';
} else {
    localStorage.setItem('solver_window_ff', 'sans');
    solver_window_ff_selectbox.value = 'sans';
}

if (localStorage.getItem('solver_window_settings_open') === 'false') {
    solver_window_settings_arrow.classList.add('-rotate-90');
    solver_window_settings_arrow_light_m.classList.add('-rotate-90');
} else {
    solver_window_settings_arrow.classList.remove('-rotate-90');
    solver_window_settings_arrow_light_m.classList.remove('-rotate-90');
}

if (solver_window_settings_arrow.classList.contains('-rotate-90') || solver_window_settings_arrow_light_m.classList.contains('-rotate-90')) {
    solver_window_settings.classList.add('hidden');
} else {
    solver_window_settings.classList.remove('hidden');
}

solver_window_settings_header.addEventListener('click', function() {
    solver_window_settings_arrow.classList.toggle('-rotate-90');
    solver_window_settings_arrow_light_m.classList.toggle('-rotate-90');

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
});

solver_window_settings_to_dark.addEventListener('click', function() {
    solver_window_theme_dark_checkbox.checked = true;
    solver_window_theme_light_checkbox.checked = false;

    set_and_save_solver_theme('solver_window_theme', 'light', 'dark');

    document.getElementById('solver_log').innerHTML += "<br>" + $convert_to_logmsg({
        task: "Change theme to Dark",
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});

solver_window_settings_to_light.addEventListener('click', function() {
    solver_window_theme_light_checkbox.checked = true;
    solver_window_theme_dark_checkbox.checked = false;

    set_and_save_solver_theme('solver_window_theme', 'dark', 'light');

    document.getElementById('solver_log').innerHTML += "<br>" + $convert_to_logmsg({
        task: "Change theme to Light",
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});

solver_window_ff_selectbox.addEventListener('change', function() {
    set_and_save_ff('solver_window_ff', solver_window_ff_selectbox.value);

    document.getElementById('solver_log').innerHTML += "<br>" + $convert_to_logmsg({
        task: `Change font_family to ${solver_window_ff_selectbox.value}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});

solver_window_fs_selectbox.addEventListener('change', function() {
    let fs_translate = {
        "xs": "Small",
        "sm": "Medium",
        "md": "Large"
    }

    set_and_save_fs('solver_window_fs', solver_window_fs_selectbox.value);

    document.getElementById('solver_log').innerHTML += "<br>" + $convert_to_logmsg({
        task: `Change font_size to ${fs_translate[solver_window_fs_selectbox.value]}`,
        success: true,
        success_msg: "Success",
        failure_msg: "Failed",
        pg_theme: localStorage.getItem('solver_window_theme'),
        show_time_of_log: localStorage.getItem('show_log_time')
    })
});