const buttonDarkMode = document.querySelector('.dark-mode-btn');

// 1. проверка темной темы в системе
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    buttonDarkMode.classList.add("dark_mode-btn--active");
    document.body.classList.add("dark");
}


// 2. проверка темной темы в localstorage
if (localStorage.getItem('darkMode') === 'dark') {
    buttonDarkMode.classList.add("dark_mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    buttonDarkMode.classList.remove("dark_mode-btn--active");
    document.body.classList.remove("dark");
}

// 3. если меняются системные настройки, меняю тему
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    if (newColorScheme === 'dark') {
        buttonDarkMode.classList.add("dark_mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        buttonDarkMode.classList.remove("dark_mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
})

// включение ночного режима по кнопке
buttonDarkMode.onclick = function () {
    buttonDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light");
    }
}

