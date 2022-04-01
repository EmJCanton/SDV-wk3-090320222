// var notMyName = "Lawrence";
// var myCourse = "JavaScript";
// console.log(notMyName)
// // alert("Welcome");
// var myAge = 40;
// console.log(myAge);

/*
You can write a bunch of stuff here and nothing will be rendered out. Secret for Web Developers
*/

// // Declare a welcome variable
// var welcome = "Welcome to My Space!"
// // Print the message on the console
// console.log(welcome)

// // Declare variable my name, with a value of my friend's name
// var myName = "Jessica"
// // Print the variable on the console
// console.log(myName)

// // Using Boolean (???)
// var message;
// console.log(message);
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if (myLight) {
//     console.log(myLight);
// }
// var score1, score2, score3, score4;
// var a = "Hello"
// var b = 10;
// var c = false;
// console.log(a);

// change var for const and you will get an error message, as const values cannot be changed and are read only
// var name = "SDV503"
// console.log(name)
// name = "Emma"
// console.log(name)

// // Lets use "let" instead
// let name = "SDV503"
// console.log(name)
// name = "Emma"
// console.log(name)

// 1 - Local scope - objects within {} can only be accessed from inside
// 2 - Global scope - objects sitting outside of {}

// const msg = "Hello World"
// console.log(msg)

// if(false) {
//     const msg = "Hello World"
//     console.log(msg)
// }

// if(true) {
//     const msg = "Hello World"
//     console.log(msg)
// }

// // Local - Block Scope 
// if(false) {
//     const msg = "Hello World"
//     console.log(msg)
// }
// console.log(msg)

// // Local - Function Scope
// function call() {
//     var msg = "Hello World"
//     console.log(msg)
// }

// console.log(call())
// // console.log(msg)

// var msg = "Hello Banana World"

// function readMsg() {
//     console.log(msg)
// }

// console.log(readMsg())

// // Keyword Lexical Scope

// function outerFunc() {
//     var msg = "Goodbye World"

//     function innerFunc() {
//         console.log(msg)
//     }

//     console.log(innerFunc())
// }

// console.log(outerFunc())

// DataTypes (catch up, read SDV book)
/*
1- Numbers
2- Boolean
3- Strings
4- Objects
*/

let a = 1 // a number DataType
let b = "hello" // b is a string
let c = true // c is a boolean DataType
let d; // d is undefined DataType

// Line 115 is declaring a variable, varible type let, variable name c

let sum = "1"+"1" // Using quotations makes thing a string/text
console.log(sum)

let sumcorr = 1+1 // numbers are recognised correctly
console.log(sumcorr)

let numint = 3.334566 // C# will not work with decimal places, but JS is fine
console.log(numint)

let divide = 3 / "Emma" // returned NaN, if you put a number in quotes, JS will act correctly
console.log(divide)

let text = 3 / 0 // returns infinity
console.log(text)

const value1 = '5';
const value2 = 9;
let sumb = value1 + value2;

console.log(sum);