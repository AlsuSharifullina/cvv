// темная и светлая тема
const themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

document.querySelectorAll('.header__item a').forEach(link => {
    link.addEventListener('click', function() {
        // Закрываем меню
        document.querySelector('.menu_toggler').checked = false;
    });
});