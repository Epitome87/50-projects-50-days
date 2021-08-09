const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// When the Open & Close icons are clicked, show & remove the navbar accordingly
open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));
