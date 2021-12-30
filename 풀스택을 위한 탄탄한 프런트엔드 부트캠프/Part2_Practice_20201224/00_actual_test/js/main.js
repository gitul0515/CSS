// backToTop 버튼
const backToTop = document.getElementById('backtotop');

function scrollCheck() {
  if (scrollY !== 0) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

function moveBackToTop() {
  scrollTo({top: 0, behavior:'smooth'});
}

window.addEventListener('scroll', scrollCheck);
backToTop.addEventListener('click', moveBackToTop);

// class-list 이동 버튼
const _arrow = document.querySelectorAll('.slide-prev');
const arrow = [..._arrow];

for(let i = 0; arrow.length; i++) {
  const ul = arrow[i].parentNode.parentNode.nextElementSibling;
  const liList = ul.children;

  if (ul.clientWidth < liList.length * 260) {
    arrow[i].classList.add('hover');
    // arrow[i].addEventListener('click', movement);
  } else {
    const parent = arrow[i].parentNode;
    parent.removeChild(arrow[i].nextElementSibling);
    parent.removeChild(arrow[i]);
  }
}
