'use strict';
const diceBtn = document.querySelector('.btn--roll')
const diceImg = document.querySelector('img.dice')
let currentScore;//= document.querySelector('section.player--active .current-score')

const firstPlayer = document.querySelector('.player--0')
const secondPlayer = document.querySelector('.player--1')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')

firstPlayer.querySelector('.current-score').textContent = '0';
secondPlayer.querySelector('.current-score').textContent = '0';
secondPlayer.querySelector('.score').textContent = '0';
firstPlayer.querySelector('.score').textContent = '0';

let randomNumber;
let activePlayer = firstPlayer;
diceBtn.addEventListener('click', function () {

    randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `dice-${randomNumber}.png`;

    if (randomNumber === 1) {
        if (firstPlayer.classList.contains('player--active')) {
            firstPlayer.classList.remove('player--active');
            secondPlayer.classList.add('player--active');
            activePlayer = secondPlayer;
            return;
        }
        else {
            firstPlayer.classList.add('player--active');
            secondPlayer.classList.remove('player--active');
            activePlayer = firstPlayer;
            return;
        }
    }

    currentScore = Number(activePlayer.querySelector('.current-score').textContent);
    currentScore = currentScore + randomNumber;
    activePlayer.querySelector('.current-score').textContent = currentScore;
})


holdBtn.addEventListener('click', function () {

    activePlayer.querySelector('.score').textContent = activePlayer.querySelector('.current-score').textContent;
    if (Number(activePlayer.querySelector('.current-score').textContent < 100)) {

        if (firstPlayer.classList.contains('player--active')) {
            firstPlayer.classList.remove('player--active');
            secondPlayer.classList.add('player--active');
            activePlayer = secondPlayer;
        }
        else {
            firstPlayer.classList.add('player--active');
            secondPlayer.classList.remove('player--active');
            activePlayer = firstPlayer;

        }

    }
    else {


    }

})


newBtn.addEventListener('click', function () {

    firstPlayer.querySelector('.current-score').textContent = '0';
    secondPlayer.querySelector('.current-score').textContent = '0';
    secondPlayer.querySelector('.score').textContent = '0';
    firstPlayer.querySelector('.score').textContent = '0';
    activePlayer = firstPlayer;

})
