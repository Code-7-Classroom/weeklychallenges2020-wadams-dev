/*
MEDIUM: Write a program to tell if someone is shouting (typing in all caps),
whispering (typing in all lowercase), or neither. Use prompt to get user input,
and then console log whether the user was shouting, whispering, or talking normally.
*/


//prompt user and store user response in variable
var userAnswer = prompt('Please enter your favorite day of the week: ');

//conditionals to see if the user input was all caps, all lowercase or neither
if (userAnswer === userAnswer.toUpperCase()) {
  console.log('The user was shouting.');
} else if (userAnswer === userAnswer.toLowerCase()) {
  console.log('The user was whispering.');
} else {
  console.log('The user was talking normally.');
}
