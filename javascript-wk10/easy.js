/*
  Easy
*/

let array1 = [1, 2, 3];
let array2 = [3, 6, 4, 5, 2, 1];
let array3 = [3, 3, 3];

// arrow function that takes in an array as a parameter and logs to the console
// the array and the max value in the array
const findMax = (arr) => {
  console.log('input: [' + arr + ']' + ' output: ' + Math.max(...arr));
};
