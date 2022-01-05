const navToggleBtn = document.querySelector('.nav__toggle__btn');
const navMenu = document.querySelector('.nav__menu');
const navSns = document.querySelector('.nav__sns');

navToggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navSns.classList.toggle('show');
})