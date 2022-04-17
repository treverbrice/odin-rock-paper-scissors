function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return("rock");
  } else if (choice == 1) {
    return("paper");
  } else {
    return("scissors");
  }
}

function startRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = this.id;
  const result = playRound(computerChoice, playerChoice);
  const resultText = document.querySelector('#roundResults');
  resultText.textContent = result;
  checkWinner();
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      return("You Tied!");
    } else if (playerSelection == "paper") {
      increaseScore('user');
      return("You Win! Paper covers rock");
    } else {
      increaseScore('CPU');
      return("You Lose! Rock crushes scissors");
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      increaseScore('CPU');
      return("You Lose! Paper covers rock");
    } else if (playerSelection == "paper") {
      return("You Tied!");
    } else {
      increaseScore('user');
      return("You Win! Scissors cuts paper");
    }
  } else {
    if (playerSelection == "rock") {
      increaseScore('user');
      return("You Win! Rock crushes scissors");
    } else if (playerSelection == "paper") {
      increaseScore('CPU');
      return("You Lose! Scissors cuts paper");
    } else {
      return("You Tied!");
    }
  }
}

function increaseScore(userScoreToIncrease) {
  if (userScoreToIncrease == 'CPU') {
    cpuScore += 1;
  } else {
    userScore += 1;
  }
  const scoreDisplay = document.querySelector('#score');
  scoreDisplay.textContent = `${userScore}/${cpuScore}`;
}

function checkWinner() {
  let winner;
  if (userScore >= 5) {
    winner = `You Won! The score was ${userScore} to ${cpuScore}`;
  } else if (cpuScore >= 5) {
    winner = `You Lost! The score was ${userScore} to ${cpuScore}`;
  }
  if (winner) {
    const resultText = document.querySelector('#roundResults');
    resultText.textContent = winner;
    userScore = 0;
    cpuScore = 0;
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', startRound);
});

let userScore = 0;
let cpuScore = 0;
