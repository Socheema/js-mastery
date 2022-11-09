'use strict';
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [days[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [days[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`${days[1 + 4]}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// //   console.log(openingHours)

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Thrills Restaurant',
//   location: 'Broad Street, Lagos Island, Lagos State',
//   categories: ['Swallow', 'Vegetarian', 'Organic'],
//   starterMenu: ['Cassava', 'Garri', 'Beans'],
//   mainMenu: ['Maize', 'Plantain', 'Yam'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   //Writing a method for ording soup and the soup will contain three ingredients

//   orderSoup: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious soup which contains ${ing1}, ${ing2}, ${ing3}`
//     );
//   },
// };

// const user = [
//   {
//     name: 'Ayo',
//     email: 'chimafrancis@gmail.com',
//   },
// ];

// console.log(user[0]?.email);

// restaurant.orderDelivery({
//   time: '8 : 00',
//   address: 'Bodija, Ibadan',
//   mainIndex: 1,
//   starterIndex: 0,
// });
// const ingredients = [
//   prompt('Enter ingredient 1'),
//   prompt('Enter ingredient 2'),
//   prompt('Enter ingredient 3'),
// ];
// restaurant.orderSoup(...ingredients)

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
// const ar = [8];
// const [p = 1, q = 1, r = 1] = ar;
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

// THE SPREAD OPERATOR
// it is used to upack values with an array
// const arr = [7, 8, 9];

// const newGoodArray = [1, 2, ...arr];
// console.log(newGoodArray);
// console.log(...newGoodArray);

// const newMainMenu = [...restaurant.mainMenu, "Bread"];
// restaurant.newMainMenu = newMainMenu;
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const str = "Ciroma";
// const letters = [...str]

// console.log(restaurant.newMainMenu);
// console.log(restaurant);
// console.log(newMainMenu);
// console.log(menu);

// const newResturant = {...restaurant, founder : "Hussain", foundedin : 2022};
// newResturant.name = "Eat and Chill"
// console.log(restaurant)
// console.log(newResturant)

//REST PATTERN

// const [a, b, ...others] = [1, 2, ...[3,4,5]];
// console.log(a)
// console.log(b)
// console.log(others)
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
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //   // Writing a method for ording soup and the soup will contain three ingredients

  orderSoup: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious soup which contains ${ing1}, ${ing2}, ${ing3}`
    );
  },
  orderBeans: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// restaurant.orderBeans("Plaintain", "bread", "maize")
// const [food1, , food2, ...otherFoods] = [...restaurant.starterMenu, restaurant.mainMenu];
// console.log(food1);
// console.log(food2);
// console.log(otherFoods);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(sat)
// console.log(weekdays)

//REST PARAMETER
// function add(...numbers){
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++){
//     sum +=numbers[i]
//   }
//   console.log(sum)
// }
// // add(2,3)
// // add(2,5,7,9,0,8)
// // add(2,5,7,9,0,8,6,4,13,1)
// const x = [23, 7, 5];
// add(...x)

//SHORT CIRCUITING

// OR OPERATORS
// console.log(3 || "Ayo");
// console.log("" || "Ayo");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(NaN || "");
// console.log(undefined || 0 || "" || "Hello"||20||null);

// const guest1 = restaurant.numOfGuests ? restaurant.numOfGuests : 10;
// console.log(guest1)

// AND OPERATOR

// if(restaurant.orderBeans){
//   restaurant.orderBeans("Plaintain", "Agbado")
// }
// console.log(restuarant.orderBeans && restaurant.orderBeans("plantain", "Agbado"));

// console.log(0 && "Ayo");
// console.log(7 && "Ayo" && 8 && 23 && 0 && "Dumebi");
// console.log("Hello" &  0 && 23 && null && "Dumebi");

// NULLISH COALISHING OPERATOR
// restaurant.numOfGuests = 0;
// const guest3 = restuarant.numOfGuests ?? 50;
// console.log(guest3)

//LOGICAL ASSIGNMENT OPERATORS
// const rest1 = {
//   name: 'Eat & chill',
//   numOfguests: 0,
// };
// const rest2 = {
//   name: 'drink & chill',
//   owner: 'Ciroma',
// };
//set default number of guest for all of the restuarant without number of guest property
// rest1.numOfguests = rest1.numOfguests || 5;
// rest2.numOfguests = rest2.numOfguests || 5;

//logical assignment OR operator
// rest1.numOfguests ||= 5;
// rest2.numOfguests ||= 5;

// logical assignment nullish coalishing operator
// rest1.numOfguests ??= 5;
// rest2.numOfguests ??= 5;

//logical assignment AND operator
// rest1.owner = rest1.owner && "<ANON>"
// rest2.owner = rest2.owner && "<ANON>"
// rest1.owner &&= '<ANON>';
// rest2.owner &&= '<ANON>';

// console.log('restuarant 1 ===>', rest1);
// console.log('restuarant 2 ===>', rest2);

//CODING CHALLENGE

/* CODING CHALLENGE 1/ SECTION 7
We're building a soccer betting app !
Suppose we get data from a web service about a certain game (below). Inthischallenge we will work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are fieldplayers. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining10fieldplayers
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. Socreate a new array ('players1Final') containing all the original team1 players
plus 'Thiago', 'Coutinho' and 'Perisic' 5. Based on the game.odds object, create one variable for each odd (called'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (NOT an array) and prints each of them to the console, along withthenumber of goals that were scored in total (number of player names passedin)
7. The team with the lower odd is more likely to win. Print to the console
which team is more likely to win, WITHOUT using an if/else statement or theternary operator. TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK */

// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Oct 13th, 2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...goalScores) {
    console.log(`${goalScores.length} goal(s) were scored.`);
  },
};

// // 1
// for(const [goalNumber, player] of game.scored.entries()){
//   console.log(`Goal ${goalNumber + 1} : ${player}`);
// }

// //2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
  average = average / odds.length;
}
console.log(average);

// //3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}
// const [player1, player2] = game.players;
// console, log(player1);
// console, log(player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// console.log(player1);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {team1, x:draw,team2} = game.odds;
// console.log(team1)
// console.log(draw)
// console.log(team2)

// game.printGoals(...game.scored);
// game.printGoals("Thiago");

// team1 < team2 && console.log("Team1 is more like;y to win")
// team1 > team2 && console.log("Team2 is more like;y to win")

//LOOPING THROUGH ARRAY

//for of loop

// const menu =[...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const [index, element] of menu.entries()){
// console.log(`${index + 1} : ${element}`);
// }

// console.log(menu.entries())
// for(let i = 0; i < menu.length; i++){
//   console.log(`${i}: ${menu[i]}`)
// }

//ENHANCED OBJECT LITERAAl

// 13/10/22
//OPTIONAL CHAIN
// Trying to check the restuarant openingHours on monday

// Without the optional chaining
/* if(restaurant.openingHours.mon){
console.log(restaurant.openingHours.Mon.hour);
} 

if(restaurant.openingHours.fri){
console.log(restaurant.openingHours.fri.open);
} */

//With optional chaining
// console.log(restaurant.openingHours?.Mon?.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.sat?.open);

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, We are open at ${open}`)
// }

// console.log(restaurant.order?.(0, 1))
// console.log(restaurant.orderRice?.(0, 1))

//looping Objects

// const properties = Object.keys(openingHours);
// console.log(`we are open on ${properties.length} days`);

// for (const day of properties){
//   const str = `We are open : ${day}`
//   console.log(str)
// }

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);

// for(const [day, {open, close}] of entries){
// console.log(` We are open on ${day} by ${open} and close at ${close}`);
// }

//SETS

// const orderSet = new Set([
//   'Garri',
//   'Garri',
//   'Maize',
//   'chicken',
//   'Maize',
//   'bread',
// ]);
// console.log(orderSet)
// console.log(orderSet.has("pizza"))
// console.log(orderSet.has("garri"))
// orderSet.add("plantain chips")
// orderSet.delete("plantain chips")
// //orderSet.clear()
// console.log(new Set("codedynasty"))
// console.log(orderSet)

// for(const food of orderSet){
//   console.log(food)
// }

// const staff = ["Waiter", "Waiter", "Gateman", "Chef", "chef", "Manager"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique.length)

// MAPS

// filling a map
// const arr = [1, 2]
// const canteen = new Map();
// canteen.set('name', 'New Age Canteen');
// canteen.set(1, 'Awka, Anambra');
// canteen.set(2, 'Bodija, Oyo');
// canteen
//   .set('catergories', ['Cassava', 'Garri', 'Beans'])
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'We are Open')
//   .set(false, 'We are closed').set(arr, "Testing");
// console.log(canteen.get(arr));

// // Getting data from a map, we use the get method
// console.log(canteen.get('name'));
// console.log(canteen.get('catergories'));
// console.log(canteen.get(2));
// console.log(canteen.get(true));

// const time = 8;
// console.log(
//   canteen.get(time > canteen.get('open') && time < canteen.get('close'))
// );

// console.log(canteen.has("menu"));
// canteen.delete(2);
// console.log(canteen)

//MAPS ITERATION
// const questions = new Map([
//   ["question", "What is  the best programming languaage in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Dart"],
//   [4, "Javascript"],
//   [true, "Correct"],
//   [false, "Try Again"],
//   ["correct", 4]
// ]);

// console.log(questions.get("question"))
// for(const [key, values] of questions){
//   if(typeof key === "number"){
//     console.log(`${key}: ${values}`)
//   }
// }
// const answer = parseInt(prompt('What is your answer'));
// console.log(answer);
// console.log(questions.get(questions.get('correct')=== answer))

// console.log([...questions])

// if (answer === questions.get("correct")){
//   console.log(questions.get(true))
// }else{
//   console.log(questions.get(false))
// }

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// WHICH DATA STRUCTURE TO USE AND PLACES TO GET DATA FROM
/*  1. From our source code
    2.  data can come from user interface
    3.  We get data from web API 
    */

// WORKING WITH STRINGS
const networkprovider = 'MTN NIGERIA LTD';
// console.log(networkprovider)
// console.log(networkprovider.length)
// console.log(networkprovider[0])
// console.log(networkprovider[3])
// console.log("MTN NIGERIA LTD"[4])
// console.log("MTN NIGERIA LTD"[8])
// console.log("MTN NIGERIA LTD".length)
// console.log(networkprovider.indexOf("N"))
// console.log(networkprovider.lastIndexOf("N"))
// console.log(networkprovider.indexOf("NIGERIA"))
// console.log(networkprovider.indexOf("MTN"))
// console.log(networkprovider.indexOf("LTD"))

// USING THE SLICE() TO EXTRACT CHARACTERS FROM PART OF A STRING
console.log(networkprovider.slice(5));
const subString = networkprovider.slice(2);
console.log(subString);
console.log(networkprovider.slice(1));
console.log(networkprovider.slice(-4));

// console.log(new String("Ayobami"))
// console.log("Ayobami".slice(4,8))

// TO UPPERCASE && TO LOWERCASE
const myName = 'ciroma';
const blockName = myName[0].toUpperCase();
console.log(blockName);
console.log(blockName.toLowerCase());

//  STRING METHODS RETURN BOOLEAN VALUES
//  const networkprovider = 'MTN NIGERIA LTD';
// console.log(networkprovider.includes('MTN'));
// const sentence = "I stopped using GLO, because GLO frustrates me"
// const question = prompt("What network do you make use(MTN, AIRTEL, GLO?)").toUpperCase();
// if(question.includes("MTN")){
//   console.log("Good network")
// }else if(question.includes("AIRTEL")){
//   console.log("Good network")
// }else{
//   console.log("Not good enough")
// }

// STARTS WITH AND ENDS WITH METHOD
// console.log(networkprovider.startsWith("MTN"))
// console.log(networkprovider.endsWith("LTD"))
// console.log(networkprovider.endsWith("LTDS"))
// console.log(networkprovider.includes("NIGERIA"))

// SPLIT METHOD
// console.log("a+very+nice+string".split("+"))
// const arr ='MTN NIGERIA LTD'.split(" ");
// const [a,b] = [...arr]
// console.log(arr)
// console.log(a)
// console.log(b);
// const [firstName, lastName] = "Ayobami Owoeye".split(" ")

// // JOIN METHOD
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName)

