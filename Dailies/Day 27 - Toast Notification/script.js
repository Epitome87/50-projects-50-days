const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
  'Message Six',
];

const types = ['info', 'success', 'error'];

const toastObjects = [
  { message: 'Error!', type: 'error' },
  { message: 'Success!', type: 'success' },
  { message: 'You Have 1 New Message', type: 'info' },
  { message: 'Your Profile Needs Updating', type: 'alert' },
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  //   notification.innerText = message ? message : getRandomMessage();
  //   notification.classList.add(type ? type : getRandomType());
  const randomToast = getRandomToast();
  notification.innerText = message ? message : randomToast.message;
  notification.classList.add(type ? type : randomToast.type);
  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// function getRandomMessage() {
//   return messages[Math.floor(Math.random() * messages.length)];
// }

// function getRandomType() {
//   return types[Math.floor(Math.random() * types.length)];
// }

function getRandomToast() {
  return toastObjects[Math.floor(Math.random() * toastObjects.length)];
}
