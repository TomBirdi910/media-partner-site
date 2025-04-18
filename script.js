// Открытие и закрытие гамбургер-меню
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('open');  // Для плавного открытия меню
    hamburgerMenu.classList.toggle('open');  // Для анимации гамбургер-меню и крестика
});
