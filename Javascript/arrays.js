/**
 * Arrays - can hold more than one value at a time.
 *          -- enclosed in [ ] and separated by commas
 *
 *      index -- where each item is stored
 *          -- always starts at index 0
 */

let fruits = ["Apple", "Banana", "Orange", "Mango"];

//empty array
let emptyArray = [];

//array of mixed values
let mixedArray = ["Bird", true, 12, 3.5];

console.log(fruits);
console.log(fruits[0], fruits[2]);

// == Modifying Array Elements == //

//updating index
fruits[1] = "Grapes";
console.log("Updated index[1]: ", fruits[1]);

//push() -- add one or more elements at the end of an array
fruits.push("Lemon");
console.log("Using push() : ", fruits);

//pop() -- removes the last element of an array
fruits.pop();
console.log("Using pop(): ", fruits);

//shift() -- removes the first element of an array
fruits.shift();
console.log("Using shift(): ", fruits);

//unshift() -- add item in front of the array
fruits.unshift("Corn");
console.log("Using unshift(): ", fruits);

//splice()
fruits.splice(2, 1, "Watermelon");
console.log("Using splice(): ", fruits);
//splice(<target index> , <remove item>, <insert item>)

let colors = ["red", "green", "purple"];
console.log(colors);

//remove 2nd item at index[1]
colors.splice(1, 1);
console.log(colors);

//insert 'blue' at index[1]
colors.splice(1, 0, "blue");
console.log(colors);

//slice()
//new array containing elements from index[1] (inclusive) to index[2] exclusive
let slicedFruits = fruits[(1, 3)];
//slice(<starting index -- index of the first item to include <inclusive> ,
//      <ending index -- index of the item after the last item to include <exclusive> )
console.log("Old array: ", fruits);
console.log("Sliced array: ", slicedFruits);

let numbers = [1, 2, 3, 4, 5];
let slicedNum = numbers.slice(2, 4);
console.log(numbers);
console.log(slicedNum);

//length -- used to get the size of an array
let numberOfFruits = fruits.length;
console.log("Fruits array length: ", numberOfFruits);
console.log("slicedFruits array length: ", slicedFruits.length);

//indexOf -- used to find and return the index of an item in an array
let indexx = fruits.indexOf("Watermelon");
console.log(fruits);
console.log("Watermelon is at index: ", indexx);

//Looping thru array

let fruits2 = ["Coconut", "Strawberry", "Blueberry", "Raspberry"];

//for loop
for (let i = 0; i < fruits2.length; i++) {
  console.log("for loop: ", fruits2[i]);
}

//forEach Loop
fruits.forEach(function (fruit2) {
  console.log("forEach loop: ", fruits2);
});
