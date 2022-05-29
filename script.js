'use strict';
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let scores = [0, 0];
let newScore = 0;
let activePlayer = 0;
let playing = true;
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const fun = function () {
  currentScore = 0;
  document.querySelector(`#current--${newScore}`).textContent = currentScore;
  newScore = newScore === 1 ? 0 : 1;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
let currentScore = 0;
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${newScore}`).textContent =
        currentScore;
    } else {
      fun();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[newScore] += currentScore;

    document.getElementById(`score--${newScore}`).textContent =
      scores[newScore];
    console.log('was pressed');
    if (scores[newScore] >= 100) {
      console.log(`${scores[newScore]}`);
      document
        .querySelector(`.player--${newScore}`)
        .classList.add('player--winner');
      player0.classList.remove('player--active');
      player1.classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      fun();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  currentScore = 0;
  newScore = 0;
  document.querySelector(`#current--${newScore}`).textContent = 0;
  document.getElementById(`score--${newScore}`).textContent = 0;
  document
    .querySelector(`.player--${newScore}`)
    .classList.remove('player--winner');
  player0.classList.toggle('player--active');
});
