let num1 = '';
let num2 = '';
let operator = '';
let result = '';
disableOperatorBtns();

function add(num1, num2) {
  result = num1 + num2;
}

function subtract(num1, num2) {
  result = num1 - num2;
}

function multiply(num1, num2) {
  result = num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0 || num2 == '0') {
    result =
      "<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";
  } else {
    result = num1 / num2;
  }
}

function putNumberInDisplay(num) {
  display.textContent += num;
}

function putOperatorInDisplay(op) {
  let opString = ' ' + op + ' ';
  console.log(opString);
  display.textContent += opString;
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

let oneBtn = document.getElementById('1');
let twoBtn = document.getElementById('2');
let threeBtn = document.getElementById('3');
let fourBtn = document.getElementById('4');
let fiveBtn = document.getElementById('5');
let sixBtn = document.getElementById('6');
let sevenBtn = document.getElementById('7');
let eightBtn = document.getElementById('8');
let nineBtn = document.getElementById('9');
let zeroBtn = document.getElementById('zero');

let plusBtn = document.getElementById('+');
let minusBtn = document.getElementById('-');
let divideBtn = document.getElementById('/');
let multiplyBtn = document.getElementById('*');
let equalsBtn = document.getElementById('=');

let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('del');

/*event listeners: numbers*/
oneBtn.addEventListener('click', function () {
  putNumberInDisplay('1');
  enableOperatorBtns();
});
twoBtn.addEventListener('click', function () {
  putNumberInDisplay('2');
  enableOperatorBtns();
});
threeBtn.addEventListener('click', function () {
  putNumberInDisplay('3');
  enableOperatorBtns();
});
fourBtn.addEventListener('click', function () {
  putNumberInDisplay('4');
  enableOperatorBtns();
});
fiveBtn.addEventListener('click', function () {
  putNumberInDisplay('5');
  enableOperatorBtns();
});
sixBtn.addEventListener('click', function () {
  putNumberInDisplay('6');
  enableOperatorBtns();
});
sevenBtn.addEventListener('click', function () {
  putNumberInDisplay('7');
  enableOperatorBtns();
});
eightBtn.addEventListener('click', function () {
  putNumberInDisplay('8');
  enableOperatorBtns();
});
nineBtn.addEventListener('click', function () {
  putNumberInDisplay('9');
  enableOperatorBtns();
});
zeroBtn.addEventListener('click', function () {
  putNumberInDisplay('0');
  enableOperatorBtns();
});

/*event listeners: operations*/
plusBtn.addEventListener('click', function () {
  putOperatorInDisplay('+');
  disableOperatorBtns();
  saveVariables();
});

minusBtn.addEventListener('click', function () {
  putOperatorInDisplay('-');
  disableOperatorBtns();
  saveVariables();
});
divideBtn.addEventListener('click', function () {
  putOperatorInDisplay('/');
  disableOperatorBtns();
  saveVariables();
});
multiplyBtn.addEventListener('click', function () {
  putOperatorInDisplay('*');
  disableOperatorBtns();
  saveVariables();
});

equalsBtn.addEventListener('click', function () {
  putOperatorInDisplay('=');
  /*disableOperatorBtns();*/
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
}

/*math logic */
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
    } else if (operator2 == '=') {
      display.innerHTML = result;
      num1 = result;
      operator = '';
      num2 = '';
    } else {
      display.innerHTML = result + ' ' + operator2 + ' ';
    }
  }
}

function operate(num1, num2, operator) {
  if (operator == '+') {
    add(num1, num2);
  } else if (operator == '-') {
    subtract(num1, num2);
  } else if (operator == '*') {
    multiply(num1, num2);
  } else if (operator == '/') {
    divide(num1, num2);
  }
}
