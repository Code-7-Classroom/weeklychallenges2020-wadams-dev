//add eventListeners to each button. When button is clicked, changeColor function is called
//with an argument
document.getElementById('btn--r').addEventListener('click', function(){changeColor('red')});
document.getElementById('btn--w').addEventListener('click', function(){changeColor('white')});

//arrow function that takes in a class as a string
const changeColor = (className) => {
  let body = document.querySelector('body');
  //remove all classes that are on the body element
  body.className = '';
  //add the class passed in to the body
  body.classList.add(className);
}
