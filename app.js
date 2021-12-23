// Referencing Elements
let playerScore = 0;
let pScore = document.querySelector(".playerScore");
pScore.textContent = "0";
let computerScore = 0;
let cScore = document.querySelector(".computerScore");
cScore.textContent = "0";

let commentary = document.querySelector(".commentary");

let reset = document.querySelector(".reset");

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

// Randomizing computer choice
const computerPlay = () => {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
};

// Play one round
const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    playerScore++;
    pScore.textContent = playerScore;
    computerScore++;
    cScore.textContent = computerScore;
    commentary.textContent = "It's a draw! You both get a point!";
    return "Tie game!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    pScore.textContent = playerScore;
    commentary.textContent =
      "You win! You chose rock. Your opponent chose scissors!";
    return "You win! Rock beats scissors!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    cScore.textContent = computerScore;
    commentary.textContent =
      "You lose! You chose rock. Your opponent chose paper!";
    return "You lose! Paper beats rock!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    cScore.textContent = computerScore;
    commentary.textContent =
      "You lose! You chose paper. Your opponent chose scissors!";
    return "You lose! Scissors beats paper!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    pScore.textContent = playerScore;
    commentary.textContent =
      "You win! You chose paper. Your opponent chose rock!";
    return "You win! Paper beats rock";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    cScore.textContent = computerScore;
    commentary.textContent =
      "You lose! You chose scissors. Your opponent chose rock!";
    return "You lose! Rock beats scissors";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    pScore.textContent = playerScore;
    commentary.textContent =
      "You win! You chose scissors. Your opponent chose paper!";
    return "You win! Scissors beats paper!";
  }
};

// Check if either the player or computer has reached 5 points
const winner = () => {
  if (playerScore == 5 || computerScore == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    commentary.textContent = "Game Over!";
  }
};

// Button to reset the game
const resetGame = () => {
  reset.addEventListener("click", () => {
    window.location.reload();
  });
};

// Game continues until someone reaches 5 points or the game is reset
const playGame = () => {
    resetGame();
    rock.addEventListener("click", () => {
      playRound("rock", computerPlay());
      winner();
    });
    paper.addEventListener("click", () => {
      playRound("paper", computerPlay());
      winner();
    });
    scissors.addEventListener("click", () => {
      playRound("scissors", computerPlay());
      winner();
    });
  };

playGame();
