conditionals.js
/**
 * CONDITIONAL STATEMENTS -- allow us to make decisions beasede on certain condtions. 
 * 
 * JS LOOPS -- allow us to repeat a set of instructions multiple times;
 *         -- used to repeatedly execute a block of code until a specific condition is met 
 */

console.log('//--- Condtional Statements ---//');

console.log('--- If-else --- ');
//if..else -- allows you to create a program that runs only if a specific condition is met.
let age = 20;

if(age >= 18) {
    console.log('You can now vote');
} else {
    console.log("You can't vote");
}

//nested if...else
let temp = 25;

if(temp < 0) {
    console.log('It is freezing');
} else if ( temp >= 0 && temp < 20) {
    console.log('It is a cool day')
} else {
    console.log('It is a warm day')
}

console.log('--- Switch Case --- ');

/**
 * switch..case statement -- allows you to control the execution flow of your code
 
3 keywords:
    case : keyword for starting a case block
    break : keyword for stopping the switch statement from running the next code
    default : keyword for running a code when there's no matching case found 
 */

let day = 'Tuesday';

switch(day) {
    case 'Monday' : 
        console.log('It is Monday. Start of the week');
        break;
    case 'Friday' : 
        console.log('It is Friday. End of the week');
        break;
    default:
        console.log('It is a regular day.');
        break;
}

let num = 7;
switch(num) {
    case 1: 
        console.log('The number is one');
        break;
    case 2: 
        console.log('The number is 2');
        break;
    case 3: 
        console.log('The number is 3');
        break;
    case 8: 
        console.log('The number is 8');
        break;
    case 7: 
        console.log('The number is 7');
        break;
    default:
        console.log('The number is greater than 7');
        break;