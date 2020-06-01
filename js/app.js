// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;

// All UI variables
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign min & max variables
minNum.textContent = min;
maxNum.textContent = max;

// Listen to guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    // Show message
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if won
  if(guess === winningNum) {
    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = 'green';

    // Set message
    setMessage(`${winningNum} is Correct. YOU WIN!`, 'green');

  } else {

  }
});

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  message.style.fontSize = '1.2rem';
  message.style.marginBottom = '1rem';
}
