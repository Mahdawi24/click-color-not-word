/*-------------------------------- Constants --------------------------------*/
let score = 0;
let lives = 3;
let timeLeft = 10;
let correctColor = '';
let gameActive = false;
let stage = 1;
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
function nextStage(){
   
}
function randomColorWord(){
 if (gameActive === true) {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const word = colors[Math.floor(Math.random() * colors.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        correctColor = color;
        wordElement.textContent = word.toUpperCase();
        wordElement.style.color = color;

        console.log('word:', word, '| shown in:', color);
    }
    else{
        wordElement.textContent = 'Start the Game!';
        console.log(wordElement);
        
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
        console.log('wrong!')
    }
}
/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);
for(let oneColorButton of colorButtons){
    oneColorButton.addEventListener('click',handleColorClick)
    oneColorButton.addEventListener('click', randomColorWord)
}