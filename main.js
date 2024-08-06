let result = "";
let playerScore = 0;
let computerScore = 0;
let score = playerScore + computerScore;

function play(i) {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  const computerChoice = choices[index];
  const humanChoice = choices[i];

  if (humanChoice === "rock" && computerChoice === "rock") {
    result = "Both are Rock, Its a tie";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    result = "Paper beats Rock, Computer wins";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    result = "Rock crushes Scissors, Player wins";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result = "Both are paper, Its a tie";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    result = "Paper beats Rock, Player wins";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    result = "Scissors cut papers, Computer wins ";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    result = "Both are scissors, Its a tie";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    result = "Rock crushes Scissors, Computer wins";
  } else if (humanChoice === "scissors" && computerChoice === "papers") {
    playerScore++;
    result = "Scissors cut papers, Player wins ";
  }

  if (playerScore + computerScore === 6) {
    // document.querySelector(".msg #text").innerHTML = result;
    // document.querySelector(".msg #text").style.display = "flex";
    playerScore = 0;
    computerScore = 0;
    if (playerScore > computerScore) alert("Player Wins");
    else alert("Computer Wins");

    // document.querySelector(".msg").classList.add("");
  }

  document.querySelector("#playerChoice").innerText = humanChoice;
  document.querySelector("#computerChoice").innerText = computerChoice;

  document.querySelector("#player").innerText = playerScore;
  document.querySelector("#pc").innerText = computerScore;
  document.querySelector("#result").innerText = ` ${result}`;
}
