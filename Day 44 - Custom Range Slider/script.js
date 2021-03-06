const range = document.getElementById('range');

range.addEventListener('input', (event) => {
  const value = +event.target.value;
  const label = event.target.nextElementSibling;

  const rangeWidth = getComputedStyle(event.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');

  //   Remove the "px" from the result above
  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  //   Get the slider's min and max range
  const max = +event.target.max;
  const min = +event.target.min;

  const left =
    value * (numRangeWidth / max) -
    numLabelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
