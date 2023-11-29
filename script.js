function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();

  // Check for tie
  if (playerSelection === computerSelection.toLowerCase()) {
    return "tie";
  }

  // Determine the winner
  if (
    (playerSelection === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result === "player") {
      playerScore++;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    } else if (result === "computer") {
      computerScore++;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log("It's a tie! Play again.");
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();
