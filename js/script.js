const choices = ["rock", "paper", "scissors"];
const whoWins = { rock: "paper", paper: "scissors", scissors: "rock" };
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
let playerSelection = prompt("Choose: rock, paper or scissors");

function computerPlay() {
  //result can be: Rock, Paper or Scissors
  return choices[Math.floor(Math.random() * choices.length)]; //to get a whole number between the choices sizes
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const ifWin = (winner, loser) =>
    `You Win! ${capitalize(winner)} beats ${capitalize(loser)}`;

  const ifLose = (winner, loser) =>
    `You Lose! ${capitalize(winner)} beats ${capitalize(loser)}`;

  if (playerSelection === computerSelection) {
    return "Oh! It's a tie!";
  } else if (playerSelection === whoWins[computerSelection]) {
    return ifWin(playerSelection, computerSelection);
  } else {
    return ifLose(computerSelection, playerSelection);
  }
}
//console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 1; i <= 5; i++) {
    //const playerSelection = "Paper";
    console.log("player plays: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("computer plays: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection), i);
  }
}

game();
