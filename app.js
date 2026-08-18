/*-------------------------------- Constants --------------------------------*/
let lives = 3;
let timeLeft = 10;
let correctColor = '';
let gameActive = false;
let stage = 0;
let timerInterval;
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const wordElement = document.querySelector('#word');
wordElement.textContent = 'Test Your Focus!';
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
function timer(seconds) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    timerElement.textContent = timeLeft;
    timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            lives--;
            currentLivesElement.textContent = lives;
            if(lives <=0){
                gameOver();
            }
            else{
                messageElement.textContent = 'Time is UP!';
                gameOver();
            }
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
    lives = 3;
    stage = 0;
    gameActive = true;
    startButton.style.display = 'none';
    resetButtonElement.style.display = 'inline';
    nextStage();
}
function resetGame() {
    clearInterval(timerInterval);
    lives = 3;
    stage = 0;
    timeLeft = 10;
    correctColor = '';
    gameActive = false;
    timerElement.textContent = '10';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = '3';
    currentStageDifficulty.textContent = '--';
    wordElement.textContent = 'Start to Play';
    wordElement.style.color = 'black';
    messageElement.textContent = '';
    startButton.style.display = 'inline';
    resetButtonElement.style.display = 'none';
}
function gameOver() {
    clearInterval(timerInterval);
    gameActive = false;
    wordElement.textContent = 'GAME OVER, YOU LOSE!'
    wordElement.style.color = 'black';
    timerElement.textContent = '10';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = '3';
    currentStageDifficulty.textContent = '--';
    messageElement.textContent = '';
    startButton.style.display = 'inline';
    resetButtonElement.style.display = 'none';

}
function winGame() {
    clearInterval(timerInterval);
    gameActive = false;
    wordElement.textContent = 'CONGRATNS, YOU WIN!';
    wordElement.style.color = 'black';
    timerElement.textContent = '10';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = '3';
    currentStageDifficulty.textContent = '--';
    messageElement.textContent = '';
    startButton.style.display = 'inline';
    resetButtonElement.style.display = 'none';

}
function stageDifficulty() {
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
        currentStageDifficulty.textContent = 'Extreme'
    }
    else if (stage === 4) {
        currentStageDifficulty.textContent = 'Impossible'
    }
    currentStageElement.textContent = stage+1;
    currentLivesElement.textContent = lives;
}
function nextStage() {
    
    if (lives <= 0) {
        gameOver();
        
    }
    else if (stage >= 5) {
        winGame();
        
    }
    else{
    stageDifficulty();
    randomColorWord();
    startTimer();
    }
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
    if(gameActive === false){
        return;
    }
    const clickedColor = event.target.id;
    if (clickedColor === correctColor) {
        stage++;
        clearInterval(timerInterval);
        if (stage >= 5) {
            winGame();
        } else {
            messageElement.textContent = 'Correct!';
            nextStage();
        }
    } else {
        lives--;
        currentLivesElement.textContent = lives;
        messageElement.textContent = 'Wrong!';
        nextStage();
    }
}
/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);
resetButtonElement.addEventListener('click', resetGame);
for (let oneColorButton of colorButtons) {
    oneColorButton.addEventListener('click', handleColorClick)
}