// // REPLACE METHOD
// console.log(networkprovider.replace("MTN", "SMILE"))
// console.log(sentence.replace("GLO", "AIRTEL"))

// // REPLACE ALL METHOD
// console.log(sentence.replaceAll('GLO', 'AIRTEL'));

// // STRING PADDINGsage =
// const message = 'Hello';
// console.log(message.padStart(6, '*').padEnd(10, '*'));
// console.log(message.padEnd(6, "*"));

// const maskedCard = function (cardNumber){
// const cardNumStr = String(cardNumber);
// console.log(cardNumStr.length);
// const lastFourNum = cardNumStr.slice(-4);
// console.log(lastFourNum)
// const visibleNum = lastFourNum.padStart(cardNumStr.length,"*")
// console.log(visibleNum)
// // const cardNum = card.slice(-4);
// // console.log(cardNum)
// }
// maskedCard(234568885432566)
// maskedCard(234568885)
// maskedCard(2345688866)
// maskedCard(234568885566)

// WEEK-18-ASSIGNMENT -1
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀 */
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = new Set(gameEvents.values());
// const eventArrray = [...events];
// console.log(eventArrray)

// const deletedEvent = gameEvents.delete(64);
// console.log(deletedEvent);
// console.log(gameEvents)

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

// for(const [keys,values] of gameEvents.entries()){
//   const firsHalf = ['FIRST HALF'];
//   const secondHalf = ['SECOND HALF']
//   if(keys <= 45){
//     console.log(`[${firsHalf}] ${keys} : ${values}`)
//   }else{
//     console.log(`[${secondHalf}] ${keys} : ${values}`);
//   }
// }

