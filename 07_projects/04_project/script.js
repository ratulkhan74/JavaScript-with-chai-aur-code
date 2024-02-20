let randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector('#guess_number');
let submit = document.querySelector('#submit');
let prevGuess = document.querySelector('.prev_guess');
let remaniningAttempt = document.querySelector('.remanining');
let attemptMessage = document.querySelector('.attempt_message');
let validationMessage = document.querySelector('.input_message');

let startNewGame = document.querySelector('.play_new_game');

let resultWrapper = document.querySelector('.result-wrapper');

let startNewGameButton = document.createElement('p');

let oldGuesses = [];
let numberOfAttempts = 0;

let playGame = true;

let totalNumberOfGuesses = 10;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuessInput(guess)
    })
}

function validateGuessInput(guess) {
    if (isNaN(guess)) {
        validationMessage.innerHTML = "Please give a valid number";
    } else if (guess < 1) {
        validationMessage.innerHTML = "Please enter a number more then 0";
    } else if (guess > 100) {
        validationMessage.innerHTML = "You cannot enter a number more then 100";
    } else {
        oldGuesses.push(guess);
    
    
        if (numberOfAttempts === totalNumberOfGuesses) {
            displayGuess(guess);
            displayMessage(`Game Over | The Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            validateGuessValue(guess);
        }
    }
}

function validateGuessValue(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations | You guessed the right number`);
        endGame();
    } else if (guess < randomNumber || guess > randomNumber) {
        displayMessage(`Opps! You guessed the wrong number | Number was ${randomNumber}`);
    
    
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevGuess.innerHTML += `<span>${guess}</span>`;
    numberOfAttempts++;
    remaniningAttempt.innerHTML = `${totalNumberOfGuesses - numberOfAttempts}`;
    if (numberOfAttempts == totalNumberOfGuesses) {
        userInput.setAttribute('disabled', 'disabled');
        startNewGameButton.innerHTML = `<button class="play_new_game">Start Again</button>`;
        resultWrapper.appendChild(startNewGameButton);
        displayMessage(`Your number of attampt is over please start again`);
        playGame = false;
        newGame();
    }
}

// Displaying all messages
function displayMessage(message) {
    attemptMessage.innerHTML = message; 
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    startNewGameButton.innerHTML = `<button class="play_new_game">Start Again</button>`;
    resultWrapper.appendChild(startNewGameButton);
    displayMessage('Start new game');
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('.play_new_game');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        oldGuesses = [];
        prevGuess.innerHTML = '';
        numberOfAttempts = 0;
        remaniningAttempt.innerHTML = `${totalNumberOfGuesses - numberOfAttempts}`;
        userInput.removeAttribute('disabled');
        resultWrapper.removeChild(startNewGameButton);
        displayMessage('');
        playGame = true;
    })
}
