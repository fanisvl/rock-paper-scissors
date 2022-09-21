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

function getPlayerChoice (choice) {
    choice.toLowerCase();
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
        
    }
}

function oneRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert("It's a tie! You both chose " + playerChoice + ".");
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") { // Player wins.
        alert("You win! " + playerChoice + " beats " + computerChoice + ".");
        return "playerWin";
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock") { // Player loses.
        alert("You lose! " + computerChoice + " beats " + playerChoice + ".");
        return "computerWin";
    }
    else {
        console.log("ERROR on ROUND");
    }
}


// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     while (playerPoints < 3 && computerPoints < 3) {
//         if (oneRound(getPlayerChoice(prompt("Rock paper or scissors?")), getComputerChoice()) == "playerWin") {
//             playerPoints++;
//         }
//         else if (oneRound(getPlayerChoice(prompt("Rock paper or scissors?")), getComputerChoice()) == "computerWin") {
//             computerPoints++;
//         }
//         else if (oneRound(getPlayerChoice(prompt("Rock paper or scissors?")), getComputerChoice()) == "tie") {
//             //no one gets points
//         }
//         else {
//             console.log("WHILE ERROR");
//         }
//     }
//     if (playerPoints > computerPoints) {
//         alert("Game Over! You WON!");
//     }
//     else if (playerPoints < computerPoints) {
//         alert("Game Over! You LOST!");
//     }
//     else {
//         console.log("ERROR ON GAME OVER");
//     }
// }

// game();