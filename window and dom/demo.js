const inputElement = document.querySelector('input');
const remainingChars = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function inputCounter(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
    console.log(remainingCharacters)
}

inputElement.addEventListener('input', inputCounter);