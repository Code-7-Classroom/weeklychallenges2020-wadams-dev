/*
EASY: Create two variables and assign a person’s name to each. Console log
a statement that says which name is shorter or longer, and by how many characters.
Example output: “The name Thomas is longer than John by 2 characters”
*/


//create two variables and assign a persons name to each
var firstName = 'samantha';
var secondName = 'jane';
//declare difference variable
var difference;

//conditional statement that determines which name is shorter or longer and by how many characters.
//if the name lengths are the same, message stating so will print to the console.
if(firstName.length > secondName.length){
  difference = firstName.length - secondName.length;
  console.log('The name ' + firstName + ' is longer than ' + secondName + ' by ' + difference + ' character(s).');
} else if (firstName.length < secondName.length) {
  difference = secondName.length - firstName.length;
  console.log('The name ' + secondName + ' is longer than ' + firstName + ' by ' + difference + ' character(s).');
} else {
  console.log('The names are the same length.');
}
