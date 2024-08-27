let num1;
let num2;
let operator;

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
  return num1 / num2;
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
let oneBtn = document.getElementById('1');
let twoBtn = document.getElementById('2');
let threeBtn = document.getElementById('3');
let fourBtn = document.getElementById('4');
let fiveBtn = document.getElementById('5');
let sixBtn = document.getElementById('6');
let sevenBtn = document.getElementById('7');
let eightBtn = document.getElementById('8');
let nineBtn = document.getElementById('9');
let zeroBtn = document.getElementById('0');

let plusBtn = document.getElementById('+');
let minusBtn = document.getElementById('-');
let multiplyBtn = document.getElementById('*');
let divideBtn = document.getElementById('/');
let periodBtn = document.getElementById('.');
let percentBtn = document.getElementById('%');

let equalsBtn = document.getElementById('=');

let clearBtn = document.getElementById('C');

let display = document.getElementById('display');

oneBtn.addEventListener('click', function () {
  populateDisplay('1');
});
twoBtn.addEventListener('click', function () {
  populateDisplay('2');
});
threeBtn.addEventListener('click', function () {
  populateDisplay('3');
});
fourBtn.addEventListener('click', function () {
  populateDisplay('4');
});
fiveBtn.addEventListener('click', function () {
  populateDisplay('5');
});
sixBtn.addEventListener('click', function () {
  populateDisplay('6');
});
sevenBtn.addEventListener('click', function () {
  populateDisplay('7');
});
eightBtn.addEventListener('click', function () {
  populateDisplay('8');
});
nineBtn.addEventListener('click', function () {
  populateDisplay('9');
});
zeroBtn.addEventListener('click', function () {
  populateDisplay('0');
});

plusBtn.addEventListener('click', function () {
  populateDisplay('+');
});
minusBtn.addEventListener('click', function () {
  populateDisplay(' - ');
});
multiplyBtn.addEventListener('click', function () {
  populateDisplay(' * ');
});
divideBtn.addEventListener('click', function () {
  populateDisplay(' / ');
});
equalsBtn.addEventListener('click', function () {
  populateDisplay(' = ');
});

periodBtn.addEventListener('click', function () {
  populateDisplay('.');
});

clearBtn.addEventListener('click', clearDisplay);

function populateDisplay(str) {
  display.textContent += str;
}

function clearDisplay() {
  display.textContent = '';
}
