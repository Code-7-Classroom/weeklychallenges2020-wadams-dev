/*
  Medium
*/

function cutPizzaSlices(slices){
    return slices;
}

function sharePizza(people){
    var sharePizza = cutPizzaSlices(8);
    var slicesPerPerson = (sharePizza / people).toFixed(2);
    return `Each person gets ${slicesPerPerson} slices of pizza`;
}

console.log(sharePizza(2));
console.log(sharePizza(3));
