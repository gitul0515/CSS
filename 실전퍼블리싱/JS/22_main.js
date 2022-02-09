const categoryBtns = document.querySelector('.projects__categories');
let curBtn = categoryBtns.firstElementChild;
const projects = [...document.querySelector('.projects__container').children];
console.log(projects);

categoryBtns.addEventListener('click', e => {
  const target = e.target;
  const btnFilter = target.dataset.filter;
  if (!btnFilter) return;
  
  curBtn.classList.remove('checked');
  curBtn = target;
  curBtn.classList.add('checked');

  projects.forEach(project => {
    const projectFilter = project.dataset.filter;
    if (projectFilter === btnFilter || btnFilter === 'all') {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  });
})