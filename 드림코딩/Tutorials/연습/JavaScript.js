const samllMenu = document.querySelector('.small-menu');
const headContainer = samllMenu.parentNode;

samllMenu.addEventListener('click', () => {
  headContainer.style.height = '100px';
})