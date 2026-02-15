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

console.log(getHumanChoice());
