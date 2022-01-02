// ----- backToTop 버튼 -----
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

// ----- 버튼으로 ul 콘텐츠를 움직이기 -----
const preArrow = [...document.querySelectorAll('.slide-prev')];

for (let i = 0; i < preArrow.length; i++) {
  // 왼쪽 버튼을 활성화
  preArrow[i].addEventListener('click', moveLeft);
  preArrow[i].style.color = 'rgb(47, 48, 89)';
  preArrow[i].classList.add('hover');
}

function moveLeft(event) {
  const preArrow = event.target;
  const nextArrow = preArrow.nextElementSibling;
  const ul = preArrow.parentNode.parentNode.nextElementSibling;
  const lis = ul.children;
  const position = Number(ul.getAttribute('data-position')) - 260;

  // ul 콘텐츠를 왼쪽으로 1칸 이동시킨다
  ul.style.transition = '0.5s';
  ul.style.transform = `translateX(${position}px)`;

  // 오른쪽 버튼을 활성화
  nextArrow.addEventListener('click', moveRight);
  nextArrow.style.color = 'rgb(47, 48, 89)';
  nextArrow.classList.add('hover');

  // 오른쪽에 가려진 콘텐츠가 없으면, 왼쪽 버튼을 비활성화
  if (ul.clientWidth >= lis.length * 260 + position) {
    preArrow.removeEventListener('click', moveLeft);
    preArrow.style.color = '#cfd8dc';
    preArrow.classList.remove('hover');
  }

  // data-position의 값을 갱신한다
  ul.setAttribute('data-position', String(position));
}

function moveRight(event) {
  const nextArrow = event.target;
  const preArrow = nextArrow.previousElementSibling;
  const ul = nextArrow.parentNode.parentNode.nextElementSibling;
  const position = Number(ul.getAttribute('data-position')) + 260;

  // ul 콘텐츠를 오른쪽으로 1칸 이동시킨다
  ul.style.transition = '0.5s';
  ul.style.transform = `translateX(${position}px)`;

  // 왼쪽 버튼을 활성화
  preArrow.addEventListener('click', moveLeft);
  preArrow.style.color = 'rgb(47, 48, 89)';
  preArrow.classList.add('hover');

  // 왼쪽에 가려진 콘텐츠가 없으면, 오른쪽 버튼을 비활성화
  if (position === 0) {
    nextArrow.removeEventListener('click', moveRight);
    nextArrow.style.color = '#cfd8dc';
    nextArrow.classList.remove('hover');
  }

  // data-position의 값을 갱신한다
  ul.setAttribute('data-position', String(position));
}