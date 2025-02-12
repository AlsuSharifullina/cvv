// темная и светлая тема
const themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

