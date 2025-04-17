document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.menu .close-btn');

  // Открытие меню
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  // Закрытие меню по кнопке закрытия
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('open');
  });
});
