const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  let choice = prompt("Enter Rock, Paper or Scissors to play").toLowerCase();

  return choice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "rock") {
      return "Both are Rock, Its a tie";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return "Paper beats Rock, Computer wins";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return "Rock crushes Scissors, Player wins";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      return "Both are paper, Its a tie";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return "Paper beats Rock, Player wins";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return "Scissors cut papers, Computer wins ";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      return "Both are scissors, Its a tie";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return "Rock crushes Scissors, Computer wins";
    } else if (humanChoice === "scissors" && computerChoice === "papers") {
      humanScore++;
      return "Scissors cut papers, Player wins ";
    }
  };

  for (let i = 1; i <= 5; i++) {
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log(
      `Player Score: ${humanScore}, Computer Score: ${computerScore}`
    );
  }
};

playGame();
