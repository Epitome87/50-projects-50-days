const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ee4aed94978e593ba03e184fd5e72877&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=ee4aed94978e593ba03e184fd5e72877&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    movieElement.innerHTML = `
        <img
            src="${IMG_PATH + poster_path}"
            alt="${title}"
            srcset=""
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRating(
              vote_average
            )}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;

    main.appendChild(movieElement);
  });
}

function getClassByRating(rating) {
  if (rating >= 8) return 'rating-high';
  if (rating >= 5) return 'rating-average';
  return 'rating-poor';
}
