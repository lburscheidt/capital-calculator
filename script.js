let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let operator2 = '';
const regex = /^([0-9]+)(.?)([0-9]?)( )(\+|\-|\*|\/)( )([0-9]+)(.?)([0-9]?)/gmi;
const operatorsRegex = /\+|\*|\/|\-/i;
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator")
const equalsBtn = document.getElementById("=");
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('del');
const decimalsBtn = document.getElementById(".")
const skulls = "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";

disableOperatorBtns();
disableEqualsBtn();

function putNumberInDisplay(num) {
  display.textContent += num;
}

function putOperatorInDisplay(op) {
  display.textContent += ' ' + op + ' ';
}

function disableOperatorBtns() {
  operatorBtns.forEach(btn => {
    btn.disabled = true;
  });
}

function enableOperatorBtns() {
  operatorBtns.forEach(btn => {
    btn.disabled = false;
  });
}

function enableEqualsBtn() {
  document.getElementById("=").disabled = false;
}

function disableEqualsBtn() {
  document.getElementById("=").disabled = true;
}

function enableDecimalBtn() {
  decimalsBtn.disabled = false;
}

function disableDecimalBtn() {
  decimalsBtn.disabled = true;
}

document.onkeydown = pressKey;

function pressKey(event) {
  let keyBoardKey = event.key;
  if (/[0-9.]/i.test(event.key)) {

    if (operator2 === '=') {
      clearDisplay();
      putNumberInDisplay(keyBoardKey);
      enableOperatorBtns();
    } else {
      putNumberInDisplay(keyBoardKey);
      enableOperatorBtns();
    }
  }
  else if (operatorsRegex.test(keyBoardKey)) {
    putOperatorInDisplay(keyBoardKey);
    disableOperatorBtns();
    enableDecimalBtn();
  }
  else if (keyBoardKey === 'Enter') {
    putOperatorInDisplay('=');
    disableDecimalBtn();
  } else if (keyBoardKey === 'Backspace' || keyBoardKey === 'Delete') {
    backspaceDelete();
  } else if (keyBoardKey === 'Control' || keyBoardKey === 'Super') {
    clearDisplay();
  }
}

numberBtns.forEach(btn => btn.addEventListener("click", event => {
  putNumberInDisplay(btn.id);
  if (operator !== "") {
    num2 += btn.id;
    console.log(num1, num2, operator);
    enableEqualsBtn();
  }
  else if (operator2 === '=') {
    clearDisplay();
    putNumberInDisplay(btn.id);
    num1 += btn.id;
  }
  else {
    num1 += btn.id;
  }
  enableOperatorBtns();
}
))

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) { return skulls; }
  else { return num1 / num2; }
}

function operate(num1, num2, operator) {
  number1 = Number(num1);
  number2 = Number(num2);
  if (operator === '+') {
    display.innerHTML = add(number1, number2);
  } else if (operator === '-') {
    display.innerHTML = subtract(number1, number2);
  } else if (operator === '*') {
    display.innerHTML = multiply(number1, number2);
  }
  else if (operator === "/") {
    display.innerHTML = divide(number1, number2);
  }
  num1 = number2;
  num2 = "";
  operator = "";
}

equalsBtn.addEventListener('click', () => {
  operate(num1, num2, operator);
  operator2 = "=";
}
)

operatorBtns.forEach(btn => btn.addEventListener("click", event => {
  if (operator === "") {
    operator = btn.id;
    console.log(operator);
    putOperatorInDisplay(btn.id);
    disableOperatorBtns();
    enableDecimalBtn();
    disableEqualsBtn()
  }
  else {
    operate(num1, num2, operator);
    operator = btn.id;
  }
}))

deleteBtn.addEventListener('click', backspaceDelete);
clearBtn.addEventListener('click', clearDisplay);

function backspaceDelete() {
  let text = display.textContent.replace(' ', '').slice(0, -1);
  console.log(text);
  display.textContent = text;
  if ((plusBtn.disabled = true)) {
    enableOperatorBtns();
  }
}

function clearDisplay() {
  display.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
  operator2 = '';
  disableOperatorBtns();
  disableEqualsBtn();
}



