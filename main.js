console.log("Hello,this is my first Javascript file!");

//Variables
//Declare variables using let, const, or var

// var
var name = "John";
console.log(name);

// Let
let age = 30;
age = 31;
console.log(age);

// Const
const pi = 3.14;
console.log(pi);

// Data Types
// String (you can use single or double quotes)
let greeting = "How are you?";
console.log(greeting);

// Number (integer or float)
// Integer
let year = 2024;
console.log(year);
//Float
let price = 19.99;
console.log(price);

// Boolean ( true or false)
let isLoggedIn = true;
console.log(isLoggedIn);

// Undefined (variable without a value)
let notDefined;
console.log(notDefined);

// Null (explicitly no value)
let emptyValue = null;
console.log(emptyValue);

//Objects
let person= {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    isStudent: true
}
console.log(person);

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let mixedArray = [1, "Hello", true, null];
console.log(mixedArray);

// Concatenation
let surname = "Smith";
let givenName = "Ssemwanga";
let otherName = "John";
const fullName = surname + " " + givenName + " " + otherName;
console.log(fullName);