
const menuToggle = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});
