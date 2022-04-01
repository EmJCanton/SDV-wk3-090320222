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

// // DataTypes (catch up, read SDV book)
// /*
// 1- Numbers
// 2- Boolean
// 3- Strings
// 4- Objects
// */

// let a = 1 // a number DataType
// let b = "hello" // b is a string
// let c = true // c is a boolean DataType
// let d; // d is undefined DataType

// // Line 115 is declaring a variable, varible type let, variable name c

// let sum = "1"+"1" // Using quotations makes thing a string/text
// console.log(sum)

// let sumcorr = 1+1 // numbers are recognised correctly
// console.log(sumcorr)

// let numint = 3.334566 // C# will not work with decimal places, but JS is fine
// console.log(numint)

// let divide = 3 / "Emma" // returned NaN, if you put a number in quotes, JS will act correctly
// console.log(divide)

// let text = 3 / 0 // returns infinity
// console.log(text)

// const value1 = '5';
// const value2 = 9;
// let sumb = value1 + value2; // when added seperately, strings and numbers work together

// console.log(sum);

// let str = "Emma Canton"
// let str1 = "NMIT"
// let fullstr = str + " " + str1 // Add multiple strings together to create sentences
// console.log(fullstr)

// // String Templates
// let newstring = `Hello to my new string! My name is ${str} and I am a student at ${str1}`
// console.log(newstring)

// const value1 = '5';
// const value2 = 9;
// let sum = Number(value1) + value2; // using the tag "Number" tells JS to treat it as a normal number
// console.log(sum)

// let alphabet = 'a'
// console.log(Number(alphabet)); // returns NaN

// let alphabet2 = '4'
// console.log(Number(alphabet2)); // works

// let output = `The Sum of value1 and value2 is ${sum}` // returns line 152 with surrounding context
// console.log(output)

// // Boolean type uses only true and false
// let bol = true
// console.log(bol)

// console.log(5 > 3)
// // >= or <= or +==
// console.log(4 >= 7)
// let text = ["hello", "Emma", 21, 2013] //This is an array (square brackets), items are numbered, started at 0
// console.log(text[2]) //  prints off the THIRD string in the array

// for(i=0; i<text.length; i++) { //checks the array in "text", i=index, .length tells 1 to only go as far as the array does, i++ tells to include all items in the array IN ORDER
//     console.log(text[i])
// }
// // objects
//  var cat = {
//      fur: 'black',
//      whiskers: 'many',
//      paws: 5
    
//  }
//  console.log(cat)

let color = "black"
let name = "Vexxy"
let paws = 4
let fur = "fluffy"
let sentence = `Hello! I have a cat named ${name}, she is ${color} with ${fur} fur. Her ${paws} paws are very cute! Her favourite toys/games are:`
console.log(sentence)
let toys = ["string", "balls", "hide and seek"]
for (i=0; i<=toys.length; i++) {
    console.log(toys[i])
}
let male = false
let female = true
if (female) {
    console.log(`Vexxy is ${female}`) // YAY :)
}

// What is a funtion?
/*
A function in JavaScript is similar to a proceedure - a set of statements that performs a task
or calculates a value, but for a procedure to qualify as a function, it should take some input
and return an output where there is some obvious relationship between the input and the output.
*/