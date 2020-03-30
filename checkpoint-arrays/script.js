// .push(), .pop(), .slice()

var drinks = [];
drinks.push('coffee');
drinks.push('water');
drinks.push('tea');
console.log(drinks);

var foods = [];
foods.push('apple');
foods.push('sandwich');
foods.push('chips');
console.log(foods);

var meals = drinks.concat(foods);
console.log(meals);


var mealsReversed = meals.reverse();
console.log(mealsReversed);