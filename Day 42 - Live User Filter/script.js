const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData();

filter.addEventListener('input', (event) => filterData(event.target.value));

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  //   Clear result
  result.innerHTML = '';

  results.forEach((user) => {
    console.log(user);

    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
     <li>
          <img
            src="${user.picture.large}" alt="${user.name.first}"
            alt="{user.name.first}'s selfie"
          />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
        </li>`;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
