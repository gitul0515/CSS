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
const prevArrows = [...document.querySelectorAll('.slide-prev')];

for (let i = 0; i < prevArrows.length; i++) {
  const ul = prevArrows[i].parentNode.parentNode.nextElementSibling;
  const lis = ul.children; 

  // 현재 보여지는 ul 영역보다, 오른편에 콘텐츠가 더 있다면
  if (ul.clientWidth < lis.length * 260) {
    // 왼쪽 버튼 활성화
    prevArrows[i].addEventListener('click', moveLeft);
    prevArrows[i].classList.add('hover');
  } else {
    // 버튼을 모두 삭제한다
    const parent = prevArrows[i].parentNode;
    parent.removeChild(prevArrows[i].nextElementSibling);
    parent.removeChild(prevArrows[i]);
  }
}

// ul 콘텐츠를 왼쪽으로 이동한다
function moveLeft(event) {
  const prevArrow = event.target;
  const nextArrow = prevArrow.nextElementSibling;
  const ul = prevArrow.parentNode.parentNode.nextElementSibling;
  const lis = ul.children;
  const position = Number(ul.getAttribute('data-position')) - 260;

  // ul 콘텐츠를 왼쪽으로 1칸 이동
  ul.style.transitionProperty = 'transform';
  ul.style.transition = '0.5s';
  ul.style.transform = `translateX(${position}px)`;

  // 오른쪽 버튼을 활성화
  nextArrow.style.color = 'rgb(47, 48, 89)';
  nextArrow.addEventListener('click', moveRight);
  nextArrow.classList.add('hover');

  // 오른쪽에 가려진 콘텐츠가 없으면
  if (ul.clientWidth >= lis.length * 260 + position) {
    // 왼쪽 버튼을 비활성화
    prevArrow.style.color = '#cfd8dc';
    prevArrow.removeEventListener('click', moveLeft);
    prevArrow.classList.remove('hover');
  }

  // data-position 값을 업데이트
  ul.setAttribute('data-position', String(position));
}

// ul 콘텐츠를 오른쪽으로 이동
function moveRight(event) {
  const nextArrow = event.target;
  const prevArrow = nextArrow.previousElementSibling;
  const ul = nextArrow.parentNode.parentNode.nextElementSibling;
  const lis = ul.children;
  const position = Number(ul.getAttribute('data-position')) + 260;

  // 왼쪽 버튼을 활성화
  prevArrow.style.color = 'rgb(47, 48, 89)';
  prevArrow.addEventListener('click', moveLeft);
  prevArrow.classList.add('hover');
  
  // ul 콘텐츠를 오른쪽으로 이동
  ul.style.transitionProperty = 'transform';
  ul.style.transition = '0.5s';
  ul.style.transform = `translateX(${position}px)`;

  // 왼쪽에 가려진 콘텐츠가 없으면
  if (position === 0) {
    // 오른쪽 버튼을 비활성화
    nextArrow.style.color = '#cfd8dc';
    nextArrow.removeEventListener('click', moveRight);
    nextArrow.classList.remove('hover');
  }
  
  // data-position 값을 갱신
  ul.setAttribute('data-position', String(position));
}
