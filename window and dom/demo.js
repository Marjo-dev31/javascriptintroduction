const inputElement = document.querySelector('input');
const remainingChars = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function inputCounter(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
    console.log(remainingCharacters);

    if (remainingCharacters <= '10') {
        remainingChars.classList.add('warning');
        inputElement.classList.add('warning');
    } 
}

inputElement.addEventListener('input', inputCounter);






