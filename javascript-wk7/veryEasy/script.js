/*
    VERY EASY: Write a function named min that takes two arguments and returns their minimum.
*/

var firstNumber =  parseFloat(prompt("Enter your first number: "));
var secondNumber = parseFloat(prompt("Enter your second number: "));

//solution to the challenge using the ternary operator
function min(firstNumber,secondNumber){
    return firstNumber > secondNumber ? secondNumber : firstNumber;
}

console.log(min(firstNumber,secondNumber));

/*
**function that returns minimum or if the items are equal

function min(firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        return secondNumber;
    } else if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return "The numbers are equal.";
    }
}

console.log(min(firstNumber,secondNumber));
*/