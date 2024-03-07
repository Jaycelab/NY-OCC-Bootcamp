// Variables

const my_name = "Princess";
let my_age = 18;
// Variables

const my_name = "Princess";
let my_age = 18;

console.log(my_name);
console.log(my_age);

// === DATA TYPES === //

/**
 * Primitive Data Types - most basic data type in JS
 */

console.log('--- Primitive Data Types --- ');

//Numbers
let my_num1 = 20;
let my_num2 = 90.8;

console.log('This is a number: ', my_num1, my_num2 );
console.log(typeof my_num1);

//String
let my_string = 'Hello World!';
console.log('This is a string: ', my_string);
console.log(typeof my_string);

//Boolean -- True or false
let isStudent = false;
console.log('This is a Boolean: ', isStudent);
console.log(typeof boolean);

//Undefined -- uninitialized or missing value
let myUndefinedVar;
console.log(myUndefinedVar);
console.log(typeof myUndefinedVar);

//Null -- empty; intentional absence
const myNull = null;
console.log(myNull);
console.log(typeof myNull);

/**
 * Reference Data Types -- holds more complex data types
 */
console.log('--- Reference Data Types --- ');

//Objects -- represents a collection of key-value pairs, enclosed in { }
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person);
console.log(person.name);

//Array -- represents an ordered list of values, enclosed in [ ]
let numbers = [ 1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers[1]);

//Function -- represents reusable blocls of codes that can be invoked by name
function greet(name) {
    console.log('Hello ' + name);
};

greet('Alice');

//Date 
const today = new Date();
console.log(today);