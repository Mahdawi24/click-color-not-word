
/*-------------------------------- Constants --------------------------------*/
let score = 0;
let lives = 3;
let timeLeft = 30;
let correctColor = '';
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const wordElement = document.querySelector('#word');
const colorButtons = document.querySelectorAll('.color-btn');
const messageElement = document.querySelector('#message');
const startButton = document.querySelector('#start-btn');

/*-------------------------------- Functions --------------------------------*/
function startGame() {
    score = 0;
    lives = 3;
    timeLeft = 30;
    gameActive = true;
    
    
}
function randomColorWord(){
const colors = ['red', 'blue', 'green', 'yellow'];
const randomIndex = Math.floor(Math.random() * colors.length);
//generate the random number floor round the number to greatest decimal intger number
const randomColor = colors[randomIndex];
//value in the colors array
console.log(randomColor)
}
function gameStages(){
    
}
/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);


