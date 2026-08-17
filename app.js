/*-------------------------------- Constants --------------------------------*/
let lives = 3;
let timeLeft = 10;
let correctColor = '';
let gameActive = false;
let stage = 0;
const stageTimes = [10, 8, 6, 4, 3];
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const wordElement = document.querySelector('#word');
wordElement.textContent = ' ';
const colorButtons = document.querySelectorAll('.color-btn');
const messageElement = document.querySelector('#message');
const startButton = document.querySelector('#start-btn');
const resetButtonElement = document.querySelector('#reset-btn')
resetButtonElement.style.display = 'none';
const currentStageElement = document.querySelector('#current-stage')
const currentLivesElement = document.querySelector('#current-lives')
const currentStageDifficulty = document.querySelector('#current-difficulty')
const timerElement = document.querySelector('#timer')
/*-------------------------------- Functions --------------------------------*/
function timer(event) {
    timeLeft = event;
    timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            console.log('You Looosse')
            clearInterval(timerInterval);
        }
    }, 1000);
}
function startTimer() {
    if (stage === 0) {
        timer(10);
    }
    else if (stage === 1) {
        timer(8);
    }
    else if (stage === 2) {
        timer(6);
    }
    else if (stage === 3) {
        timer(4);
    }
    else if (stage === 4) {
        timer(2);
    }
}
function startGame() {
    startTimer();
    lives = 3;
    timeLeft = 10;
    gameActive = true;
    messageElement.textContent = '';
    startButton.style.display = 'none';
    resetButtonElement.style.display = 'inline';
    randomColorWord();

}
function gameOver() {
    gameActive = false;
    wordElement.textContent = 'GAME OVER, YOU LOSE!'
    wordElement.style.color = 'black';
    timerElement.textContent = '10';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = '3';
    currentStageDifficulty.textContent = '--';

}
function winGame() {
    gameActive = false;
    wordElement.textContent = 'CONGRATNS, YOU WIN!';
    wordElement.style.color = 'black';
    timerElement.textContent = '10';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = '3';
    currentStageDifficulty.textContent = '--';

}
function stageDifficulty(){
    if (stage === 0) {
        currentStageDifficulty.textContent = 'Easy'
    }
    else if (stage === 1) {
        currentStageDifficulty.textContent = 'Mediam'
    }
    else if (stage === 2) {
        currentStageDifficulty.textContent = 'Hard'
    }
    else if (stage === 3) {
        currentStageDiff3iculty.textContent = 'Extreme'
    }
    else if (stage === 4) {
        currentStageDifficulty.textContent = 'Impossible'
    }
    currentStageElement.textContent = stage + 1;
    currentLivesElement.textContent = lives;
}
function nextStage() {
    
}
function randomColorWord() {
    if (gameActive === true) {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const word = colors[Math.floor(Math.random() * colors.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        correctColor = color;
        wordElement.textContent = word.toUpperCase();
        wordElement.style.color = color;
    }
    else {
        wordElement.textContent = 'Start the Game!';
    }
}
function handleColorClick(event) {
    if (gameActive === false) {
        return
    }
    const clickedColor = event.target.id;

    if (clickedColor === correctColor) {
        console.log('correct')
    }
    else {
        lives--;
        console.log('wrong!')
    }
}
/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);
for (let oneColorButton of colorButtons) {
    oneColorButton.addEventListener('click', handleColorClick)
    oneColorButton.addEventListener('click', randomColorWord)
    oneColorButton.addEventListener('click', nextStage)
}