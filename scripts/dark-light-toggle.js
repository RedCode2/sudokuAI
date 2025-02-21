var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var settingsLightMode = document.getElementById('settings_light_m');
var settingsDarkMode = document.getElementById('settings_dark_m');
var HTMLMainElement = document.getElementById('HTMLMainElement')

HTMLMainElement.classList.add(localStorage.getItem('color-theme'));

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            HTMLMainElement.classList.replace('light', localStorage.getItem('color-theme'));
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            HTMLMainElement.classList.replace('dark', localStorage.getItem('color-theme'));
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            HTMLMainElement.classList.replace('dark', localStorage.getItem('color-theme'));
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('color-theme', 'dark');
            HTMLMainElement.classList.replace('light', localStorage.getItem('color-theme'));
        }
    }
    
});