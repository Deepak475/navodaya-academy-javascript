// Section: How Javascript Works Behind The Scenes

// Lecture: Scoping in Practice

'use strict';

// function calcAge(birthYear, futureAge) {
//   let age = futureAge - birthYear;
//
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     thirdCalc(age, output);
//   }
//
//   if (futureAge > birthYear) {
//     console.log(`Calculation was performed.`)
//   } else {
//     console.log(`Calculation was not performed.`)
//   }
//
//   printAge();
//
//
// }
//
// const firstName = "John Doe";
// calcAge(1987, 2037);
//
// function thirdCalc(age, output) {
//   const age1 = 107;
//   console.log(`my age is:${age1}, and second person age is:${age}, and output is:${output}`);
// }
//
//
// if (myName === 'Deepak') {
//   console.log(`Deepak is a ${designation}`); // ReferenceError: cannot access
//   const age = 48;
//   console.log(age);
//   const designation = "Solution Developer"
//   console.log(x) // ReferenceError: x is not defined
// }

// console.log(name);
// console.log(designation);
// console.log(age);

var name = "Navodaya Academy";
let designation = "Coder";
const age = 58;

console.log(navodaya(23, 27));
console.log(namingConv(23, 27));
console.log(academyName(23, 27));

function navodaya(a, b) {
  return a + b
}

const namingConv = (a, b) => {
  return a + b
}

const academyName = () => a + b
