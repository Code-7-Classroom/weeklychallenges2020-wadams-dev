/*
HARD: Create 4 math functions, one called add() that adds 2 numbers, one called
subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers,
and one called divide() to divide two numbers.
*/


// declare variable to be used inside function
var answer;

//addition function
function add(firstNumber, secondNumber){
  answer = parseFloat(firstNumber) + parseFloat(secondNumber);
  console.log(firstNumber + ' + ' + secondNumber + ' = ' + answer);
}

//subtraction function
function subtract(firstNumber, secondNumber){
  answer = parseFloat(firstNumber) - parseFloat(secondNumber);
  console.log(firstNumber + ' - ' + secondNumber + ' = ' + answer);
}

//multiplication function
function multiply(firstNumber, secondNumber){
  answer = parseFloat(firstNumber) * parseFloat(secondNumber);
  console.log(firstNumber + ' * ' + secondNumber + ' = ' + answer);
}

//division function
function divide(firstNumber, secondNumber){
  answer = parseFloat(firstNumber) / parseFloat(secondNumber);
  console.log(firstNumber + ' / ' + secondNumber + ' = ' + answer);
}

//call function
add(5,10);
subtract(12,6);
divide(50,10);
multiply(3,4);
