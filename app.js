let userScore = 0;
let computerScore = 0;
let result = document.getElementById('result');
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const roundCounter_p = document.getElementById('round-counter');
const scoreBoard_div = document.querySelector('.score-board');
let result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const button = document.getElementById('button');


button.addEventListener('click', function (event) {
  if (event) {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    roundCounter_p.innerHTML = '';
    result.innerHTML = 'Who will win?';
  }
})

function getComputerChoice () {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function win (userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!';
  if (userScore === 10) {
    roundCounter_p.innerHTML = 'User wins the match!';
  }
}

function lose (userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose.';
  if (computerScore === 10) {
    roundCounter_p.innerHTML = 'Computer wins the match!';
  }
}

function tie (userChoice, computerChoice) {
  result_p.innerHTML = computerChoice + ' ties ' + userChoice + ". It's a draw!";
}

function game (userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice, computerChoice);
      break;
    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'ScissorsScissors':
    case 'PaperPaper':
      tie(userChoice, computerChoice);
      break;
  }
}

function main () {
  rock_div.addEventListener('click', function () {
    game('Rock');
  })
  paper_div.addEventListener('click', function () {
    game('Paper');
  })
  scissors_div.addEventListener('click', function () {
    game('Scissors')
  })
}

main();
