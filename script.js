function getComputerChoice() {
  let selection = Math.floor(Math.random() * 3);

  if (selection == 0) {
    return("rock");
  } else if (selection == 1) {
    return("paper");
  } else {
    return("scissors");
  }
}

//gets and validates users choice
function getUserChoice() {
  let choice = prompt("Rock, Paper, or Scissors?: ").toLowerCase();

  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(choice)) {
    return(getUserChoice());
  }
  return(choice);
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      return("You Tied!");
    } else if (playerSelection == "paper") {
      return("You Win! Paper covers rock");
    } else {
      return("You Lose! Rock crushes scissors");
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      return("You Lose! Paper covers rock");
    } else if (playerSelection == "paper") {
      return("You Tied!");
    } else {
      return("You Win! Scissors cuts paper");
    }
  } else {
    if (playerSelection == "rock") {
      return("You Win! Rock crushes scissors");
    } else if (playerSelection == "paper") {
      return("You Lose! Scissors cuts paper");
    } else {
      return("You Tied!");
    }
  }
}

function playGame() {
  console.log("Welcome to Rock, Paper, Scissors!");
  for (let i = 0; i < 5; i++) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(computerChoice, userChoice));
  }
}

playGame();