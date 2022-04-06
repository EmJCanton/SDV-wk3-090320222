// // Create a function that takes an array containing only numbers and return the first element.
// // Example: gatArrElement([1, 2, 3, 4]) -> 1

// function getArrElement(arr) {
// return arr[0]
// }

// console.log(getArrElement([1,2,3,4]))

// const getOneLineArrElement = arr => arr [0]

// // Give two arguments, return an array which contains the sum of these two arguments

// function createArray(a, b) {
//     var arr = [a, b]
//     return arr
// }

// console.log (createArray(1, 2))

// // write a function to reverse an array
// // Example: reverseArray ([1, 2, 3, 4]) -> [4, 3, 2, 1]

// function reverseArray(arr) {     // Putting arr into the funtion brackets tells JS you will input an array?
//     return arr.reverse()     // JS .reverse() is an inbuilt function
// }

// console.log(reverseArray([1,2,3,4,5,6,7,8,9]))  // Put the array into square brackets to tell JS it is an array

// const oneReverseArray = arr => arr.reverse(); // same funtion in one line
// console.log(oneReverseArray([2,4,6,8,0]))

// // Create a function that accepts an array and returns the last element
// // Example lastElement(["Ali", 12, "blue", "green"]) -> Green

// function lastElement(arr) {
//     return arr.length(-1)  // You can use .length(-1), .slice(-1), or pop()
// }
// console.log(lastElement(["ali", 12, "blue", "green"]))

// // Create a function that takes an array and returns it as a string
// // arrayToString(["Ali", 12, "blue"]) -> Ali12blue

// function giveMeAString(arr) {
//     return arr.toString();                                                                   // .toString() can also be changed to .join('')
// }
// console.log(giveMeAString([1,2,3,4,5,"Ali"]))

// const result = giveMeAString([1,2,3,4,5,"Ali"])
// console.log(typeof result)                                                                   // tells you what type of data you are printing

// Create a funtion that takes an array and returns the data types of the array values in a new array
// arrayValueTypes(["Emma", 13, "green", [], true]) -> [string, number, string, object, boolean]

// function arrayValueTypes(arr) {                                                                 // declared a funtion
//     var newArray = [];                                                                          // declared a variable
//     for(var i = 0; i < arr.length; i++) {                                                       // i=value in an array, arrays start at 0, go through every value until you reach the end of the array
//         newArray[i] = typeof arr [i]                                                            // every value in the array is converted to its type (string, number, etc)
//     }

//     return newArray                                                                             // return "newArray" aka the converted values
// }
// console.log(arrayValueTypes(["Emma", 13, "green", [], true]))

// // const arrayValueTypes = arr => arr.map(x => typeof x)                                        // one line code
//Create a function taht takes two strings and return either true or false depending on whether the total
//number of the characters in the first string is equal to the total number of characters in the second string

//Example: compar("AB", "CD") -> true

// function compare(name1, name2) {
//     return name1.length === name2.length;
// }
// console.log(compare("AB", "CD"))

//Write a function that takes an array of elements and returns only the numbers in the array and console log the result in an array

// function onlyNumbers(arr) {
//  return arr.filter(element => typeof element === 'number')
// }
// console.log(onlyNumbers(["Emma", 21, 4, 5, "Abby", 10]))

/*
Write a function that converts an object to an array.
Example: objectToArray({a: "Ali", b:12}) -> [["a", "Ali"],["b",12]]
*/

// function objectToArray(obj) {
//     return Object.entries(obj); 
// }

// console.log(objectToArray({1: "banana", 2: 12}))

// // JavaScript
// function objectToArray(obj) {
//     var arr = {}
//     for (var i in obj) {
//         arr.push([i,obj[i]])
//     }
//     return arr
// }
// // ES6
// const objToArr = obj => Object.entries(obj)

//create a function that takes an array of arrays and returns a single new array with largest numbers of each.
//Example: findMaxNumbers([[1,2,3],[4,5,6],[7,8,9]]) -> [3,6,9]
function findMaxnumbers(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let maxNumber = arr[i][0]
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > maxNumber) {
                maxNumber = arr[i][j]
            }
        }
        newArr.push(maxNumber)
    }
    return newArr
}
console.log (findMaxnumbers([[1,2,3], [4,5,6], [7,8,9]]))

// ES6 (homework)