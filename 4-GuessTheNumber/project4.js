let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesseslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
 let numguess = 1;

let playGame = true;

if(playGame) { 
  submit.addEventListener('click' , function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a number more than 1')
  }
  else if(guess > 100){
    alert('please enter a number less than 100')
  }
  else{
    prevguess.push(guess);
    if(numguess === 11){
      displayGuess(guess);
        displayMessage(`game is over. random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guess right number `);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`you guessed to low number`);
  }
  else if(guess > randomNumber){
    displayMessage(`you guessed to high number`);
  }
}

function displayGuess(guess){
  userinput.value = '';
  guesseslot.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${11-numguess}` ;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
  
}

function endGame(){
  userinput.value = '';
  userinput.setAttribute('disabled' , '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

  function newGame(){  
    const newgamebutton = document.querySelector('#newGame');
    newgamebutton.addEventListener('click' , function(e){
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevguess = [];
      numguess = 1;
      guesseslot.innerHTML = '';
      remaining.innerHTML = `${10-numguess+1}`;
      userinput.removeAttribute('disabled') ;
      startover.removeChild(p);
      playGame = true;
    });
  }
