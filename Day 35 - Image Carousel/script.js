const imageContainer = document.getElementById('imgs');
const previousButton = document.querySelector('#left');
const nextButton = document.querySelector('#right');

const images = document.querySelectorAll('#imgs img');

let intervalTime = 2000;
let index = 0;

let interval = setInterval(run, intervalTime);

function run() {
  index++;
  changeImage();
}

previousButton.addEventListener('click', (event) => {
  index--;
  changeImage();
  resetInterval();
});

nextButton.addEventListener('click', (event) => {
  index++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, intervalTime);
}

function changeImage() {
  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

  imageContainer.style.transform = `translateX(${-500 * index}px)`;
}
