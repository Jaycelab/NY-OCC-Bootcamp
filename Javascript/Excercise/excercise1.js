/*
//if-else

let operator = prompt("Choose an operator");
let num1 = prompt("Choose first number");
let num2 = prompt("Choose second number");
let result;

if (operator === "+") {
	result = num1 + num2;
} else if (operator === "-") {
	result = num1 - num2;
} else if (operator === "*") {
	result = num1 * num2;
} else {
	result = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);


//Switch statement
let num1 = prompt("Choose first number");
let operator = prompt("Choose an operator");
let num2 = prompt("Choose second number");
let result;

switch (operator) {
  case operator === "+":
    result = num1 + num2;
    break;
  case operator === "-":
    result = num1 - num2;
    break;
  case operator === "*":
    result = num1 * num2;
    break;
  default:
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

//nested ternary

let num1 = prompt("Choose first number");
let opp = prompt("Choose an operator");
let num2 = prompt("Choose second number");
let result;
opp === "+"
  ? (result = num1 + num2)
  : opp === "-"
  ? (result = num1 - num2)
  : opp === "*"
  ? (result = num1 * num2)
  : (result = num1 / num2);

console.log(`${num1} ${opp} ${num2} = ${result}`);
*/
