// // Generate a random number between min and max
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // Variables
// const minNumber = 1;
// const maxNumber = 10;
// const targetNumber = getRandomNumber(minNumber, maxNumber);
// let attempts = 0;

// // Function to check the player's guess
// function checkGuess() {
//   const guessInput = document.getElementById('guessInput');
//   const message = document.getElementById('message');

//   const guess = parseInt(guessInput.value);

//   if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
//     message.textContent = `Please enter a number between ${minNumber} and ${maxNumber}`;
//     return;
//   }

//   attempts++;

//   if (guess === targetNumber) {
//     message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
//   } else {
//     const hint = guess < targetNumber ? 'higher' : 'lower';
//     message.textContent = `Try again! Guess ${hint}. Attempts: ${attempts}`;
//   }
// }



let arr =[1,2,3,4]

console.log(arr["1"]);