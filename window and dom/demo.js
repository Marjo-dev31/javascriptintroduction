let inputElement = document.querySelector('input');
let remainingChars = document.getElementById('remaining-chars');

let maxAllowedChars = inputElement.maxLength;

function inputCounter(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
    console.log(remainingCharacters)
}

inputElement.addEventListener('input', inputCounter);