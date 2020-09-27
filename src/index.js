import './styles.css';

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

function onStart() {
  refs.start.disabled = true;
  intervalId = setInterval(changeBg, 1000);
}

function onStop() {
  refs.start.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBg() {
  const random = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[random];
}
