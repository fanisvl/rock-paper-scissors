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
    if (playerPoints < 3 && computerPoints < 3) {
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
    else {
        resultDiv.textContent = "Play Again!";
    }
}   

function game() {
        rockBtn.addEventListener('click', () => {
            result = oneRound("Rock", getComputerChoice())
            checkScore();
        });
        paperBtn.addEventListener('click', () => {
            result = oneRound("Paper", getComputerChoice())
            checkScore();
        });
        scissorsBtn.addEventListener('click', () => {
            result = oneRound("Scissors", getComputerChoice())
            checkScore();
        });
}


function checkScore() {
    if (playerPoints < 3 && computerPoints < 3) {
        if (result == "playerWin") {
           playerPoints++;
           scoreDiv.textContent = playerPoints + " (You) -  " + computerPoints + " (Computer)";
        }
        else if (result == "computerWin") {
           computerPoints++;
           scoreDiv.textContent = playerPoints + " (You) -  " + computerPoints + " (Computer)";
        }
        else if (result == "tie") {
            scoreDiv.textContent = playerPoints + " (You) -  " + computerPoints + " (Computer)";
        }
   }
    if (playerPoints == 3) {
        scoreDiv.textContent = "Game Over! You WON! " + playerPoints + " (YOU) - " + computerPoints + " (COMPUTER)";
        container.appendChild(resetBtn);
        resetBtn.textContent = "Play again!"
        resetBtn.addEventListener('click', reset);

        }
    else if (computerPoints == 3) {
        scoreDiv.textContent = "Game Over! You LOST! " + playerPoints + " (YOU) - " + computerPoints + " (COMPUTER)";
        container.appendChild(resetBtn);
        resetBtn.textContent = "Play again!"
        resetBtn.addEventListener('click', reset);
    }
}

function reset() {
    playerPoints = 0;
    computerPoints = 0;
    scoreDiv.textContent = playerPoints + " (You) -  " + computerPoints + " (Computer)";
    resultDiv.textContent = "Rock Paper Scissors";
    container.removeChild(resetBtn);
}

let playerPoints = 0;
let computerPoints = 0;  
let result;
let container = document.querySelector('#container');
let resultDiv = document.querySelector('#result');
let scoreDiv = document.querySelector('#score');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let resetBtn = document.createElement('button');
resetBtn.classList.add('reset-button');

game();