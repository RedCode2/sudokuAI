var s_switchToLightMode = document.getElementById('switch-to-light-mode');
var s_switchToDarkMode = document.getElementById('switch-to-dark-mode');
var s_font = document.getElementById('font');
var s_fontSize = document.getElementById('font-size');
var solver_time_of_log_color = document.getElementById('solver_time_of_log_color');

set_and_save_ff('bodyElement', localStorage.getItem('font-family'), 'font-family');
set_and_save_fs('bodyElement', localStorage.getItem('font-size'), 'font-size');

function set_and_save_ff(applyToElement, fontFamily, localStorageKey) {
    let fontTranslate = {
        "sans": "Arial, sans-serif",
        "serif": "Georgia, serif",
        "monospace": "'Courier New', Courier, monospace"
    }
    
    if (fontFamily in fontTranslate) {
        document.getElementById(applyToElement).style.fontFamily = fontTranslate[fontFamily];
        localStorage.setItem(localStorageKey, fontFamily);
    }
}

function set_and_save_fs(fontSize, localStorageKey) {
    let fontSizeTranslate = {
        "small": "14px",
        "medium": "16px",
        "large": "18px"
    }

    if (fontSize in fontSizeTranslate) {
        document.getElementById(applyToElement).style.fontSize = fontSizeTranslate[fontSize];
        localStorage.setItem(localStorageKey, fontSize);
    }
}

s_switchToLightMode.addEventListener('click', function () {
    s_switchToLightMode.addEventListener('click', function () {
        if (localStorage.getItem('color-theme') !== 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', "light");
            document.documentElement.classList.add('light');
        }
    })
    s_switchToDarkMode.addEventListener('click', function () {
        if (localStorage.getItem('color-theme') !== 'dark') {
            document.documentElement.classList.remove('light');
            localStorage.setItem('color-theme', "dark");
            document.documentElement.classList.add('dark');
        }
    })
})
s_switchToDarkMode.addEventListener('click', function () {
    if (localStorage.getItem('color-theme') !== 'dark') {
        document.documentElement.classList.remove('light');
        localStorage.setItem('color-theme', "dark");
        document.documentElement.classList.add('dark');
    }
})

// localStorage.removeItem('font');

s_font.addEventListener('change', function() {
    set_and_save_ff('bodyElement', s_font.value, 'font-family')
})
s_fontSize.addEventListener('change', function() {
    set_and_save_fs('bodyElement', s_fontSize.value, 'font-size')
})
document.getElementById('show_log_time').addEventListener('change', function() {
    localStorage.setItem('show_log_time', `${document.getElementById('show_log_time').checked}`);
})
solver_time_of_log_color.addEventListener('change', function() {
    localStorage.setItem(
        'solver_time_of_log_color_dark_m', 
        solver_time_of_log_color.value
    );
})
document.getElementById('solver_log_task_color').addEventListener('change', function() {
    localStorage.setItem(
        'solver_log_task_color_dark_m', 
        document.getElementById('solver_log_task_color').value
    );
})
document.getElementById('solver_log_success_color').addEventListener('change', function() {
    localStorage.setItem(
        'solver_log_success_color_dark_m', 
        document.getElementById('solver_log_success_color').value
    );
})
document.getElementById('solver_log_error_color').addEventListener('change', function() {
    localStorage.setItem(
        'solver_log_error_color_dark_m', 
        document.getElementById('solver_log_error_color').value
    );
})
document.getElementById('solver_time_of_log_color_light_m').addEventListener('change', function() {
    localStorage.setItem(
        'solver_time_of_log_color_light_m', 
        document.getElementById('solver_time_of_log_color_light_m').value
    );
})
document.getElementById('solver_log_task_color_light_m').addEventListener('change', function() {
    localStorage.setItem(
        'solver_log_task_color_light_m', 
        document.getElementById('solver_log_task_color_light_m').value
    );
})
document.getElementById('solver_log_success_color_light_m').addEventListener('change', function() {
    localStorage.setItem(
        'solver_log_success_color_light_m', 
        document.getElementById('solver_log_success_color_light_m').value
    );
})
document.getElementById('reset_solver_log_settings_btn').addEventListener('click', function() {
    localStorage.setItem('show_log_time', "true");
    localStorage.setItem('solver_time_of_log_color_dark_m', '#05df72');
    localStorage.setItem('solver_log_task_color_dark_m', '#b293c8');
    localStorage.setItem('solver_log_success_color_dark_m', '#7bf1a8');
    localStorage.setItem('solver_log_error_color_dark_m', '#e9b58a');
    localStorage.setItem('solver_time_of_log_color_light_m', '#73b39d');
    localStorage.setItem('solver_log_task_color_light_m', '#8c78a9');
    localStorage.setItem('solver_log_success_color_light_m', '#5eb18f');
    localStorage.setItem('solver_log_error_color_light_m', '#c48c66');

    solver_time_of_log_color.value = '#05df72';
    document.getElementById('solver_log_task_color').value = '#b293c8';
    document.getElementById('solver_log_success_color').value = '#7bf1a8';
    document.getElementById('solver_log_error_color').value = '#e9b58a';
    document.getElementById('solver_time_of_log_color_light_m').value = '#73b39d';
    document.getElementById('solver_log_task_color_light_m').value = '#8c78a9';
    document.getElementById('solver_log_success_color_light_m').value = '#5eb18f';
    document.getElementById('solver_log_error_color_light_m').value = '#c48c66';
    document.getElementById('show_log_time').checked = true;
})