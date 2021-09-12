const pokemonContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5ra3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
};

const pokemonTypes = Object.keys(colors);

const pokeapiPromise = [];
for (let i = 1; i < pokemonCount; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  pokeapiPromise.push(fetch(url).then((res) => res.json()));
}

Promise.all(pokeapiPromise).then((result) => {
  const pokemon = result.map((data) => {
    createPokemonCard(data);
  });
});

// const fetchAllPokemon = async () => {
//   for (let i = 0; i < 5; i++) {
//     await getPokemon(i);
//   }
// };

// const getPokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const result = await fetch(url);
//   const data = await result.json();

//   console.log(data);
//     createPokemonCard(data);
// };

function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon');

  const formattedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const formattedId = pokemon.id.toString().padStart(3, '0');

  const types = pokemon.types.map((type) => type.type.name);
  const primaryType = pokemonTypes.find((type) => types.indexOf(type) > -1);
  const color = colors[primaryType];

  pokemonCard.style.backgroundColor = `${color}`;

  pokemonCard.innerHTML = `
    <div class="image-container">
        <img
        src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg"
        alt="${pokemon.name}"
        />
    </div>
    <div class="info">
        <span class="number">#${formattedId}</span>
        <h3 class="name">${formattedName}</h3>
        <small class="type">Type: <span>${primaryType}</span></small>
    </div>`;

  pokemonContainer.appendChild(pokemonCard);
}

// fetchAllPokemon();
