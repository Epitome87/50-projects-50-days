const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');

const sizeElement = document.querySelector('#size');
const colorElement = document.querySelector('#color');
const clearElement = document.querySelector('#clear');

const MAX_SIZE = 100;
let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (event) => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

colorElement.addEventListener('change', (event) => {
  color = event.target.value;
});

// Setup button event listeners
increaseButton.addEventListener('click', (event) => {
  size += 5;
  if (size > MAX_SIZE) size = MAX_SIZE;
  updateSizeDisplay();
});

decreaseButton.addEventListener('click', (event) => {
  size -= 5;
  if (size < 5) size = 5;
  updateSizeDisplay();
});

clearElement.addEventListener('click', (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

function updateSizeDisplay() {
  sizeElement.innerText = size;
}
