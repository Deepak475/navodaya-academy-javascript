// Section: Javascript Fundamentals Part 1

// Lecture: Type Conversion and Coercion

// Results very similar but are different
// Type conversion will manually convert one to another
// and for coercion Javascript atomatically type behind the scenes for us

let myAge = 23;

let forVoting = myAge + 1;

console.log(String(myAge));

myAge = 60;

let num = 260;

let isEnough = myAge * 7 / num;

let myAnswer = isEnough + 40;

console.log( isEnough );
