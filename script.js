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
        console.log("ERROR on oneRound");
    }
}   

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    while (playerPoints < 3 && computerPoints < 3) {
        let result = oneRound(getPlayerChoice(), getComputerChoice());
         if (result == "playerWin") {
            playerPoints++;
            console.log(playerPoints + " PLAYER " + computerPoints + " COMPUTER");
         }
         else if (result == "computerWin") {
            computerPoints++;
            console.log(playerPoints + " PLAYER " + computerPoints + " COMPUTER");
         }
         else if (result == "tie") {
            console.log(playerPoints + " PLAYER " + computerPoints + " COMPUTER");
         }
         else {
            console.log("ERROR ON WHILE");
         }
    }

    if (playerPoints > computerPoints) {
        alert("Game Over! You WON! " + playerPoints + " (YOU) - " + computerPoints + " (COMPUTER)" );
    }
    else if (playerPoints < computerPoints) {
        alert("Game Over! You LOST! " + playerPoints + " (YOU) - " + computerPoints + " (COMPUTER)");
    }
    else {
        console.log("ERROR ON GAME OVER");
    }
}

game();