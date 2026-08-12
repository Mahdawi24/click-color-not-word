/*-------------------------------- Constants --------------------------------*/
let score = 0;
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
/*-------------------------------- Functions --------------------------------*/
function startGame() {
    score = 0;
    lives = 3;
    timeLeft = 10;
    gameActive = true;
    messageElement.textContent = '';
    startButton.style.display = 'none';
    resetButtonElement.style.display = 'inline';
    randomColorWord();
    
}
function winGame(){
    lives = 3;
    timeLeft = 10;
    gameActive = false;
    messageElement.textContent = '';
    currentStageElement.textContent = '--';
    currentLivesElement.textContent = 3;
}
function nextStage(){
   stage++;
   if(stage === 1){
    currentStageDifficulty.textContent = 'Easy'
   }
   else if(stage === 2){
    currentStageDifficulty.textContent = 'Mediam'
   }
   else if(stage === 3){
    currentStageDifficulty.textContent = 'Hard'
   }
   else if(stage === 4){
    currentStageDifficulty.textContent = 'Extreme'
   }
   else if(stage === 5){
    currentStageDifficulty.textContent = 'Impossible'
   }
   if(stage > 5){
    winGame();
    return;
   }
   if(lives === 0){
    wordElement.textContent = 'You Lose'
    return;
   }
   timeLeft = stageTimes[stage - 1]
   currentStageElement.textContent = stage;
   currentLivesElement.textContent = lives;

}
function randomColorWord(){
 if (gameActive === true) {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const word = colors[Math.floor(Math.random() * colors.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        correctColor = color;
        wordElement.textContent = word.toUpperCase();
        wordElement.style.color = color;
    }
    else{
        wordElement.textContent = 'Start the Game!';
    }
}
function handleColorClick(event){
    if(gameActive === false){
        return
    }
    const clickedColor = event.target.id;

    if(clickedColor === correctColor){
        console.log('correct')
    }
    else{
        lives--;
        console.log('wrong!')
    }
}
/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);
for(let oneColorButton of colorButtons){
    oneColorButton.addEventListener('click',handleColorClick)
    oneColorButton.addEventListener('click', randomColorWord)
    oneColorButton.addEventListener('click',nextStage)
}