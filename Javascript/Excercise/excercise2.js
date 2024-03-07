//Function Basics
let greet = (name) => {
  console.log(`Hello + ${name}`);
};

greet("Jason");

//Is Even
let isEven = (num) =>
  num % 2 === 0
    ? console.log(`${num} is even`)
    : console.log(`${num} is false`);
isEven(2);

//HOF
let calc = (num1, num2, callback) => {
  let result = callback(num1, num2);
  console.log("Result: ", result);
};

sum = (num1, num2) => {
  return num1 + num2;
};

diff = (num1, num2) => {
  return num1 - num2;
};

mul = (num1, num2) => {
  return num1 * num2;
};

div = (num1, num2) => {
  return num1 / num2;
};

calc(5, 6, mul);

let applyFunction = (func, arr) => {};
