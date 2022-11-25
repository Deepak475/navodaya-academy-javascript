// Section: Data Structures Modern Operators and Strings

// Lecture: Maps: Fundamentals
// Lecture: Maps: Iteration

const timings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const weekdays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: timings[11],
    close: timings[22]
  },
  [weekdays[0]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
    open: 0,
    close: 24
  }
};

// console.log(openingHours);

const restaurant = {
  name: 'Delhi Zaika',
  location: '6 Feet Road, Sakinaka, Mumbai - 400072',
  categories: ['Chinese', 'Kebab', 'Biryani', 'Seafood', 'Mughlai', 'North Indian', 'South Indian'],
  starterMenu: ['Chicken Barra Cream', 'Mutton Reshmi Seekh Kabab', 'Fish Butter Garlic', 'Prawns Butter Garlic', 'Hariyali Paneer Tikka'],
  mainMenu: ['Chicken Mughlai Kepsa Rice', 'Butter Tandoori Naan', 'Egg Hakka Noodles', 'Mix Tikka Platter'],
  deserts: ['Gulab Jamun', 'Caramel Custard', 'Matka Rabdi', 'Sizzling Brownie'],
  images: 'https://dummyjson.com/image/i/products/4/1.jpg',
  // ES6 Object Literals
  hours: openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.deserts[starterIndex], this.starterMenu[mainIndex]]
  }
}

// Lecture: Maps: Fundamentals
// const rest = new Map();
// rest.set(1, 'Inlaks Hospital');
// rest.set(2, 'Raheja Hospital');
//
// console.log(rest.set('name', 'Lilawati Hospital'));
//
// rest.set('categories', ['Chinese', 'Kebab', 'Biryani', 'Seafood', 'Mughlai', 'North Indian', 'South Indian'])
// .set('open', 11).set('close', 23);
//
// console.log(rest.get('categories'));
// console.log(rest.get('name'));
// console.log(rest.get(1));
// rest.clear();
// console.log(rest);
//
// // Lecture: Maps: Iteration
// const question = new Map([
//   ['question', 'Worlds most used programming lagnuages?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'Javascript'],
//   ['Correct', 4],
//   ['Please Try Again.', 1],
//   ['Please Try Again.', 2],
//   ['Please Try Again.', 3],
// ]);
//
// console.log(question.set('name'));
//
// console.log(question);
// console.log(question.get('question'));
// for(const [key, value] of question) {
//   if (typeof (key) === 'number') {
//     console.log(`Question: ${key} ${value}`);
//   }
// }
//
// const answer = prompt();
// console.log(answer);
//
// if (Number(answer) === question.get('Correct')) {
//   console.log('yes, the answer is correct.')
// } else {
//   console.log('Please try again.')
// }

// Lecture: Working With Strings Part 1/3

const jet = "Boing Air India";
let plane = "A325";

// console.log(jet[1]);
// console.log(plane[3]);
//
// console.log(jet.length);
// console.log('A487'.length);
//
// console.log(jet.slice(4));
// console.log(jet.indexOf('i'));
// console.log(jet.lastIndexOf('d'));
// console.log(jet.slice(0, 5));
// console.log(jet.slice(-1));

// function boingSeat(seat) {
//   // Middle Seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log("You got middle seat.");
//   } else if (s === 'C' || s === 'D') {
//     console.log("You got Side seat.");
//   } else {
//     console.log("You are lucky one. :)");
//   }
// }
//
// boingSeat("2B"); // Middle
// boingSeat("3C"); // Side
// boingSeat("5E"); // Middle
// boingSeat("1A"); // Window
//
// const email = 'deepak@deepakprasad.com';
// const errorEmail = '    deepak@DeepAkpraSad.Com'
// console.log(errorEmail.trim().toLowerCase());
//
// console.log(email === errorEmail);





// Lecture: Working With Strings Part 2/3

// Topics will cover:
// Replacing
const price = "23,05#";
console.log(price.replace('#', '$').replace(',', '.'));

// Includes
plane = 'Airbus 767neo';
console.log(plane.includes('67'));

// Start With
// End With
// Coding Challange Start 1
console.log(plane.startWith('67'));
// Coding Challange End


// Lecture: Working With Strings Part 3/3
// Split
const msg = "Deepak+Prasad";
console.log(msg.split("+"));

const [firstName, lastName] = msg.split("+");
console.log(firstName, lastName);
// Join
const newName = ["Mr.", firstName, lastName].join('++++');
console.log(newName);

// padStart
// padEnd
plane = "8998";
console.log(plane.padStart(plane.length + 8, "*"));
// Repeat
const repeating = "Hey, I am Navodaya.";
console.log(repeating.repeat("200"));

// Coding Challange 2
var stepCount = 5000;
var sleepCount = 6;
var pulseRate = 88.7;
