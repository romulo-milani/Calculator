//BASIC MATH FUNCTIONS
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

//main operate functon
function operate(operator, a, b) {
    switch(operator) {
        case "+": {
            return add(a, b);
        } break;
        case "-": {
            return subtract(a, b);
        } break;
        case "*": {
            return multiply(a, b);
        } break;
        case "/": {
            return divide(a, b);
        } break;
        default: {
            return "Operação inválida"
        }
    }
}

//DISPLAY NUMBERS
const button = document.querySelectorAll(".numpad");
const topScreen = document.querySelector(".topScreen");
const topP = document.querySelector(".topP");

button.forEach((btn) => btn.addEventListener('click', displayP));

function displayP(e) {
    e.preventDefault();
    const num = document.createElement('p');
    num.className = 'topP';
    num.innerHTML = `${e.target.value}`;
    topScreen.appendChild(num);
}

//DISPLAY OPERATOR
const operator = document.querySelectorAll(".op");
operator.forEach((op) => op.addEventListener('click', displayOperator));

function displayOperator(e) {
    e.preventDefault();
    const createOp = document.createElement('p');
    createOp.className = 'topOperator';
    createOp.innerHTML = `${e.target.value}`;
    topScreen.appendChild(createOp);
}