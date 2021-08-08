// Grab our DOM elements
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Represents which Step is currently "Active"
let currentActive = 1;

// On every click, move to next step
nextBtn.addEventListener('click', () => {
  currentActive++;

  // Keep within step range
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// On every click, move to previous step
prevBtn.addEventListener('click', () => {
  currentActive--;

  // Keep within step range
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  // Circles coming at and before this step are "Active" - the rest are not.
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Note how many circles have "Active" class...
  const activeCircles = document.querySelectorAll('.active');
  // ...And use it to set the width of our progress bar
  progress.style.width = `${
    ((activeCircles.length - 1) / (circles.length - 1)) * 100
  }%`;

  //   Handle disabling the next & previous buttons based on the step we're on
  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
