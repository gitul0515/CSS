const categoryBtns = document.querySelector('.projects__categories');
let curBtn = categoryBtns.firstElementChild;
console.log(curBtn);

categoryBtns.addEventListener('click', e => {
  const target = e.target;
  const filter = target.dataset.filter;
  if (!filter) return;
  
  curBtn.classList.remove('checked');
  curBtn = target;
  curBtn.classList.add('checked');
})