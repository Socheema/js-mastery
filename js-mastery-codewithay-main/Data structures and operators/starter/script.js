'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Thrills Restaurant',
  location: 'Broad Street, Lagos Island, Lagos State',
  categories: ['Swallow', 'Vegetarian', 'Organic'],
  starterMenu: ['Cassava', 'Garri', 'Beans'],
  mainMenu: ['Maize', 'Plantain', 'Yam'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
  orderDelivery: function () {},
};
restaurant.orderDelivery({
  time: '8 : 00',
  address: 'Bodija, Ibadan',
  mainIndex: 1,
  starterIndex: 0,
});
console.log(restaurant.orderDelivery);

// ARRAY DESTRUCTURING
// const arr = [ 2, 4, 6, 8];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// const [p, q, r, s] = arr
// console.log(p)
// console.log(q)
// console.log(r)
// console.log(s)
// console.log(arr)

// Destructuring the  categories in Resturant object
// const [main,  , secondary] = restaurant.categories;
// [secondary, main] = [main, secondary]
// console.log(main)
// console.log(secondary)

// const [active] = openingHours();
// console.log(active);
// console.log(closer)

//RETURNING MULTIPLE VALUES FROM A FUNCTION
// const [starterFood, mainFood] = restaurant.order(1, 2);
// console.log(starterFood);
// console.log(mainFood);

//DESTRUCTURING NESTED ARRAY
// const nested = [2, 4, [5, 6]];
// const [x, , [y, z]] = nested;
// console.log(x, y, z);

// const [i, , [l, k]] =nested;
// console.log(i)
// console.log(l)
// console.log(k)

//DEFAULT VALUES
// const arr = [8];
// const [p = 1, q = 1, r = 1] = arr;
// console.log(p, q, r)

//DESTRUCTURING OBJECTS
//  Here you will be using the exact property names within the object
// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: workingHrs,
// } = restaurant;
// console.log(restaurantName);
// console.log(tags);
// console.log(workingHrs);

// const {menu = [], mainMenu: main  = ["Agbado", "corn"]} = restaurant;
// console.log(menu);
// console.log(main);
// console.log(mainMenu)

// SWITCHING VALUES WHILE DESTRUCTURING OBJECTS
// let a = 111;
// let b = 999;

// const obj = {
//     a : 27,
//     b : 7,
//     c : 14
// };

// ( {a, b} = obj);
// console.log(a)
// console.log(b)

// const {openingHours} = restaurant;
// const {fri} = openingHours;
// const {open} = fri;
// console.log(open)

// const{fri : { open, close}} = openingHours;
// const { openingHours : {thu, fri, sat}} = restaurant;
// console.log(thu)
// console.log(fri)
// console.log(sat)
// console.log(fri)
