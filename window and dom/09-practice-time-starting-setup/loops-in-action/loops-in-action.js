// section 1

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
const userNumberInputElement = document.getElementById('user-number');
const enteredNumber = userNumberInputElement.value;

let sumUpToNumber = 0;

for (let i = 0; i <= enteredNumber; i++ ) {
sumUpToNumber = sumUpToNumber + i;
console.log("loop",i,sumUpToNumber)
}
const outputResultElement = document.getElementById('calculated-sum');

outputResultElement.textContent = sumUpToNumber;
outputResultElement.style.display = 'block';
console.log
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// section 2

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightlinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

for (const anchorElement of anchorElements ) {
    anchorElement.classList.add('highlight');
    console.log('loop',anchorElement)
}
}

highlightLinksButtonElement.addEventListener('click', highlightlinks)

// section 3

const exempleobject = {
    firstName: 'Marjo',
    lastName: 'Bravo',
    age: 40
};

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData() {
const outputDataElement = document.getElementById('output-user-data');
outputDataElement.innerHTML = '';

for (const propertyName in exempleobject) {
const newUserDataListElement = document.createElement('li');
const outputText = propertyName.toUpperCase() + ': ' + exempleobject[propertyName];
newUserDataListElement.textContent = outputText;
outputDataElement.append(newUserDataListElement);
}
}
displayUserDataButtonElement.addEventListener('click', displayUserData);

// section 4

const rollTheDiceButtonElement = document.querySelector('#statistics button')

function rollTheDice() {
    const 
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;

    diceRollsListElement.innerHTML = '';

    let hasRollesTargedNumber = false;

    while (!hasRollesTargedNumber) {
        const rolledNumber = rollTheDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRollesTargedNumber = true;
        // } equivaut à la ligne suivante raccourci JS

        hasRollesTargedNumber = rolledNumber == enteredNumber;
    }

rollTheDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls)