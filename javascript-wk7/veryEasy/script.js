/*
    VERY EASY: Write a function named min that takes two arguments and returns their minimum.
*/

//function takes two arguments and returns the minimum
function min(firstNumber,secondNumber){
    return firstNumber > secondNumber ? secondNumber : firstNumber;
}

//log function return value
console.log(min(5,10));