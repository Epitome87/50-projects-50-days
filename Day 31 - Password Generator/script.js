const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const messageElement = document.getElementById('message');

clipboardElement.addEventListener('click', (event) => {
  const textArea = document.createElement('textarea');
  const password = resultElement.innerText;

  if (!password) return;

  textArea.value = password;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  //   alert('Password copied to clipboard');

  showCopiedMessage();
});

generateElement.addEventListener('click', (event) => {
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  // Filter out anything that has false as a value
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) return '';

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generates random lowercase letter using UTF-16 starting index of 97, up to 26 greater than that
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generates random uppercase letter using UTF-16 starting index of 65, up to 26 greater than that
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Generates random number using UTF-16 starting index of 48, up to 10 greater than that
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generates random symbols using a pre-defined list of desired symbols
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';

  return symbols[Math.floor(Math.random() * symbols.length)];
}

function showCopiedMessage() {
  messageElement.style.display = 'block';
  clipboardElement.disabled = true;

  resultElement.classList.add('shake');

  setTimeout(function () {
    messageElement.style.display = 'none';
    clipboardElement.disabled = false;
    resultElement.classList.remove('shake');
  }, 1000);
}
