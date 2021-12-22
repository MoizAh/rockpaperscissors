let playerScore = 0
let computerScore = 0

const computerPlay = () => {
    randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else if (randomNumber === 3) {
        return 'scissors'
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "Tie game!"
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1
        return "You win! Rock beats scissors!"
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1      
        return "You lose! Paper beats rock!"
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1
        return "You lose! Scissors beats paper!"
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore =+ 1
        return "You win! Paper beats rock"
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1
        return "You lose! Rock beats scissors"
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore += 1
        return "You win! Scissors beats paper!"
    }
}
