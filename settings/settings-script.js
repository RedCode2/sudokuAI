var s_switchToLightMode = document.getElementById('switch-to-light-mode');
var s_switchToDarkMode = document.getElementById('switch-to-dark-mode');
var s_font = document.getElementById('font');
var s_fontSize = document.getElementById('font-size');

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

function set_and_save_fs(applyToElement, fontSize, localStorageKey) {
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

// localStorage.removeItem('font');

s_font.addEventListener('change', function() {
    set_and_save_ff('bodyElement', s_font.value, 'font-family')
})
s_fontSize.addEventListener('change', function() {
    set_and_save_fs('bodyElement', s_fontSize.value, 'font-size')
})