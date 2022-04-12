// Create a function that takes a number from (1-12) and returns it's corresponding month
// Example: nameOfMonth(3) -> "March"
function nameOfMonth(num) {
    let answer = ""
    switch (num) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Error");
            break;
    }
    return answer;
}
nameOfMonth(2)

// Same function again, but using if/else statements instead of switch
function whatsTheMonth(num) {
    if (num === 1) {
        return "January";
    } else if (num === 2) {
        return "February";
    } else if (num === 3) {
        return "March";
    } else if (num === 4) {
        return "April";
    } else if (num === 5) {
        return "May";
    } else if (num === 6) {
        return "June";
    } else if (num === 7) {
        return "July";
    } else if (num === 8) {
        return "August";
    } else if (num === 9) {
        return "September";
    } else if (num === 10) {
        return "October";
    } else if (num === 11) {
        return "November";
    } else if (num === 12) {
        return "December";
    } else
    return "Error"
}
 console.log(whatsTheMonth(12))

 // Same again but using a simple array method
 function numToMonth (num){
    num = Number(num)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[num - 1]
}
console.log(numToMonth(3))

// Write a function that given date (mm/dd/yy) returns the day of the week in a string (NOT WORKING)
function getDate(day) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var date = new Date(day)
    return days[date.getDay()]
}
console.log(getDate(05/13/2022))

// Create a funtion that returns true if the length of the string is even and false if the length of the string is odd
function evenOrOdd(str) {
    if (str.length % 2 === 0) {
        return true;
    } else
    return false;
}
console.log(evenOrOdd("Abigail"))

// Tristan's method:
function isItEven(string) {
    var len = string.length
    return (len/2 == Math.round(len/2))
}

// ES6
const isEven = (string) => string.length % 2 == 0

// New test for date - system not lining up
// const currentDate = new Date()
// console.log(currentDate)

// Create a function that takes two arguments, first is an array and second is a string. The string finds the index number of the corresponding item in the array.
// Example: indexArray(["Ali", "Kahwaji", "NMIT", "Nelson"], "NMIT") -> 2

function indexArray(array, string) {
    return array.indexOf(string)
}
console.log(indexArray(["Emma", "Canton", "Student", "Nelson"], "Nelson")) // -> 3 (REMEMBER: index starts at 0)

// ES6
const getIndex = (array, string) => array.findIndex(val => val === string)

// Create a function which returns the total of all odd numbers up to and including the number pass in as param.
// Example: oddNumbersSum(5) -> 9 
// Example: oddNumbersSum(13) -> 49 

function oddNumbersSum(num) {
    let total = 0
    for (let i = 1; i <= num; i+=2) {
        total += i
    }
    return total
}
console.log(oddNumbersSum(15))
 
// Create a function that takes an array of strings and numbers and filter out the array so it returns only an array of numbers
// Example: onlyNumbers(["Ali", 7010, "Kahwaji", 2022]) -> [7010,2022]
function numbersOnly(arr) {
    return arr.filter(val => Number.isInteger(val))
}
console.log(numbersOnly(["Emma", 13, "February", 1990]))
