/*
  Very Hard
*/

const uniqueLetter = (string) => {
  let counter = 0;
  //turn string into array
  let arr = string.split('');
  //loop through each index in new array
  for(let i = 0; i < arr.length; i++){
    //compare each index against entire string
    for(let j = 0; j < arr.length; j++){
        if (arr[i] === arr[j]){
          counter++;
        }
    }

    if (counter > 1){
      counter = 0;
    } else{
      return arr[i];
    }
  }
}

let string3 = 'what a wonderful day it has been!';
let string2 = 'this hat is the greatest!';
let string1 = 'the quick brown fox jumps over the calm kitten quietly';

console.log(uniqueLetter(string1));
console.log(uniqueLetter(string2));
console.log(uniqueLetter(string3));
