//1) .push(), .pop(), .slice()


function addDrink(item){
    drinks.push(item);
}

function addFood(item){
    foods.push(item);
}

var drinks = [];
addDrink('water');
addDrink('coffee');
addDrink('tea');
console.log(drinks);

var foods = [];
addFood('apple');
addFood('sandwich');
addFood('chips');
console.log(foods);

var meals = drinks.concat(foods);
console.log(meals);


var mealsReversed = meals.reverse();
console.log(mealsReversed);
