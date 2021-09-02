const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', (event) => {
  container.classList.add('hover-left');
});
left.addEventListener('mouseleave', (event) => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', (event) => {
  container.classList.add('hover-right');
});
right.addEventListener('mouseleave', (event) => {
  container.classList.remove('hover-right');
});