// correction

// WEEK-18-ASSIGNMENT - 2
/*
Create a function that takes  string / sentence as an argument and returns the longest word word in that string/sentence
Test Data
longestWord("Javascript is a versatile programming language")//programming is returned because programming is the longest word
longestWord("variables in the temporal dead zone are inaccessible")// inaccessible is returned because inaccessible is the longest word
*/

// SOLUTION

// const longestWord = function (sentence) {
//   const words = sentence.split(' ');
//   let longestWords = '';
//   for (const word of words) {
//     if (word.length > longestWords.length) {
//       longestWords = word;
//     }

//     console.log(longestWords);
//   }
// };
// longestWord('Javascript is a versatile programming language');

// const secondLongestWord = str => {
//   const splitStr = str.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < splitStr.length; i++) {
//     if (splitStr[i].length > longestWord.length) {
//       longestWord = splitStr[i];
//     }
//   }
//   console.log(longestWord);
// };
// secondLongestWord('variables in the temporal dead zone are inaccessible');

// ASSIGNMENT
//Create a function that takes  string / sentence as an argument and returns capitalized version of that string/sentence.

//longestWord("Javascript is a versatile programming language")//programming is returned because programming is the longest word
//longestWord("variables in the temporal dead zone are inaccessible")// inaccessible is returned because inaccessible is the longest word;

