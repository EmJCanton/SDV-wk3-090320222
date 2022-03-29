console.log("Hello")
console.log("Emma-Jane Canton")
// TODO:

// NOTE: 
/*
Ola amigooooooos!
I can write whatever here!
Because I have used the group comment tags! (slash asterisk to open, asterisk slash to close)

If I want to run this piece of javascript, I go to the command line and type in "node app.js"
Try it now!
*/

// Print "Hello World"
console.log("Hello World")
// Declare Variable "a" with value of "Hello World" (value in quotations is a string)
var a = "Hello World";
// Print Variable "a"
console.log(a);

// Declare variable "myName"
var myName = "Lawrence";
// Declare variable "myCourse"
var myCourse = "JavaScript";
// Print "myName"
console.log(myName)
// give a browser pop-up alert message
// alert("Welcome");
// Declare variable "myAge"
var myAge = 40;
// Print variable "myAge"
console.log(myAge);

// grab text input and return a combined message
document.querySelector("button").addEventListener("click", function (){
    document.querySelector("div").textContent = "Hello, " + document.querySelector("input").value;
})