const button = document.getElementById('btn');
const boxesContainer = document.getElementById('boxes');

button.addEventListener('click', (event) => {
  boxesContainer.classList.toggle('big');
});

createBoxes();

function createBoxes() {
  for (let numRows = 0; numRows < 4; numRows++) {
    for (let numCols = 0; numCols < 4; numCols++) {
      const box = document.createElement('div');
      box.classList.add('box');
      const xPos = -125 * numCols;
      const yPos = -125 * numRows;
      box.style.backgroundPosition = `${xPos}px ${yPos}px`;
      boxesContainer.appendChild(box);
    }
  }
}
