'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MOBILE BANKING WEBSITE

// Data
const account1 = {
  owner: 'Ayobami Owoeye',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Chima Francis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Esther Ojile',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Helen Nneka',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index, movement] of movements.entries()) {
//   if (movement >= 0) {
//     console.log(`movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// }

/////////////////////////////////////////////////

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
1. SLICE METHOD
/////////////////////////////////////////////////////*/

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(3));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice());
// console.log([...arr]);

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
2. SPLICE METHOD
/////////////////////////////////////////////////////*/

// console.log(arr.splice(3));
// console.log(arr);
// console.log(arr.splice(-1));
// console.log(arr);

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
3. REVERSE METHOD
/////////////////////////////////////////////////////*/

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse(2));

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
4. CONCAT METHOD
/////////////////////////////////////////////////////*/

// const letters = arr.concat(arr2);
// console.log(letters);

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
5. JOIN METHOD
/////////////////////////////////////////////////////*/

// console.log(letters.join(' '));

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
6. At METHOD
/////////////////////////////////////////////////////*/
// const arrr = [20, 40, 60, 80];
// console.log(arrr[0]);
// console.log(arrr[arrr.length - 1]);
// console.log(arrr.at(0));
// console.log(arrr.at(-1));
// console.log(arrr.slice(1)[1]);

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
7. FOREACH METHODD
/////////////////////////////////////////////////////*/

// movements.forEach(function (movement, index, arr) {
//   movement >= 0
//     ? console.log(`movement ${index + 1} : You deposited ${movement}`)
//     : console.log(
//         `movement ${index + 1} : You deposited ${Math.abs(movement)}`
//       );
// });

/*//////////////////////////////////////////////////
SIMPLE ARRAY METHODS
7. FOREACH METHODD WITH MAPS AND SETS
/////////////////////////////////////////////////////*/

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['NGN', 'Nigerian Naira'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (currency, value) {
//   console.log(`${currency} : ${value} `);
// });

// const currencySet = new Set(['USD', 'NGN', 'GBP', 'CAD', 'NGN', 'USD']);
// currencySet.forEach(function (key, _) {
//   console.log(`${key} `);
// });

/* 
Ciroma and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsCiroma' and 'dogsKate'), and does the following things:
1. Ciroma found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Ciroma's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Ciroma's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Ciroma's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Ciroma's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const checkDogs = function (dogsCiroma, dogsKate) {
//   let updatedDogCiroma = dogsCiroma.slice();
//   let latestDogCiroma = updatedDogCiroma.slice(1);
//   let latestDogCirom2 = latestDogCiroma.slice(-2);
//   let joinedArray = latestDogCirom2.concat(dogsKate);
//   for (const [index, dogAge] of joinedArray.entries()) {
//     if (dogAge <= 3) {
//       console.log(
//         `Dog number ${index + 1} is ${dogAge} years old and is still a puppy`
//       );
//     } else {
//       console.log(
//         `Dog number ${index + 1} is  an adult and is ${dogAge} years old.`
//       );
//     }
//   }
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const displayMovement = function (movements) {
  movements.forEach(function (movement, index) {
    const typeOfMov = movement < 0 ? 'withdrawal' : 'deposit';
    const htmlElement = `<div class="movements__row">
          <div class="movements__type movements__type--${typeOfMov}">${
      index + 1
    } ${typeOfMov}</div>
          <div class="movements__value">${movement} &#8358</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', htmlElement);
  });
};
displayMovement(account1.movements)

/*//////////////////////////////////////////////////
DATA TRANSFORMATION
* MAP * FILTER * REDUCE
/////////////////////////////////////////////////////*/

// MAP ******** Converting the movements array to naira with the rate of  850   *******************************

const usdToNaira = 850;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementNGN = movements.map(function(element){
//   const newData = element * usdToNaira;
//   return `${newData}N`;
// })
// console.log(movementNGN)

/////////////////////////
// ARROW Function
/////////////////////////

const movementNGN = movements.map(element => element * usdToNaira);
console.log(movementNGN);

// let result = [];
// for(const movement of movements){
//   const newData = movement * usdToNaira;
//    result.push(newData);
// }
//  console.log(result);

// const movementDescription = movements.map(function(element, index){
//   return `movement ${index + 1} = ${element}`
// })
// console.log(movementDescription)

const movementDescription = movements.map(function (element, index) {
  const typeOfMov = element > 0 ? 'deposited' : 'withdrew';
  return `Movement ${index + 1} : you ${typeOfMov} ${element}`;
});
console.log(movementDescription);

///// COMPUTING USERNAME THE BANK APP

const createUserName = function (userAccounts) {
  userAccounts.forEach(function (userAccount) {
    userAccount.userName = userAccount.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(' ');
  });
};
createUserName(accounts);
console.log(accounts);

// const user = 'Ayobami Owoeye';
// const userName = user.toLowerCase().split(" ").map(function(name){
//   return name[0]
// }).join("");
// console.log(userName)

////  FILTER METHOD

const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movementss.filter(function (element) {
  return element > 0;
});
console.log(deposits);

const depositsFor = [];
for (const x of movementss) {
  x > 0 ? depositsFor.push(x) : '';
}
console.log(depositsFor);


//// REDUCE METHOD
const balance = movementss.reduce(function(acc, element, index,arr){
  return acc + element
}, 0);
console.log(balance)

// labelBalance.textContent = account1.movements.reduce(function(acc,element,index, arr){
//   return acc + element
// }, 0)

let acc = 0;
for(const x of account1.movements){
  acc +=x
}
console.log(acc)

const acs = account1.movements.forEach(function(move){
  let acc = 0
 return  acc+=move
})
console.log(acs)
