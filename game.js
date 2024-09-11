document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');

    const min = 1;
    const max = 100;
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        if (userGuess === secretNumber) {
            message.textContent = 'Congratulations! You guessed the number!';
            message.style.color = 'green';
        } else if (userGuess < secretNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        }
    });

    resetButton.addEventListener('click', () => {
        secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        guessInput.value = '';
        message.textContent = 'Make a guess!';
        message.style.color = 'black';
    });
});