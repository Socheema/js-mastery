"use strict";

// FIRST CLASS FUNCTIONS AND HIGHER ORDER FUNCTIONS

// const add = function(){

// }

// const obj = {
//     orderWine : function(){

//     }
// }

// const h1 = document.querySelector("h1");
// h1.addEventListener('click', function(){
//     console.log("hello")
// })

// function addNumber(){
//     return function(){

//     }
// }

//Function accepting callbacks as an Argument;

// const x = function(){
//     console.log("I am callled inside of a function")
// }

// const y = function(callback){
//     console.log("Say something");
//     callback()
// }
// y(x)

// const calc = function(num1, num2, calcType){
//  if(calcType === "add"){
//     return num1 + num2;
//  }
//   else if (calcType === "subtract") {
//     return num1 - num2;
//   }
//    else if (calcType === "multiply") {
//      return num1 * num2;
//    }
// }
// console.log(calc(5, 10, "add"));
// console.log(calc(5, 10, "subtract"));
// console.log(calc(5, 10, "multiply"));

// const add = function(a,b){
//     return a+b
// }
// const subtract = function(a,b){
//     return a-b
// }
// const multiply = function(a,b){
//     return a*b
// }

// const doWhatEver = function(a,b){
//     console.log(`Here are your numbers ${a}, ${b}`);
// }

// const calc = function(num1, num2,callback){
//     return callback(num1, num2)
// }
// console.log(calc(5, 10, add))
// console.log(calc(5, 10, multiply))
// console.log(calc(5, 10, subtract))
// console.log(calc(2,4, doWhatEver))

// FUNCTION RETURNING FUNCTIONS

// function one() {
//   return function () {
//     console.log("Yaah!");
//   };
// }
// one();

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const sayHello = greet("Hello");
// sayHello("Chima");

// const greet2 = (greeting) => {
//   const hi = (name) => {
//     console.log(`${greeting}, ${name}`);
//   };
//   return hi;
// };
// greet2("Hello")("Dumebi");


// HOW PASSING ARGUMENTS WITH PRIMITIVE AND REFERENCE TYPES
// const network = "MTN";
// const user = {
//   firstname: "Ciroma",
//   tariff : "MTN Pulse"
// }
// const checkTariff = function(userNetwork, userDetails){
//   userNetwork = `${userNetwork} NIGERIA`;
//   userDetails= `Mr ${userDetails.firstname}`;
//   console.log(`${userNetwork}, ${userDetails}`)
// }
// checkTariff(network, user)
// console.log(network)
// console.log(user)


// call and aply method
// const mtn = {
//   tariff : "MTN Pulse",
//   details: [],
//   sub(nameOfUser, dataSize){
//     console.log(
//       `Dear ${nameOfUser}, you have subscribed for ${dataSize} MB. Your tariff plan is ${this.tariff}`
//     );
//     this.details.push({nameOfUser, dataSize})
//   }
// }
// mtn.sub("Ayo", 200);
// console.log(mtn)

// const glo = {
//   tariff : "Glo Tafun Yafun",
//   details : []
// }
// const smile = {
//   tariff : "Smiling",
//   details : []
// }

// const airtel = {
//   tariff : "Plenti Data",
//   details : []
// }
// const subscribe = mtn.sub;
// CALL METHOD ON FUNCTION TO SPECIFY OR ACCESS THE  THIS KEYWORD
// subscribe.call(glo, "Dumebi", 6000);
// subscribe.call(airtel, "Chima", 50000)
// console.log(glo)

// APPLY METHOD ON FUNCTION TO SPECIFY OR ACCESS THE  THIS KEYWORD this method makes use of the array literal
// subscribe.apply(smile,["Tonia", 30000])

//the BIND METHOD  the bind method binds the method to another function
// const subAirtel = subscribe.bind(airtel);
// const submtn = subscribe.bind(mtn);
// const subsmile = subscribe.bind(smile)
// subAirtel("Ayo", 2000);
// submtn("Ciroma", 5000);
// subsmile("Tonia", 500000);
// // partial application
// const subsmlie500 = subscribe.bind(smile, 3000);
// subsmlie500("Chizoba");

// mtn.data = 500;
// mtn.buydata = function(){
//   this.data *= 2;
//   console.log(this.data)
// }

// document.querySelector("button").addEventListener("click", mtn.buydata.bind(mtn))


// IMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)
// const runOnce = function(){
//   console.log("This will run only once")
// }
// runOnce()
// runOnce()
// runOnce()

// (function (){
//   console.log("This is only gonna run once")
// })()

// (() => {
//   console.log("This is gonna run once")
// })();


  //MYSTICAL CLOSURE
//   const getdata = function(){
//     let dataSize = 500;
//     return function(){
//       dataSize ++
//       console.log(`${dataSize}MB`)

//     };
//   };
//   const subscriber = getdata();
// subscriber()
// subscriber()
// subscriber()

// console.dir(subscriber)

let f;
const g = function(){
  const a = 20;
  f = function(){
    console.log(a * 2);
  };
};

const h = function(){
  const b = 100;
  f = function(){
    console.log(b * 2)
  }
}
g();
f();

h();
f()
