const loveMeElement = document.querySelector('.loveMe');
const timesLikedElement = document.querySelector('#times');

let clickTime = 0;
let timesLiked = 0;

// Could simply use "dblclick" event -- but we'll make our own double click to be interesting!
loveMeElement.addEventListener('click', (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      timesLiked++;
      clickTime = 0;
      createHeart(event);
      setNewRandomImage();
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(event) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = loveMeElement.offsetLeft;
  const topOffset = loveMeElement.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMeElement.appendChild(heart);

  timesLikedElement.innerHTML = timesLiked;

  setTimeout(() => heart.remove(), 1000);
}

function setNewRandomImage() {
  const randomWidth = Math.floor(Math.random() * 1920);
  const randomHeight = Math.floor(Math.random() * 1080);
  loveMeElement.style.backgroundImage = `url('https://source.unsplash.com/random/${randomWidth}x${randomHeight})`;
}
