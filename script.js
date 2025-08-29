// DOM Manipulations
const myHeading = document.getElementById("main-heading");
console.log(myHeading);

const paragraph = document.querySelector(".first-paragraph")
// using getElementsByClassName
const para2 = document.getElementsByClassName("second-paragraph");
console.log(paragraph);
console.log(para2);
// Changing the text content
myHeading.style.color = "Blue";
myHeading.innerHTML = "Hello! This is changed from JS";
paragraph.textContent = "This is also changed from JS";
para2[0].innerHTML = "This is also changed from JS using getElementsByClassName";