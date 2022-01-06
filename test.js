const btnLang = document.querySelector('.nav__btn__lang');
const btnFlags = document.querySelector('.btn__lang__flags');

btnLang.addEventListener('click', () => {
  btnFlags.classList.toggle('show');
})
