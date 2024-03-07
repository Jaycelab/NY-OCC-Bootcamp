/**
 * Functions -- written to perform a specific task;
 *      -- can be reused whenever needed
 * 
 * //Syntax:
 *          'function' keyword <function_name> ( <parameter/s> ) {
 *              <code block>        
 *            }
 * 
 * //to call a function
 *          <function_name>()

*/

//Function Declaration
function greet() {
  console.log("Hello world!");
}

greet();

//Function parameters and arguments
function greeting(name) {
  console.log("Hi! I am " + name + "!");
}

greeting("Joseph");

//return statement
function add(num1, num2) {
  return num1 + num2;
}

let sum = add(3, 5);
console.log(sum);

//multiple parameters and arguments
function fullName(fName, lName) {
  console.log("Full Name: " + fName + " " + lName);
}

fullName("John", "Doe");

//Function Expressons
let square = function (x) {
  return x * x;
};

console.log(square(4));
console.log(square(8));

//Function Hoisting
meet();

function meet() {
  console.log("Hey! This is function hoisting");
}

//Function Hoisting will not work on Function Expressions
// let meet = function() {
//     console.log('Hey! This is function hoisting');
// }

//Anonymous Functions
let anon = function () {
  console.log("This is an anonymous function.");
};

anon();

// == VARIABLE SCOPES == //

//Global Scope -- variables are accessible from anywhere in your code

let globalVar = "I am a global variable.";

// function accessVar() {
//     console.log(globalVar);
// };

// accessVar();

//Local Scope -- variables are only accessible within a function or block

function accessVar() {
  let localVar = "I am a local variable.";
  console.log(localVar);
}

accessVar();

// console.log(localVar);
console.log(globalVar);

// == Nested Functions == //
function outerFunction() {
  let outerVar = "I am from the outer function.";

  function innerFunction() {
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction();

// == Higher Order Functions (HOF) ==//
/**
 * 1. Take functions as arguments
 * 2. Return a function or perform operation on functions
 */

//Functions as an argument
function firstName(name) {
  console.log("Hi " + name);
}

function sayHi(greetFunction) {
  greetFunction("Alice");
}

sayHi(firstName);

//Functions as an argument
function applyOperation(x, y, operation) {
  return operation(x, y);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let result1 = applyOperation(4, 3, add);
let result2 = applyOperation(6, 3, subtract);

//Function as a Return Value
function multiply(factor) {
  return function (x) {
    return x * factor;
  };
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5));
console.log(triple(5));

// == Callback Functions == //
//function that is passed as an argument to another function

function greet2(my_name, callback) {
  console.log(" Hello " + my_name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

//Callback Usage
greet2("Jon", sayBye);

//Callback with HOF
//HOF
function performOperation(x, y, operationCallback) {
  let result = operationCallback(x, y);
  console.log("Result: ", result);
}

//Callback
function sum2(a, b) {
  return a + b;
}

//Callback
function diff(a, b) {
  return a - b;
}

performOperation(3, 4, sum2);
performOperation(8, 4, diff);
