function getComputerChoice() {
  const randomNum = Math.random();
  let compChoice;
  if (randomNum <= 0.33) {
    compChoice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
}
