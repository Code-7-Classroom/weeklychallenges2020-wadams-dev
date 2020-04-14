/*
  Medium
*/

//array of numbers
var nums = [4,5,6,7,0,1,2];

//function that takes in a number and returns the index of that number in above array
function findTarget(target){
    return nums.indexOf(target);
}

//log result of the function with arguments to console
console.log(findTarget(0));// 4 is logged to console
console.log(findTarget(3));// -1 is logged to console
