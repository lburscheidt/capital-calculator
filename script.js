let num1;
let num2;
let operator;

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
    return (display.innerHTML = '<i class="fa-solid fa-skull"></i><i class="fa-solid fa-skull"></i><i class="fa-solid fa-skull"></i>');
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
let display = document.getElementById('display');

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
let zeroBtn = document.getElementById('0');

/*operators*/
let plusBtn = document.getElementById('+');
let minusBtn = document.getElementById('-');
let multiplyBtn = document.getElementById('*');
let divideBtn = document.getElementById('/');
let periodBtn = document.getElementById('.');
let percentBtn = document.getElementById('%');
let equalsBtn = document.getElementById('=');

/*clear */
let clearBtn = document.getElementById('C');

/*event listeners*/

oneBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('1');
});
twoBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('2');
});
threeBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('3');
});
fourBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('4');
});
fiveBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('5');
});
sixBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('6');
});
sevenBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('7');
});
eightBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('8');
});
nineBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('9');
});
zeroBtn.addEventListener('click', function () {
  enableOperatorBtns();
  populateDisplay('0');
});

plusBtn.addEventListener('click', function () {
  populateDisplay(' + ');
  disableOperatorBtns();
});
minusBtn.addEventListener('click', function () {
  populateDisplay(' - ');
  disableOperatorBtns();
});
multiplyBtn.addEventListener('click', function () {
  populateDisplay(' * ');
  disableOperatorBtns();
});
divideBtn.addEventListener('click', function () {
  populateDisplay(' / ');
  disableOperatorBtns();

});
equalsBtn.addEventListener('click', function () {
  populateDisplay(' = ');
  disableOperatorBtns();
  splitString(display.textContent);
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

function disableOperatorBtns(){
  document.querySelectorAll('button.operator').forEach(elem => {
    elem.disabled = true;
});
}

function enableOperatorBtns(){
    document.querySelectorAll('button.operator').forEach(elem => {
    elem.disabled = false;
});
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

function splitString(str) {
  let characters = str.split(' ');
  console.log(characters);
  num1 = Number(characters[0]);
  num2 = Number(characters[2]);
  operator = characters[1];
  console.log(num1);
  console.log(num2);
  console.log(operator);
  operate(num1, num2, operator);
}
