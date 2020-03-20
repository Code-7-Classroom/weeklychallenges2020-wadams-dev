/*
VERY HARD: Create a simple calculator that prompts the user
for a number, an operator (either +, -, * or /) and another number,
and then uses the functions created in the hard challenge to
output the value in sentence form. Example output: "3 + 4 = 7"
*/


//declare variables and prompt user for input and then store input
var firstNumber = prompt('Enter a number: ');
var operator = prompt('Enter an operator ( + , - , * or / ): ');
var secondNumber = prompt('Enter a second number: ');
var answer;

// addition functions
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

// division function
function divide(firstNumber, secondNumber){
  answer = parseFloat(firstNumber) / parseFloat(secondNumber);
  console.log(firstNumber + ' / ' + secondNumber + ' = ' + answer);
}

//switch statement that calls the functions that correlates to what user input
switch(true) {
  case operator === '+':
    add(firstNumber, secondNumber);
    break;
  case operator === '-':
    subtract(firstNumber, secondNumber);
    break;
  case operator === '*':
    multiply(firstNumber, secondNumber);
    break;
  case operator === '/':
    divide(firstNumber, secondNumber);
    break;
  default :
    console.log('Try Again. Please answer each prompt correctly.');
}

// if else statement that call the functions that correlates to what user input
/*if (operator === '+'){
  add(firstNumber, secondNumber);
} else if (operator === '-') {
  subtract(firstNumber, secondNumber);
} else if (operator === '*') {
  multiply(firstNumber, secondNumber);
} else if (operator === '/') {
  divide(firstNumber, secondNumber);
} else {
  console.log('Try Again. Please answer each prompt correcty.');
}*/
