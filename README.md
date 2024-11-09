# Rock Paper Scissors Game 🪨📰✂️

A simple and interactive Rock Paper Scissors game implementation in JavaScript. Play against the computer and keep track of your scores!

## Features

- Real-time gameplay against a computer opponent
- Visual emoji representations for moves
- Score tracking system
- Dynamic result display with visual feedback
- Clean and intuitive interface

## How to Play

1. Click on your choice of move (Rock, Paper, or Scissors)
2. The computer will randomly select its move
3. Both moves will be displayed with emojis
4. The winner will be determined based on traditional Rock Paper Scissors rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
5. Scores are automatically updated after each round

## Game Rules

- Rock (🪨) crushes Scissors
- Paper (📰) covers Rock
- Scissors (✂️) cuts Paper
- If both players choose the same move, it's a tie

## Technical Implementation

The game is implemented using:
- HTML for structure
- JavaScript for game logic
- CSS for styling (not shown in current code)

Key JavaScript functions:
- `getComputerChoice()`: Randomly selects the computer's move
- `getEmoji()`: Converts move choices to emoji representations
- `play()`: Main game logic that:
  - Processes player and computer moves
  - Determines the winner
  - Updates the display and scores
  - Provides visual feedback

## Setup

1. Clone this repository
2. Open the HTML file in a web browser
3. Start playing!

## Dependencies

No external dependencies required. The game runs on vanilla JavaScript.

