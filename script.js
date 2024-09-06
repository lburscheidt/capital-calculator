let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let operator2 = '';
const regex = /^([0-9]+)(.?)([0-9]?)( )(\+|\-|\*|\/)( )([0-9]+)(.?)([0-9]?)/gmi;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator")
const equalsBtn = document.querySelector(".equals")
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('del');
let decimalsBtn = document.getElementById('.');

/*disableOperatorBtns();
disableEquals();*/

function add(num1, num2) {
  result = parseFloat((num1 + num2).toFixed(6));
}

function subtract(num1, num2) {
  result = parseFloat((num1 - num2).toFixed(6));
}

function multiply(num1, num2) {
  result = parseFloat((num1 * num2).toFixed(6));
}

function divide(num1, num2) {
  if (num2 === 0) {
    result =
      "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";
  } else {
    result = parseFloat((num1 / num2).toFixed(6));
  }
}

function putNumberInDisplay(num) {
  display.textContent += num;
  if (display.innerHTML.match(regex)) {
    enableEquals();
  }
}

function putOperatorInDisplay(op) {
  display.textContent += ' ' + op + ' ';
  disableOperatorBtns();
}

function disableOperatorBtns() {
  document.querySelectorAll('button.operator').forEach(elem => {
    elem.disabled = true;
  });
}

function enableOperatorBtns() {
  document.querySelectorAll('button.operator').forEach(elem => {
    elem.disabled = false;
  });
}

function enableEquals() {
  document.getElementById('=').disabled = false;
}

function disableEquals() {
  document.getElementById('=').disabled = true;
}


function enableDecimal() {
  document.getElementById('.').disabled = false;
}

function disableDecimal() {
  document.getElementById('.').disabled = true;
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

  else if (/\+|\*|\/|\-/i.test(keyBoardKey)) {
    putOperatorInDisplay(keyBoardKey);
    disableOperatorBtns();
    enableDecimal();
    saveVariables();
  }

  else if (keyBoardKey === 'Enter') {
    putOperatorInDisplay('=');
    disableDecimal();
    saveVariables();
  } else if (keyBoardKey === 'Backspace' || keyBoardKey === 'Delete') {
    backspaceDelete();
  } else if (keyBoardKey === 'Control' || keyBoardKey === 'Super') {
    clearDisplay();
  }
}
/* Add event listeners*/



numberButtons.forEach(btn => btn.addEventListener("click", event => {
  if (operator2 === '=') {
    clearDisplay();
    putNumberInDisplay(btn.id);
    enableOperatorBtns();
  } else {
    putNumberInDisplay(btn.id);
    enableOperatorBtns();
  }
}
))

operatorButtons.forEach(btn => btn.addEventListener("click", event => {
  putOperatorInDisplay(btn.id);
  disableOperatorBtns();
  enableDecimal();
  saveVariables();
}))

equalsBtn.addEventListener('click', function () {
  putOperatorInDisplay(btn.id);
  saveVariables();
});

/*event listeners: delete, clear */

deleteBtn.addEventListener('click', backspaceDelete);
clearBtn.addEventListener('click', clearDisplay);

/*functions: delete, clear */

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
  disableEquals();
}


function saveVariables() {
  let str = display.textContent.trimEnd().split(' ');
  console.log(str);
  if (str.length < 3) {
    num1 = str[0];
    operator = str[1];
  } else {
    num1 = Number(str[0]);
    operator = str[1];
    num2 = Number(str[2]);
    operator2 = str[3];
    operate(num1, num2, operator);
    if (
      result ==
      "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>"
    ) {
      display.innerHTML = result;
      num1 = '';
      num2 = '';
      operator = '';
    } else if (operator2 === '=') {
      display.innerHTML = result;
      /*num1 = result;*/
      num1 = '';
      operator = '';
      num2 = '';
      console.log(operator2);
    } else {
      display.innerHTML = result + ' ' + operator2 + ' ';
    }
  }
}

function operate(num1, num2, operator) {
  if (operator === '+') {
    add(num1, num2);
  } else if (operator === '-') {
    subtract(num1, num2);
  } else if (operator === '*') {
    multiply(num1, num2);
  } else if (operator === '/') {
    divide(num1, num2);
  }
}
