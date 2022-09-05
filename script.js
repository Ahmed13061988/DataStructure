'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day-${[weekDays[5]]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is you deliciuos pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    if (otherIngredients.length === 0) {
      console.log(`Your order is ${mainIngredient} Pizza`);
    } else {
      console.log(
        `Your order is ${mainIngredient} pizza with ${otherIngredients}`
      );
    }
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { name, openingHours, categories } = restaurant;
// //console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// //console.log(restaurantName, hours, tags);

// const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //Mutating a variables in Object
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// //console.log(a, b);

// //Nested object distruction
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// //console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   startIndex: 2,
// });
// const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [first, second] = restaurant.categories;

// const [, , third, forth] = restaurant.categories;

// console.log(first, second);

// console.log(third, forth);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// [first, second] = [second, first];
// console.log([first, second]);
//console.log(restaurant.order(2, 1));

//Nested distructuring
// const nested = [2, 4, [5, 6]];

// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// let [firstIndex, , secondIndex] = nested;
// let [first, second] = secondIndex;
// console.log(firstIndex, first, second);

//Default values
// const [p = 1, q = 1, r = 1] = [8, 9]; //Setting a default value
// console.log(p, q, r);
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];

// //console.log(newMenu);

// //Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two arrays together
// const menu1 = [...restaurant.starterMenu, ...mainMenuCopy];
// //console.log(menu1);

// //iterables are arrays, strings, maps and sets. Not objects

// //String example
// const str = 'Ahmed';
// const letters = [...str, ' ', 'H.'];
// // console.log(letters);

// //Real world example
// // const ingredients = [
// //   prompt("let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// // restaurant.orderPasta(...ingredients);

// //Objects

// // const newRestaurant = { ...restaurant, rating: '5 stars' };

// // console.log(newRestaurant, 'here');

// const [f, d, ...others] = [1, 2, 3, 4, 5];

// //console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// //console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// //console.log(weekdays);

// //Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// };

// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 5, 4, 1, 6, 7));

// const x = [23, 5, 7];

// console.log(add(...x));

// restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('Chicken');

// let people = 'ahmed';

// const anythingElse = [...people];

// console.log(people);

// console.log(anythingElse);

// //||
// console.log('------OR------');
// console.log(3 || 'AHMED'); // truthy || truthy

// console.log(0 || 'hello'); // falsy || truthy

// console.log(true || false);

// console.log(true || 0);

// console.log(false || false);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // this will return the first truthy value;

// console.log(undefined || null || false || 0 || '');

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;

// console.log('-------AND-------');

// console.log(0 && 'Ahmed'); // 0
// console.log(7 && 'Ahmed'); // Ahmed
// console.log(23 && 'Ahmed' && null && 87); // Null

// // example
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'salami');
// // }
// // restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'salami');

// // //Nullish operator ??

// // restaurant.guests = 0;
// // const guest = restaurant.guest ?? 10;
// // console.log(guest);

// const rest1 = { name: 'capri', numGuests: 0 };
// const rest2 = { name: 'La Piazza', owner: 'Luca Toni' };

// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;

// rest2.numGuests = rest2.numGuests || 10;

// rest2.numGuests ||= 10;

// console.log(rest1, rest2);

// rest2.numGuests ??= 10;

// console.log(rest2);

// rest1.numGuests ??= 20;

// console.log(rest1);

// rest2.owner = rest2.owner && 'Ananymous';

// rest1.owner = rest1.owner && 'Ananymous';

// rest1.owner &&= 'Ananymous';
// rest2.owner &&= 'Ananymous';

// console.log(rest1, rest2);

// const numbers = [1,2,3,4];
// const numbers1 = ...numbers;

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let item of menu) console.log(item);

// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open); // if opening hours not exist it will give you undefined instead of error
