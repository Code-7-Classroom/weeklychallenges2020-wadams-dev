/*
  Medium
*/

let array1 = [1, 4, 7];
let array2 = [10, 5];
let array3 = [1.5, 3, 2.5, 1];

// arrow function that takes in an array as a parameter and logs to the console
// the array and the average of the values in the array
const findAverage = (array) => {
  let sum = 0;
  let average;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  average = sum/array.length;
  console.log('input: [' + array + ']' + ' output: ' + average);
};
