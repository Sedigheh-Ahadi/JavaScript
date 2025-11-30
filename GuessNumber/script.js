'use strict';

let magicNumber = Math.floor(Math.random()*20) + 1;
let highScore = Number(document.querySelector('.highscore').textContent);
let counter = Number(document.querySelector('.score').textContent);
document.querySelector('.number').textContent=magicNumber;
let number=0;
document.querySelector('.check').addEventListener('click', function () {

     number = Number(document.querySelector('.guess').value); 
     highScore = Number(document.querySelector('.highscore').textContent);
        counter--;
    if (counter > 0) {
        if (number) {

            if (number > magicNumber)
                document.querySelector('.message').textContent = " too high";
            else if (number < magicNumber)
                document.querySelector('.message').textContent ="too low";
            else if (number === magicNumber) {
                document.querySelector('.message').textContent = "nice try";
                document.querySelector('.check').disabled = true;
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').textContent = magicNumber;
                if(highScore< counter)
                    document.querySelector('.highscore').textContent= counter;

            }
        }
        else {
            document.querySelector('.message').textContent = 'Enter valid number';
        }
    }
    else {
        document.querySelector('.message').textContent = "Game over!!!";
        document.querySelector('.check').disabled = true;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').textContent = magicNumber;

    }

document.querySelector('.score').textContent=counter;

})
document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.message').textContent = "start scoring";
    counter = 20;
    document.querySelector('.score').textContent = counter;
    magicNumber =Math.floor(Math.random()*20) + 1;
    document.querySelector('.number').textContent=magicNumber;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.check').disabled=false;
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='';


})



