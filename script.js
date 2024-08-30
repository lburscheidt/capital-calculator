let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let operator2 = '';

disableOperatorBtns();
disableEquals();
let regex = /^([0-9]+)(.?)([0-9]?)( )(\+|\-|\*|\/)( )([0-9]+)(.?)([0-9]?)/gim;

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
  if (num2 == 0 || num2 == '0') {
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
let decimalsBtn = document.getElementById('.');

/*enable/disable equals */
function enableEquals() {
  document.getElementById('=').disabled = false;
}

function disableEquals() {
  document.getElementById('=').disabled = true;
}

/*enable/disable decimals */
function enableDecimal() {
  document.getElementById('.').disabled = false;
}

function disableDecimal() {
  document.getElementById('.').disabled = true;
}

document.onkeydown = pressKey;

/*keyboard support */
function pressKey(event) {
  let keyBoardKey = event.key;

  if (keyBoardKey === '1') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('1');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('1');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '2') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('2');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('2');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '3') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('3');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('3');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '4') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('4');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('4');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '5') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('5');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('5');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '6') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('6');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('6');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '7') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('7');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('7');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '8') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('8');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('8');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '9') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('9');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('9');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '0') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('0');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('0');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '.') {
    if (operator2 == '=') {
      clearDisplay();
      putNumberInDisplay('.');
      enableOperatorBtns();
    } else {
      putNumberInDisplay('.');
      enableOperatorBtns();
    }
  } else if (keyBoardKey === '+') {
    putOperatorInDisplay('+');
    disableOperatorBtns();
    enableDecimal();
    saveVariables();
  } else if (keyBoardKey === '-') {
    putOperatorInDisplay('-');
    disableOperatorBtns();
    enableDecimal();
    saveVariables();
  } else if (keyBoardKey === '*') {
    putOperatorInDisplay('*');
    disableOperatorBtns();
    enableDecimal();
    saveVariables();
  } else if (keyBoardKey === '/') {
    putOperatorInDisplay('/');
    disableOperatorBtns();
    enableDecimal();
    saveVariables();
  } else if (keyBoardKey === 'Enter') {
    putOperatorInDisplay('=');
    /*disableDecimal();*/
    saveVariables();
  } else if (keyBoardKey === 'Backspace' || keyBoardKey == 'Delete') {
    backspaceDelete();
  } else if (keyBoardKey === 'Control' || keyBoardKey == 'Super') {
    clearDisplay();
  }
}

/*event listeners: numbers*/
/*oneBtn.addEventListener('click', function () {
  putNumberInDisplay('1');
  enableOperatorBtns();
});*/

oneBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('1');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('1');
    enableOperatorBtns();
  }
});

twoBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('2');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('2');
    enableOperatorBtns();
  }
});
threeBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('3');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('3');
    enableOperatorBtns();
  }
});
fourBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('4');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('4');
    enableOperatorBtns();
  }
});
fiveBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('5');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('5');
    enableOperatorBtns();
  }
});
sixBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('6');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('6');
    enableOperatorBtns();
  }
});
sevenBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('7');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('7');
    enableOperatorBtns();
  }
});
eightBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('8');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('8');
    enableOperatorBtns();
  }
});
nineBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('9');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('9');
    enableOperatorBtns();
  }
});
zeroBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('0');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('0');
    enableOperatorBtns();
  }
});
decimalsBtn.addEventListener('click', function () {
  if (operator2 == '=') {
    clearDisplay();
    putNumberInDisplay('.');
    enableOperatorBtns();
  } else {
    putNumberInDisplay('.');
    enableOperatorBtns();
  }
});

/*event listeners: operations*/
plusBtn.addEventListener('click', function () {
  putOperatorInDisplay('+');
  disableOperatorBtns();
  enableDecimal();
  saveVariables();
});

minusBtn.addEventListener('click', function () {
  putOperatorInDisplay('-');
  disableOperatorBtns();
  enableDecimal();
  saveVariables();
});
divideBtn.addEventListener('click', function () {
  putOperatorInDisplay('/');
  disableOperatorBtns();
  enableDecimal();
  saveVariables();
});
multiplyBtn.addEventListener('click', function () {
  putOperatorInDisplay('*');
  disableOperatorBtns();
  enableDecimal();
  saveVariables();
});

equalsBtn.addEventListener('click', function () {
  putOperatorInDisplay('=');
  /*disableDecimal();*/
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
