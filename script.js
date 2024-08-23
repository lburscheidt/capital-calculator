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
let equalsBtn = document.getElementById('=');

let clearBtn = document.getElementById('C');

oneBtn.addEventListener('click', populateDisplay);
twoBtn.addEventListener('click', populateDisplay);
threeBtn.addEventListener('click', populateDisplay);
fourBtn.addEventListener('click', populateDisplay);
fiveBtn.addEventListener('click', populateDisplay);
sixBtn.addEventListener('click', populateDisplay);
sevenBtn.addEventListener('click', populateDisplay);
eightBtn.addEventListener('click', populateDisplay);
nineBtn.addEventListener('click', populateDisplay);
zeroBtn.addEventListener('click', populateDisplay);

plusBtn.addEventListener('click', populateDisplay);
minusBtn.addEventListener('click', populateDisplay);
multiplyBtn.addEventListener('click', populateDisplay);
divideBtn.addEventListener('click', populateDisplay);
equalsBtn.addEventListener('click', populateDisplay);

clearBtn.addEventListener('click', populateDisplay);
