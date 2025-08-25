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
let person = {
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

// Conditional Statements
let score;
score = 45;
if (score) {
    // code to be executed if condition is true
    console.log("You passed!");

} else {
    // code to be executed if condition is false
    console.log("You failed!");

}
//Comparison Operators
// Equal to (==) and strict equal to (===)
let value;
value = "10";
if (value === 10) {
    console.log("True, they are equal"); // This will not execute
}
if(value== 10) {
    console.log("True, they are equal"); 
}
// Not equal to (!=) and strict not equal to (!==)
let val;
val = 20;
if (val !== "20") {
    console.log("True, they are not equal"); // This will execute
}

if (val !=="20") {
    console.log("True, they are not equal");
}

//More than two conditions
let num;
num =96;
if (num >=95) {
    console.log("Grade A");
} else if (num >= 85) {
    console.log("Grade B");
}else if(num >= 75) {
    console.log("Grade C");

} else {
    console.log("You have totally failed!");
}

// Functions
//Function Declaration
function functionName() {
    console.log ("This is a function declaration");
}
// Call the function
functionName();

// Function with parameters
function greet(name) {
    console.log("Hello, How are you " + name + "?");
}
greet("Brenda");
greet("Merab");
greet("Ahereza");
greet("Denise");
greet("Catherine");

// Function with return value
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(5));
console.log(add(7,8));
console.log(add());

// Arrow Functions
const multiply =function (x, y){
    return x * y;
}
// or using ES6 arrow function syntax
const arrowFunc = () => {
    console.log("This is an arrow function");
}
const multiplyArrow = (x, y) => x * y;
console.log(multiply(3, 4));
console.log("This is the result of arrow function: " + multiplyArrow(3, 4));

// Arrow function with multiple lines
const complexFunction = (a, b) => {
    let sum = a + b;
    let product = a * b;
    let diff = b- a;

    return {sum: sum, product, difference: diff};
}
console.log(complexFunction(5, 6));

// Loops
// For Loop
const colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors)
// Methods under arrays i.e push, pop, shift, unshift, length, indexOf,includes,slice, splice, join
// Length
console.log(colors.length) // 4
console.log(colors[1]) // Green
console.log(colors[3]) // Yellow

// push
//colors.push("Purple") // adds an element to the end of the array
//console.log(colors) // ["Red", "Green", "Blue", "Yellow", "Purple]

// Pop
//colors.pop() // removes the last element
//console.log(colors) // ["Red", "Green", "Blue", "Yellow"]

// splice
colors.splice(2, 1) 
console.log(colors)

//shift
colors.shift() // removes the first element
console.log(colors) 

//unshift
//colors.unshift("Orange") // adds an element to the beginning of the array
//console.log(colors)

// IndexOf
let index = colors.indexOf("Blue")
colors.log(index)
colors.splice(index, 1)
console.log(colors)

//Indexing

console.log("Red");
console.log("Green");
console.log("Blue");
console.log("Yellow");

//Using a for loop to iterate through the array
for (let i = 0; i < colors.length; i++) {
    console.log("This is from the loop ", colors[i]);
}

// While Loop
