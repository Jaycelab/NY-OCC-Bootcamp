/**
 * Object Literals -- contains key-value pairs that are enclosed in { } and separated by comma
 *      --- a way to define and create objects in JS
 */

//object person
let person = {

  //add properties to the object
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  hobbies: ['reading', 'coding', 'hiking'],

  //add method to the object
  greet: function() {
      console.log(`Hello my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
  },

};

//Accessing object properties
console.log(person.firstName); //John
console.log(person.age); //25

//Modify object properties
person.lastName = 'Smith';
console.log(person.lastName); //Smith

//Access object method
person.greet(); //Hello, my name is John Smith. Nice to meet you!

//Add a new property to the object
person.nationality = 'American';
console.log(person.nationality); //American


//Add a new method to the object
person.introduce = function() {
  console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
}

person.introduce(); // I am John Smith. I am 25 years old. 

//Nesting objects

const address = {
  street: '123 Main St.',
  city: 'New York',
  country: 'USA',
}

console.log(address);
person.adress = address;


//object destructuring to extract properies
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); //John Smith 25

let person2 = {

  //add properties to the object
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  hobbies: ['reading', 'coding', 'hiking'],

 address: {
  street: '123 Main St.',
  city: 'New York',
  country: 'USA',
 },

 contact: {
  email: 'example@email.com',
  phone: '123-456'
 }
};

console.log(person2.firstName); //John
console.log(person2.address.city); //New York
console.log(person2.contact.email); //example@email.com