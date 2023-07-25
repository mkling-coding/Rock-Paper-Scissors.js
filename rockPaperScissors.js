// 1. Get the user's choice
// 2. Get the computer's choice
// 3. Compare two choices and determine a winner
// 4. Start the program

// Allows program to get user input
const prompt = require("prompt-sync")();

// Initialize cpu choice variable
let cpuChoice;

// Create random number for cpu choice
let randomNumber = Math.floor(Math.random() * 3);

// Get user choice
let userChoice = prompt('Enter rock, paper, or scissors: ').toLowerCase()

// Turn random number into rock, paper, or scissors
if (randomNumber == 0) {
    cpuChoice = 'rock';
} else if (randomNumber == 1) {
    cpuChoice = 'paper';
} else {
    cpuChoice = 'scissors';
};

// Start game with user choice
const rockPaperScissors = userChoice => {
    if (userChoice === 'rock' && cpuChoice === 'paper') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You lose!`);
    } else if (userChoice === 'rock' && cpuChoice === 'scissors') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You win!`);
    } else if (userChoice === 'paper' && cpuChoice === 'rock') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You win!`);
    } else if (userChoice === 'paper' && cpuChoice === 'scissors') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You lose!`);
    } else if (userChoice === 'scissors' && cpuChoice === 'rock') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You lose!`);
    } else if (userChoice === 'scissors' && cpuChoice === 'paper') {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. You win!`);
    } else {
        console.log(`You chose ${userChoice} and your opponent chose ${cpuChoice}. It's a tie!`);
}
}

rockPaperScissors(userChoice);