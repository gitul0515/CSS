const btnLang = document.querySelector('.nav__btn__lang');
const btnFlags = document.querySelector('.btn__lang__flags');

btnLang.addEventListener('click', () => {
  btnFlags.classList.toggle('show');
})

const hamburger = document.querySelector('i.hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
})