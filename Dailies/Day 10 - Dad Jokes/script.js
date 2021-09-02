const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}
