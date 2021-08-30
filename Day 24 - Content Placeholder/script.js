const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profileImage = document.getElementById('profile-img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = ` <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          srcset=""
        />`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  exerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, temporibus?`;
  profileImage.innerHTML = `<img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt=""
              srcset=""
            />`;
  nameEl.innerHTML = `John Doe`;
  date.innerHTML = 'August 30, 2021';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bgText) =>
    bgText.classList.remove('animated-bg-text')
  );
}