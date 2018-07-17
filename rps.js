// Computer generates random of Rock, Paper or Scissors //
function computerPlay () {
  random = Math.floor((Math.random()) * 3);
  if (random === 0) {
    return ('rock');
  } else if (random === 1) {
    return ('paper');
  } else {
    return ('scissors');
  }
}
// Play single round between player and computer //
function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose. Paper beats rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose. Scissors beats paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win. Scissors beats paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose. Rock beats scissors';
  } else {
    return 'Tie!'
  }
}

function game () {
  let result = playRound(playerSelection, computerSelection);
  // search returns positive number if word is found, negative if its not //
  let playerScore = 0;
  let computerScore = 0;
  if (result.search('win') === 4) {
    playerScore++;
    console.log(playerScore);
  } else if (result.search('win') === -1) {
    computerScore++;
    console.log(computerScore);
  }

  if (playerScore === 5) {
    console.log('Player wins out of 5 rounds!')
  }
  if (computerScore === 5) {
    console.log('Computer wins out of 5 rounds. Better luck next time!')
  }



// if (playerSelection > computerSelection) {
//     playerScore++
//     console.log(playerScore);
//   } else {
//     computerScore++
//     console.log(computerScore);
//   }
//   if (computerScore === 5) {
//     return "Computer wins out of 5 rounds!"
//   }
//   if (playerScore === 5) {
//       return "Player wins out of 5 rounds!"
//   }
}

playerSelection = prompt(`Please enter "Rock", "Paper" or "Scissors"`);
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(game());
