let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getEmoji(choice) {
    const emojis = {
        'rock': '🪨',
        'paper': '📰',
        'scissors': '✂️'
    };
    return emojis[choice];
}

function play(playerChoice) {
    const computerChoice = getComputerChoice(); // returns the random choice

    // Update displayed moves
    document.getElementById('player-move').textContent = getEmoji(playerChoice);
    document.getElementById('computer-move').textContent = getEmoji(computerChoice);

    // Determine winner
    let result = '';
    const resultDiv = document.getElementById('result');
    resultDiv.className = 'result';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        resultDiv.classList.add('tie');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
        resultDiv.classList.add('win');
    } else {
        result = 'You lose!';
        computerScore++;
        resultDiv.classList.add('lose');
    }

    // Update scores and result
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    resultDiv.textContent = result;
}