let num1;
let num2;
let operator;
let display = document.getElementById('display');
let operation = display.textContent;

function add(num1, num2) {
  return (display.textContent = num1 + num2);
}
function subtract(num1, num2) {
  return (display.textContent = num1 - num2);
}
function multiply(num1, num2) {
  return (display.textContent = num1 * num2);
}
function divide(num1, num2) {
  if (num2 !== 0) {
    return (display.textContent = num1 / num2);
  } else {
    return (display.innerHTML =
      '<i class="fa-solid fa-skull"></i><i class="fa-solid fa-skull"></i><i class="fa-solid fa-skull"></i>');
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

/*populate display*/

/*numbers*/

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

/*operators*/
let plusBtn = document.getElementById('+');
let minusBtn = document.getElementById('-');
let multiplyBtn = document.getElementById('*');
let divideBtn = document.getElementById('/');
let periodBtn = document.getElementById('.');
let equalsBtn = document.getElementById('=');

/*clear & backspace*/
let clearBtn = document.getElementById('C');
let backspaceBtn = document.getElementById('Del');

disableOperatorBtns();

/*event listeners*/

oneBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('1');
});
twoBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('2');
});
threeBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('3');
});
fourBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('4');
});
fiveBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('5');
});
sixBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('6');
});
sevenBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('7');
});
eightBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('8');
});
nineBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('9');
});
zeroBtn.addEventListener('click', function () {
  enableOperatorBtns();
  displayAndStore('0');
});

plusBtn.addEventListener('click', function () {
  displayAndStore('+');

  disableOperatorBtns();
});
minusBtn.addEventListener('click', function () {
  displayAndStore('-');
  disableOperatorBtns();
});
multiplyBtn.addEventListener('click', function () {
  displayAndStore('*');
  disableOperatorBtns();
});
divideBtn.addEventListener('click', function () {
  displayAndStore('/');
  disableOperatorBtns();
});

equalsBtn.addEventListener('click', function () {
  displayAndStore('=');

  splitString(display.textContent);
});

periodBtn.addEventListener('click', function () {
  displayAndStore('.');
});

clearBtn.addEventListener('click', clearDisplay);

backspaceBtn.addEventListener('click', backspaceDelete);

function disablePeriod() {
  periodBtn.disabled = true;
}

function backspaceDelete() {
  let text = display.innerText.replace(' ', '').slice(0, -1);
  console.log(text);
  display.innerText = text;
  if ((plusBtn.disabled = true)) {
    enableOperatorBtns();
  }
}

function displayAndStore(str) {
  /*store str input in variables*/
  if (
    display.textContent.includes('*') ||
    display.textContent.includes('+') ||
    display.textContent.includes('/') ||
    display.textContent.includes('-')
  ) {
    num2 += str;
  } else {
    num1 += str;
  }

  if (
    str == '1' ||
    str == '2' ||
    str == '3' ||
    str == '4' ||
    str == '5' ||
    str == '6' ||
    str == '7' ||
    str == '8' ||
    str == '9' ||
    str == '0'
  ) {
    /*Add number to display*/
    display.textContent += str;
  } else if (str == '+' || str == '-' || str == '*' || str == '/') {
    /*Add operator with spaces to display */
    display.textContent += ' ' + str + ' ';
    operator = str;
  }
  console.log(num1);
  console.log(num2);
  console.log(operator);
}

function clearDisplay() {
  display.textContent = '';
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

function splitString(str) {
  let characters = str.split(' ');
  num1 = Number(characters[0]);
  num2 = Number(characters[2]);
  operator = characters[1];
  console.log(num1);
  console.log(num2);
  console.log(operator);
  operate(num1, num2, operator);
}

function operate(num1, num2, operator) {
  if (operator == '+') {
    let result = add(num1, num2);
  } else if (operator == '-') {
    let result = subtract(num1, num2);
  } else if (operator == '*') {
    let result = multiply(num1, num2);
  } else if (operator == '/') {
    let result = divide(num1, num2);
  }
}