// const toCapitalise = function (sentence) {
//   const splitSentence = sentence.split(' ');
//   for (const word of splitSentence) {
//     const lowCase = word.toLowerCase();
//     const firstLetter = lowCase[0].toUpperCase();
//     const lowerLetter = lowCase.slice(1);
//     const toStringg = [`${firstLetter}${lowerLetter}`];
//     const str = toStringg.join(" ")
//     console.log(str)
//   }
// };
// toCapitalise('Javascript is a versatile programming language');


// const capitalise = function (sentence){
//   const arrayOfWords = sentence.split(' ');
//   for(let i= 0; i < arrayOfWords.length; i++){
//     arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1)
//   }
//   const str2 = arrayOfWords.join(" ");
//   console.log(str2)
// }
// capitalise('Javascript is a versatile programming language');

// const capitalized = function(sentence){
//   let straightWord = [];
//   let words = sentence.split(' ');
//   for(const word of words ){
//     let completeWords = [word[0].toUpperCase(), word.slice(1)].join("");
//     straightWord.push(completeWords);
//   }
//   const finaWord = straightWord.toString().replaceAll(",", " ");
//   console.log(finaWord);
// }
// capitalized('Javascript is a versatile programming  language');


const sentence = "John is walking home";
console.log(sentence[3])
console.log(sentence.indexOf("walking"))
console.log(sentence.indexOf("is"))
console.log(sentence.slice(5, -))
console.log('John is walking home'[3]);