const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleButton = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggleButton.addEventListener('click', (event) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    event.target.innerHTML = 'Light Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursRotation = scale(hoursForClock, 0, 11, 0, 360);
  const minutesRotation = scale(minutes, 0, 59, 0, 360);
  const secondsRotation = scale(seconds, 0, 59, 0, 360);

  //   Fix the spinning-hand bug that occurs when needles are at 0
  hourElement.style.transition = `${
    hoursForClock === 0 ? 'none' : 'all 0.5s ease-in'
  }`;
  minuteElement.style.transition = `${
    minutes === 0 ? 'none' : 'all 0.5s ease-in'
  }`;
  secondElement.style.transition = `${
    seconds === 0 ? 'none' : 'all 0.5s ease-in'
  }`;

  hourElement.style.transform = `translate(-50%, -100%) rotate(${hoursRotation}deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${minutesRotation}deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${secondsRotation}deg)`;

  //   dateElement.innerText = time.toLocaleDateString('en-US');
  timeElement.innerText = time.toLocaleTimeString('en-US');

  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
