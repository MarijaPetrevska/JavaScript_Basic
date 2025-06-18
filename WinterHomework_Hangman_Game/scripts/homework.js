// WINTER HOMEWORK - HANGMAN GAME
// VANILLA JAVASCRIPT HANGMAN GAME

// ---------------------------------------
// VARIABLES
// ---------------------------------------

// List of words and their clues for the game
const wordClues = {
  'guitar': 'A musical instrument with six strings.',
  'chocolate': 'A sweet treat made from cocoa beans.',
  'kangaroo': 'A large marsupial native to Australia.',
  'mountain': 'A large, steep hill of rock or earth.',
  'apple': 'A fruit that is typically red, green, or yellow.',
  'book': 'A collection of written or printed pages bound together.',
  'elephant': 'A large animal with a trunk, found in Africa and Asia.',
  'journey': 'The act of traveling from one place to another.',
  'adventure': 'An unusual or exciting experience.',
  'garden': 'A plot of land used for growing flowers or vegetables.'
};

let selectedWord = ''; // The current word to be guessed
let guessedLetters = []; // Array to store the letters guessed by the user
let lives = 10; // Number of lives the player has
let hintUsed = false; // Flag to track if the hint has been used
let canvas = document.getElementById('hangman-canvas'); // Hangman canvas element
let gameCanvasContext = canvas.getContext('2d'); // Context for drawing on the canvas

// ---------------------------------------
// FUNCTIONS
// ---------------------------------------

// Select a random word from the list
function chooseWord() {
  let wordList = [];
  for (let word in wordClues) {
    if (wordClues.hasOwnProperty(word)) {  // Make sure it's not inherited
        wordList.push(word);
    }
  }
  const randomIndex = Math.floor(Math.random() * wordList.length);
  selectedWord = wordList[randomIndex];
  displayWord();
  document.getElementById('clue').textContent = ''; // Clear previous clue
  clearCanvas();
}

// Display the word with underscores for unguessed letters
function displayWord() {
  let display = '';
  for (let letter of selectedWord) {
      if (guessedLetters.includes(letter)) {
          display = display + letter + ' ';
      } else {
          display = display + '_ ';
      }
  }
  document.getElementById('word-display').textContent = display.trim();
}

// Handle letter button click
function handleLetterClick(event) {
  const letter = event.target.dataset.letter;

  if (guessedLetters.includes(letter)) {
      return; // Already guessed this letter
  }

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
      displayWord();
      checkWin();
  } else {
      lives--;
      document.getElementById('lives').textContent = `Lives Remaining: ${lives}`;
      drawHangman();
      checkGameOver();
  }

  event.target.disabled = true; // Disable the button after it's clicked
}

// Check if the player has won
function checkWin() {
  if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
      document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
      disableAllButtons();
  }
}

// Check if the game is over (no lives left)
function checkGameOver() {
  if (lives === 0) {
      document.getElementById('message').textContent = `Game Over! The word was: ${selectedWord}`;
      disableAllButtons();
  }
}

// Disable all letter buttons when the game ends
function disableAllButtons() {
  const buttons = document.querySelectorAll('.letter-btn');
  for (let button of buttons) {
    button.disabled = true;
  }
}

// Enable all letter buttons at the start of the game or after game over
function enableAllButtons() {
  const buttons = document.querySelectorAll('.letter-btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;  
  }
}

// Show a hint by revealing a clue for the word
function giveHint() {
  if (hintUsed) {
      document.getElementById('message').textContent = 'You already used the hint!';
      return;
  }

  // Get the clue for the selected word and display it
  document.getElementById('clue').textContent = `Clue: ${wordClues[selectedWord]}`;
  hintUsed = true;
}

// Reset the game for a new round
function playAgain() {
  guessedLetters = [];
  lives = 10;
  hintUsed = false;
  document.getElementById('lives').textContent = `Lives Remaining: ${lives}`;
  document.getElementById('message').textContent = '';
  chooseWord();
  enableAllButtons();
  clearCanvas();
}

// Draw the hangman figure based on the number of remaining lives
function drawHangman() {
  switch (lives) {
      case 9: // Draw head
      gameCanvasContext.beginPath();
      gameCanvasContext.arc(75, 30, 15, 0, Math.PI * 2, true);
      gameCanvasContext.stroke();
          break;
      case 8: // Draw body
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 45);
      gameCanvasContext.lineTo(75, 80);
      gameCanvasContext.stroke();
          break;
      case 7: // Draw left arm
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 55);
      gameCanvasContext.lineTo(60, 70);
      gameCanvasContext.stroke();
          break;
      case 6: // Draw right arm
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 55);
      gameCanvasContext.lineTo(90, 70);
      gameCanvasContext.stroke();
          break;
      case 5: // Draw left leg
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 80);
      gameCanvasContext.lineTo(60, 100);
      gameCanvasContext.stroke();
          break;
      case 4: // Draw right leg
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 80);
      gameCanvasContext.lineTo(90, 100);
      gameCanvasContext.stroke();
          break;
      case 3: // Draw left foot
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(60, 100);
      gameCanvasContext.lineTo(55, 110);
      gameCanvasContext.stroke();
          break;
      case 2: // Draw right foot
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(90, 100);
      gameCanvasContext.lineTo(95, 110);
      gameCanvasContext.stroke();
          break;
      case 1: // Draw rope
      gameCanvasContext.beginPath();
      gameCanvasContext.moveTo(75, 15);
      gameCanvasContext.lineTo(75, 30);
      gameCanvasContext.stroke();
          break;
      default:
          break;
  }
}

// Clear the hangman canvas
function clearCanvas() {
  gameCanvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

// Initialize the game
function initGame() {
  guessedLetters = []; // Reset guessed letters
  lives = 10; // Reset lives
  hintUsed = false; // Reset hint usage
  document.getElementById('lives').textContent = `Lives Remaining: ${lives}`; // Display initial lives
  document.getElementById('message').textContent = ''; // Clear message display
  chooseWord(); // Choose a word at the start of the game
  enableAllButtons(); // Enable letter buttons
  clearCanvas(); // Clear canvas at the start
}

// ---------------------------------------
// EVENTS
// ---------------------------------------

// Add event listeners to letter buttons
const buttons = document.querySelectorAll('.letter-btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleLetterClick); // Attach click event to each letter button
}

// Add event listener for hint button
document.getElementById('hint-btn').addEventListener('click', giveHint);

// Add event listener for play again button
document.getElementById('play-again-btn').addEventListener('click', playAgain);

// Start a new game when the page loads
initGame();

