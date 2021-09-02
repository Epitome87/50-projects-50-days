const search = document.querySelector('.search');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');

button.addEventListener('click', (event) => {
  // Expand the Search Input by giving it "active" class
  search.classList.toggle('active');
  input.focus();
});
