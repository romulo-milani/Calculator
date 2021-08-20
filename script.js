const operate = () => {
    if (pendingOperation()) {
        const currentNumber = parseFloat(downScreen.textContent);
        if (storeOperator == '+') {
            newNumber = true;
            updateDisplay(storePreviousNumber + currentNumber);
        } else if(storeOperator == '-') {
            newNumber = true;
            updateDisplay(storePreviousNumber-currentNumber);
        } else if(storeOperator == '*') {
            newNumber = true;
            updateDisplay(storePreviousNumber * currentNumber);
        } else if(storeOperator == '÷') {
            newNumber = true;
            updateDisplay(storePreviousNumber / currentNumber);
        }
    }
}

const pendingOperation = () => storeOperator != undefined;

//DISPLAY NUMBERS
let newNumber = true;
let storeOperator;
let storePreviousNumber;
const numpad = document.querySelectorAll(".numpad");
const downScreen = document.querySelector(".downScreen");

const updateDisplay = (text) =>  {
    if (newNumber) {
        downScreen.textContent = text;
        newNumber = false;
    } else {
        downScreen.textContent += text;
    }
}

const selectOperator = (event) => {
    if (!newNumber) {
        operate();
        newNumber = true;
        storeOperator = event.target.textContent;
        storePreviousNumber = parseFloat(downScreen.textContent);
    }
}

const insertNumbers = (event) => updateDisplay(event.target.textContent);

numpad.forEach((numbers) => numbers.addEventListener('click', insertNumbers));

//DISPLAY OPERATOR
const operators = document.querySelectorAll(".op");
operators.forEach((operator) => operator.addEventListener('click', selectOperator));

//EQUALS BTN
const equals = document.querySelector('.equals');

const callEquals = () => {
    operate();
    storeOperator = undefined;
}
equals.addEventListener('click', callEquals);

//CLEAR BTN
const clear = document.querySelector('.clearBtn');
const clearScreen = () => {
    downScreen.textContent = '';
    storeOperator = undefined;
    newNumber = true;
    storePreviousNumber = undefined;
}

clear.addEventListener('click', clearScreen);

//BACKSPACE BTN
const backSp = document.querySelector('.backBtn');

const eraseLastNumber = () => {
    downScreen.textContent = downScreen.textContent.slice(0, -1);
}

backSp.addEventListener('click', eraseLastNumber);


//DECIMAL BTN
const decimal = document.querySelector('.dot');

const thereIsADot = () => downScreen.textContent.indexOf('.') != -1;
const thereIsAnyValue = () => downScreen.textContent.length > 0;

const insertDot = () => {
    if (!thereIsADot()) {
        if (thereIsAnyValue()) {
            updateDisplay('.');
        } else {
            updateDisplay('0.');
        }

    }
};

decimal.addEventListener('click', insertDot);