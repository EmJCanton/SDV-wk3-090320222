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

// Create a function that takes an array and returns it as a string
// arrayToString(["Ali", 12, "blue"]) -> Ali12blue

function giveMeAString(arr) {
    return arr.toString();                                                                   // .toString() can also be changed to .join('')
}
console.log(giveMeAString([1,2,3,4,5,"Ali"]))

const result = giveMeAString([1,2,3,4,5,"Ali"])
console.log(typeof result)                                                                   // tells you what type of data you are printing