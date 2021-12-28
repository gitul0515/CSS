const backToTop = document.getElementById('backtotop');

window.addEventListener('scroll', () => {
  const scrollYPos = window.scrollY;

  if (scrollYPos !== 0) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  scrollTo({top: 0, behavior:'smooth'});
});