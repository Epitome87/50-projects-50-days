const cardContainer = document.getElementById('card-container');
const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profileImage = document.getElementById('profile-img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

const cardDataList = [
  {
    id: 'c0',
    headerImage: 'https://source.unsplash.com/random/550x300',
    title: 'Title 1',
    exerpt: 'Here is some fake text',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    userName: 'Matthew',
    date: 'August 20, 2021',
  },
  {
    id: 'c1',
    headerImage: 'https://source.unsplash.com/random/500x300',
    title: 'Title 2',
    exerpt: 'Here is some fake text',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    userName: 'Caitlin',
    date: 'March 22, 2020',
  },
  {
    id: 'c2',
    headerImage: 'https://source.unsplash.com/random/300x300',
    title: 'Title 3',
    exerpt: 'Here is some fake text',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Daniel',
    date: 'October 11, 2020',
  },
  {
    id: 'c3',
    headerImage: 'https://source.unsplash.com/random/200x300',
    title: 'Title 4',
    exerpt: 'Here is some fake text',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    userName: 'Mitchell',
    date: 'August 25 2021',
  },
  {
    id: 'c4',
    headerImage: 'https://source.unsplash.com/random/450x350',
    title: 'Title 5',
    exerpt: 'Here is some fake text',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    userName: 'Linda',
    date: 'August 20, 2021',
  },
];

for (let i = 0; i < 5; i++) {
  createCard('c' + i);
}

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    getData(
      cardDataList[i].id,
      cardDataList[i].headerImage,
      cardDataList[i].title,
      cardDataList[i].exerpt,
      cardDataList[i].profileImage,
      cardDataList[i].userName,
      cardDataList[i].date
    );
  }
}, 2500);

function getData(
  cardID,
  headerImage,
  title,
  exerpt,
  profileImage,
  userName,
  date
) {
  const currentCard = document.getElementById(cardID);
  const cardHeader = document.querySelector(`#${cardID} .card-header`);
  const cardTitle = document.querySelector(`#${cardID} .card-title`);
  const cardExerpt = document.querySelector(`#${cardID} .card-exerpt`);
  const cardProfileImage = document.querySelector(`#${cardID} .profile-img`);
  const cardUsername = document.querySelector(`#${cardID} .card-name`);
  const cardDate = document.querySelector(`#${cardID} .card-date`);
  const cardBgs = document.querySelectorAll(`#${cardID} .animated-bg`);
  const cardBgTexts = document.querySelectorAll(`#${cardID} .animated-bg-text`);

  cardHeader.innerHTML = `<img
          src="${headerImage}
          alt=""
          srcset=""
        />`;
  cardTitle.innerHTML = `${title}`;
  cardExerpt.innerHTML = `${exerpt}`;
  cardProfileImage.innerHTML = `<img
              src="${profileImage}"
              alt=""
              srcset=""
            />`;
  cardUsername.innerHTML = userName;
  cardDate.innerHTML = date;

  for (bg of cardBgs) {
    console.log('BG from ', cardID, bg);
    bg.classList.remove('animated-bg');
  }

  for (bgText of cardBgTexts) bgText.classList.remove('animated-bg-text');
}

function createCard(cardId) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.id = cardId;
  cardElement.innerHTML = `<div class="card-header animated-bg">&nbsp;</div>
  <div class="card-content">
    <h3 class="card-title animated-bg animated-bg-text">&nbsp;</h3>
    <p class="card-exerpt">&nbsp;
        <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span>
    </p>
    <div class="author">
        <div class="profile-img animated-bg">&nbsp;</div>
        <div class="author-info">
        <strong class="card-name animated-bg animated-bg-text">&nbsp;</strong>
        <small class="card-date animated-bg animated-bg-text">&nbsp;</small>
        </div>
    </div>
    </div>`;

  cardContainer.appendChild(cardElement);
}
