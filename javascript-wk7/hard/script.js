/*
    HARD: Given the information below for Tom and Jerry.
    Tom - height: 9in mass: 8 lbs
    Jerry - height: 10cm mass: 45 g
    Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
​    BMI = mass / height ^2 = mass / (height * height)
    Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable 
    containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the 
    variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

//store tom and jerry height, mass, and bmi
var tomHeight = 9;//inches
var tomMass = 8;//pounds
var tomBMI = bmi(tomMass,tomHeight);

var jerryHeight = 10/2.54;//convert centimeters to inches by dividing value by 2.54
var jerryMass = 45/454;//convert grams to pounds by dividing value by 454
var jerryBMI = bmi(jerryMass,jerryHeight);

//calculate BMI using US customary system formula
function bmi(mass,height){
    var bmi = 703 * (mass / Math.pow(height, 2));
    bmi = parseFloat(bmi.toFixed(1));//bmi value has only 1 digit after decimal (ex. 20.1)
    return bmi;
}

//compare BMI's
var tomHasHigherBMI = tomBMI > jerryBMI;

//log string to console with the tomHasHigherBMI value
console.log(`Is Tom's BMI higher than Jerry's? ${tomHasHigherBMI}`);
