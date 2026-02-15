let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.random();
  let compChoice;
  if (randomNum <= 0.33) {
    compChoice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
  } else {
    compChoice = "paper";
    compChoice = "scissors";
  }
  return compChoice;
}

function getHumanChoice() {
  let userChoice = prompt("Pick your choice: Rock, Paper, or Scissors");
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    ++humanScore;
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    ++computerScore;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
  } else {
    console.log(`Tie! You both choose ${computerChoice}`);
  }
}
