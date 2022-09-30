function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // randomNumber is 0, 1 or 2;
    if (randomNumber == 0) {
        return "Rock";
    }
    else if (randomNumber == 1) {
        return "Paper";
    }
    else if (randomNumber == 2) {
        return "Scissors";   
    }
}

function getPlayerChoice () {
    let inputChoice = prompt("Rock paper or scissors?");
    let choice = inputChoice.toLowerCase();
    if (choice == "rock") {
        return "Rock";
    }
    else if (choice == "paper") {
        return "Paper";
    }
    else if (choice == "scissors") {
        return "Scissors";
    }
    else {
        alert("Error! Please enter rock paper or scissors.")
        return getPlayerChoice(); // Solution to Error (1)
    }
}

function oneRound (playerChoice, computerChoice) { 
    if (playerChoice == computerChoice) {
        resultDiv.textContent = "It's a tie! You both chose " + playerChoice + ".";
        return "tie";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") { // Player wins.
        resultDiv.textContent = "You win! " + playerChoice + " (YOU) " + " beats " + computerChoice + " (COMPUTER).";
        return "playerWin";
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock") { // Player loses.
        resultDiv.textContent = "You lose! " + computerChoice + " (COMPUTER) " + " beats " + playerChoice + " (YOU).";
        return "computerWin";
    }
    else {
        console.log("ERROR on oneRound");
    }
}   

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let resultDiv = document.querySelector('#result');

rockBtn.addEventListener('click', () => oneRound("Rock", getComputerChoice()));

paperBtn.addEventListener('click', () => oneRound("Paper", getComputerChoice()));

scissorsBtn.addEventListener('click', () => oneRound("Scissors", getComputerChoice()));