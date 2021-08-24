const input = document.querySelector("#theme-switcher");
const switcher = document.querySelector(".switcher");
const app = document.querySelector(".app");

switcher.addEventListener("click", () => {
    toggleTheme(input.checked);
});

function toggleTheme(conditional) {
    conditional ? switchToDarkTheme() : switchToLightTheme();
}

function switchToLightTheme() {
    app.classList.remove("dark-theme");
    app.classList.add("light-theme");
    switcher.classList.add("active");
}
function switchToDarkTheme() {
    app.classList.remove("light-theme");
    app.classList.add("dark-theme");
    switcher.classList.remove("active");
}
