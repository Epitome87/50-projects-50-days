const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openButton.addEventListener('click', (event) => {
  nav.forEach((navElement) => navElement.classList.add('visible'));
});

closeButton.addEventListener('click', (event) => {
  nav.forEach((navElement) => navElement.classList.remove('visible'));
});
