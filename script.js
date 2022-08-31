'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

//console.log(menu, starters);

//Mutating a variables in Object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
//console.log(a, b);

//Nested object distruction
const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startIndex: 2,
});
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
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];

//console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join two arrays together
const menu1 = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu1);

//iterables are arrays, strings, maps and sets. Not objects

//String example
const str = 'Ahmed';
const letters = [...str, ' ', 'H.'];
console.log(letters);
