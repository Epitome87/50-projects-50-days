const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target')); // Can also parseInt, or add a + in front of counter to turn it into a number
    const counterValue = Number(counter.innerText);

    const increment = target / 200;

    if (counterValue < target) {
      counter.innerText = `${Math.ceil(counterValue + increment)}`;
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
