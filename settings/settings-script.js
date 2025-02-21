var s_switchToLightMode = document.getElementById('switch-to-light-mode');
var s_switchToDarkMode = document.getElementById('switch-to-dark-mode');

s_switchToLightMode.addEventListener('click', function () {
    console.log('button clicked!')
    if (localStorage.getItem('color-theme') !== 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', "light");
        document.documentElement.classList.add('light');
    }
})
s_switchToDarkMode.addEventListener('click', function () {
    console.log('button clicked!')
    if (localStorage.getItem('color-theme') !== 'dark') {
        document.documentElement.classList.remove('light');
        localStorage.setItem('color-theme', "dark");
        document.documentElement.classList.add('dark');
    }
})