const input = document.getElementById("input-tema");
const body = document.querySelector("body");
const main = document.querySelector("main");

const toggleThemeMode = () => {

    body.classList.toggle("dark");
    main.classList.toggle("dark-mode");
};

input.onchange = toggleThemeMode;