let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let operator2 = '';
const regex = /^([0-9]+)(.?)([0-9]?)( )(\+|\-|\*|\/)( )([0-9]+)(.?)([0-9]?)/gmi;
const operatorsRegex = /\+|\*|\/|\-/i;
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator")
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('del');
const decimalsBtn = document.getElementById(".")
const skulls = "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";

disableOperatorBtns();
disableEqualsBtn();

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return parseFloat((num1 - num2).toFixed(6));
}

function multiply(num1, num2) {
  return parseFloat((num1 * num2).toFixed(6));
}

function divide(num1, num2) {
  if (num2 === 0) {
    return
    "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";
  } else {
    return parseFloat((num1 / num2).toFixed(6));

  }
}

function putNumberInDisplay(num) {
  display.textContent += num;
  if (display.innerHTML.match(regex)) {
     enableEqualsBtn();
  }
}

function putOperatorInDisplay(op) {
  display.textContent += ' ' + op + ' ';
  disableOperatorBtns();
}

function disableOperatorBtns() {
  document.querySelectorAll('button.operator').forEach(btn => {
    btn.disabled = true;
  });
}

function enableOperatorBtns() {
  document.querySelectorAll('button.operator').forEach(btn => {
    btn.disabled = false;
  });
}

function enableEqualsBtn() {
  document.getElementById('.equals').disabled = false;
}

function disableEqualsBtn() {
  document.getElementById('.equals').disabled = true;
}

function enableDecimalBtn() {
  document.getElementById('.').disabled = false;
}

function disableDecimalBtn() {
  document.querySelector('.').disabled = true;
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
    saveVariables();
  }

  else if (keyBoardKey === 'Enter') {
    putOperatorInDisplay('=');
    disableDecimalBtn();
    saveVariables();
  } else if (keyBoardKey === 'Backspace' || keyBoardKey === 'Delete') {
    backspaceDelete();
  } else if (keyBoardKey === 'Control' || keyBoardKey === 'Super') {
    clearDisplay();
  }
}

numberBtns.forEach(btn => btn.addEventListener("click", event => {
  putNumberInDisplay(btn.id);
  if (operatorsRegex.test(display.textContent)) {
    num2 += btn.id;
    console.log(num2);
    enableOperatorBtns();
  }
  else if (operator2 === '=') {
    clearDisplay();
    putNumberInDisplay(btn.id);
    num1 += btn.id;
    console.log(num1);
     enableOperatorBtns();
  }
  else {
    num1 += btn.id;
    console.log(num1);
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

function divide(nuum1, num2) {
  if (num2 === 0) { return skulls; }
  else { return num1 / num2; }
}

function operate(num1, num2, operator) {
  number1 = Number(num1);
  number2 = Number(num2);
  if (operator === '+') {
    display.innerHTML = add(number1, number2)
  } else if (operator === '-') {
    display.innerHTML = subtract(number1, number2)
  } else if (operator === '*') {
    display.innerHTML = multiply(number1, number2)
  }
  else if (operator === "/") {
    display.innerHTML = divide(number1, number2)
  }
  num1 = number2;
  num2 = "";
  operator = "";
}

equalsBtn.addEventListener('click', () => {
  operate(num1, num2, operator);
}
)

operatorBtns.forEach(btn => btn.addEventListener("click", event => {
  operator = btn.id;
  console.log(operator);
  putOperatorInDisplay(btn.id);
  disableOperatorBtns();
  enableDecimalBtn();

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



