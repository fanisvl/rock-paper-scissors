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

function playerChoiceRestart() {
    getPlayerChoice(prompt("Rock paper or scissors?"));
}

function getPlayerChoice (inputChoice) {
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
        playerChoiceRestart();
    }
}

function oneRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert("It's a tie! You both chose " + playerChoice + ".");
        return "tie";
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") { // Player wins.
        alert("You win! " + playerChoice + " (YOU) " + " beats " + computerChoice + " (COMPUTER).");
        return "playerWin";
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock") { // Player loses.
        alert("You lose! " + computerChoice + " (COMPUTER) " + " beats " + playerChoice + " (YOU).");
        return "computerWin";
    }
    else {
        alert("ERROR ON ROUND FUNCTION.")
    }
}

oneRound(getPlayerChoice(prompt("Rock, paper or scissors?")), getComputerChoice());