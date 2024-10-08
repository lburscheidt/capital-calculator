let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let operator2 = "";
const regex = /^([0-9]+)(.?)([0-9]?)( )(\+|\-|\*|\/)( )([0-9]+)(.?)([0-9]?)/gim;
const operatorsRegex = /(\+)|(\-)|(\*)|(\/)/gim;
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("=");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("del");
const decimalsBtn = document.getElementById(".");
const skulls =
	"<i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i><i class='fa-solid fa-skull'></i>";

function add(num1, num2) {
	result = Number.parseFloat((num1 + num2).toFixed(2));
}

function subtract(num1, num2) {
	result = Number.parseFloat((num1 - num2).toFixed(2));
}

function multiply(num1, num2) {
	result = Number.parseFloat((num1 * num2).toFixed(2));
}

function divide(num1, num2) {
	if (num2 === 0) {
		result = skulls;
	} else {
		result = Number.parseFloat((num1 / num2).toFixed(2));
	}
}

function operate(num1, num2, operator) {
	if (operator === "+") {
		add(Number.parseFloat(num1), Number.parseFloat(num2));
	} else if (operator === "-") {
		subtract(Number.parseFloat(num1), Number.parseFloat(num2));
	} else if (operator === "*") {
		multiply(Number.parseFloat(num1), Number.parseFloat(num2));
	} else if (operator === "/") {
		divide(Number.parseFloat(num1), Number.parseFloat(num2));
	}
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
	equalsBtn.disabled = false;
}

function disableEqualsBtn() {
	equalsBtn.disabled = true;
}

function enableDecimalsBtn() {
	decimalsBtn.disabled = false;
}

function disableDecimalsBtn() {
	decimalsBtn.disabled = true;
}

function clearDisplayAndMemory() {
	display.innerHTML = "";
	num1 = "";
	num2 = "";
	operator = "";
}
decimalsBtn.addEventListener("click", disableDecimalsBtn);

function onNumberPress(num) {
	if (operator === "=") {
		clearDisplayAndMemory();
		num1 += num;
		display.innerHTML += num;
		enableOperatorBtns();
	} else if (
		operator === "+" ||
		operator === "-" ||
		operator === "*" ||
		operator === "/"
	) {
		num2 += num;
		display.innerHTML += num;
		enableOperatorBtns();
		enableEqualsBtn();
	} else {
		num1 += num;
		display.innerHTML += num;
		enableOperatorBtns();
		enableEqualsBtn();
	}
}
numberBtns.forEach(btn =>
	btn.addEventListener("click", event => {
		onNumberPress(btn.id);
	}),
);

function onOperatorPress(op) {
	if (operator === "") {
		operator = op;
		display.innerHTML += ` ${op} `;
		disableOperatorBtns();
		enableDecimalsBtn();
	} else {
		operate(num1, num2, operator);
		display.innerHTML = result += ` ${op} `;
		num1 = result;
		num2 = "";
		operator = op;
	}
}
operatorBtns.forEach(btn =>
	btn.addEventListener("click", () => {
		onOperatorPress(btn.id);
	}),
);

function onEqualsPress() {
	operate(num1, num2, operator);
	display.innerHTML = result;
	num1 = result;
	num2 = "";
	operator = "=";
	disableEqualsBtn();
	enableDecimalsBtn();
}
equalsBtn.addEventListener("click", () => {
	onEqualsPress();
});
clearBtn.addEventListener("click", clearDisplayAndMemory);
backspaceBtn.addEventListener("click", backspace);

function backspace() {
	if (display.innerText.slice(-1) === " ") {
		display.innerText = display.innerText.slice(0, -3);
	} else {
		display.innerText = display.innerText.slice(0, -1);
	}
	let str = display.innerText.split(" ").toString();
	console.log(str);
	console.log(!str.includes("."));
	if (str.length === 0) {
		num1 = "";
		num2 = "";
		operator = "";
	} else if (str.length === 1) {
		num1 = str[0];
		num2 = "";
		operator = "";
	} else if (str.length === 2) {
		num1 = str[0];
		operator = str[1];
		num2 = "";
	} else {
		num1 = str[0];
		num2 = str[2];
		operator = str[1];
	}
	if (!str.includes(".")) {
		enableDecimalsBtn();
	}
}
document.onkeydown = pressKey;

function pressKey(event) {
	let keyBoardKey = event.key;
	if (/[0-9.]/i.test(keyBoardKey)) {
		onNumberPress(keyBoardKey);
	} else if (/\+|\*|\/|\-/i.test(keyBoardKey)) {
		onOperatorPress(keyBoardKey);
	} else if (keyBoardKey === "=" || keyBoardKey === "Enter") {
		onEqualsPress();
	} else if (keyBoardKey === "Backspace" || keyBoardKey === "Delete") {
		backspace();
	} else if (keyBoardKey === "Control" || keyBoardKey === "Super") {
		clearDisplayAndMemory();
	}
}
window.onload = () => {
	disableEqualsBtn();
	disableOperatorBtns();
};
