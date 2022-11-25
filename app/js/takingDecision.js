// Section: Javascript Fundamentals Part 1

// Lecture: Taking Decision if/else statements

const age = 25;
const isEnough = age <= 18;
if (isEnough) {
  alert(`I am eligible for vote because my age is ${age}`)
} else {
  let yearsLeft = 18 - age;
  alert(`I am not eligible for vote because my age is ${yearsLeft}`);
}

let birthYear = 2022;
let century;

if (birthYear < 2000) {
  century = 20;
  console.log(`I am from if statement ${century}.`);
} else {
  century = 21;
  console.log(`I am from else statement ${century}.`);
}

console.log(`I am Global scope and found number: ${century}.`);



// The Conditional Statements advance

const age = 20;
age >= 18 ? console.log("I like to drink Bear.") : console.log("I like to drink milk.")

const drink = age >= 18 ? 'Bear' : 'Milk';
console.log(drink);

let drink2;
if (age >= 45) {
  drink2 = 'Bear1';
} else {
  drink2 = 'Milk1'
}

console.log(drink2);
