"use strict";

// const firstName = "ciroma"

// function first (){
//     let age = 20;
//     if (age >=20){
//          let sentence = `My name is ${firstName} and my age is ${age}`
//          console.log(sentence)
//     }

// }
// first()

//scope chain
// first()
// function first (){
//     const b = "Hello"
//     second()

// }

// function second(){
//     const c = "Hi"
//     third()
// }

// function third(){
//     const d = "Bye"
//     console.log(b + c + d)
// }
// const second = function(){
//     let b = 1;
//     console.log(b)

// }
// second()

// function calAge (birthYear){
//     let currentYear = 2022;
//     let age = currentYear - birthYear
// function printAge (){
//     const output =`You are ${age}, and born in ${birthYear}`
//     console.log(output)
//     if(age >= 18){
//         let adult = true;
//         const str = `Oh! ${firstName}, you are an adult now`
//         console.log(adult, str)
//     }
// }
// printAge()
// }
// calAge(1994)

// function outerFunction (){
//     let outerFunctionVar = "I am outside"
//     function innerFunction (){
//         let innerFunctionVar = "i am inside"
//         console.log(outerFunctionVar)
//     }
//     innerFunction()
// }
// outerFunction()

// let age = 20;
// if (age >= 20){
//     let sentence = "I am old enough"
//     console.log(sentence)
// }

//THIS KEYWORD

// const person1 = {
//     firstName : "ciroma",
//     year : 2000,
//     calAge : function(){
//         console.log(this)
//         return 2000 - this.year
//     }
// }
// console.log(person1.calAge())

// console.log(this)

// const calAge = function(birthYear){
//     console.log(2022 - birthYear)
//     console.log(this)
// }
// calAge(2000)

// const calcAgeArrow = (birthYear) => {
//     console.log(2022 - birthYear)
//     console.log(this)
// }
// calcAgeArrow(2000)

// const person1 = {
//     firstName : "ciroma",
//     year : 2000,
//     calAge : function(){
//         console.log(this)
//         return 2022 - this.year
//     }
// }
// console.log(person1.calAge())
// const f = person1.calAge;
// f()
// const person2 = {
//     firstName : "Dumebi",
//     year : 2010,
//     greet: () => {
//         console.log(this)
//     }
// }
// person2.fan = "Chelsea"
// person2.calcAge = person1.calAge
// console.log(person2.calcAge());
// person2.greet()

// function greeter (){
//     console.log("say hello")
//     const personGreeter = () =>{
//         console.log(`hello ${this}`)
//     }
//     personGreeter()
// }
// greeter()

// const person1 = {
//   firstName: "ciroma",
//   year: 2000,
//   calAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//     const self = this;
//     const isAdult = function () {
//       console.log(self);
//       console.log(self.year <= 2004);
//     };
//     isAdult();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey! ${this.firstName}`);
//   },
// };
// person1.calAge();

// console.log(person1.complexion);

// function addNumberDecl(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// addNumberDecl(2, 5);

// const addNumExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addNumExp(2, 5, 6);

// const addNumArrow = () => {
//   console.log(arguments);
//   return a + b;
// };
// addNumArrow(2, 5, 6);

// let age = 20;
// let oldAge = age;
// age = 21;
// console.log("age====>", age);
// console.log("oldAge====>", oldAge);

// let person1 = {
//   name: "Ciroma",
//   age: 20,
// };

// let person2 = person1;
// person1.age = 33;
// person2.occupation = "Programmer";

// console.log(person2);
// console.log(person1);

// const dumebi = {
//     lastname : "Adekunle",
//     age : 30
// }
// const marriedDumebi = Object.assign({}, dumebi);
// marriedDumebi.lastname = "George";
// marriedDumebi.hobby = "Hiking"
// console.log(dumebi)
// console.log(marriedDumebi)

const dumebi = {
    lastname : "Dumebi",
    age : 30,
    family : ["Bob", "Jessica"]
}
const marriedDumebi = Object.assign({}, dumebi);
marriedDumebi.lastname = "George";
marriedDumebi.family.push("George");
marriedDumebi.family.push("Kate");

console.log(dumebi)
console.log(marriedDumebi)