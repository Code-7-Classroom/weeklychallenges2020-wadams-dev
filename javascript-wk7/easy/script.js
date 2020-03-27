/*
   EASY: ​Create an array of students holding their last name, first name, and age with 3 students.
   To validate, please log a greeting with the first name, last name and age of the 2nd student.
   The output should look like "Hello, my name is John Doe and I'm 19 years old." 
*/

//array of students
var students = [
    ['Thomas','Eric', 49],
    ['Goggins','David', 45],
    ['Vaynerchuk','Gary', 44]
];

//obtain values from array for 2nd student
var firstName = students[1][1];
var lastName = students[1][0];
var age = students[1][2];

//log greeting to the console
console.log(`Hello, my name is ${firstName} ${lastName} and I'm ${age} years old.`);

