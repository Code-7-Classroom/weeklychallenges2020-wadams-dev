/*
    MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console
    that number and its corresponding month. For example: if the user enters the number 3, 
    then it should return the month “March.” Alert the user if they enter an invalid number 
    (e.g. less than 1 or greater than 12).
*/

//prompt user for a value and parse value into a floating number
var month = parseFloat(prompt("Enter a number that correlates with a month (e.g. 1-12):"));

//conditonal statement that checks for month value and logs to console if month value matches case
switch(month){
    case 1:
        console.log(month + " January");
        break;
    case 2:
        console.log(month + " February");
        break;
    case 3:
        console.log(month + " March");
        break;
    case 4:
        console.log(month + " April");
        break;
    case 5:
        console.log(month + " May");
        break;
    case 6:
        console.log(month + " June");
        break;
    case 7:
        console.log(month + " July");
        break;
    case 8:
        console.log(month + " August");
        break;
    case 9:
        console.log(month + " September");
        break;
    case 10:
        console.log(month + " October");
        break;
    case 11:
        console.log(month + " November");
        break;
    case 12:
        console.log(month + " December");
        break;
    default:
        alert("Enter a number greater than 0 and less than 13 (e.g. 1-12):");
}
