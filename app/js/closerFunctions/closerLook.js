// Section: A Closer Look at Functions

// Lecture: Default Parameters
// const passName = "Nikesh Rajbhar";
// let bookings = [];
// const createBooking = function (flightNum, passenger = 1, price = "$5023") {
//   // flightNum || 1 ES5
//   const name = "Deepak Prasad";
//   const booking = {
//     flightNum,
//     passenger,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }
//
// createBooking("H730", passName);
// console.log(bookings);


// Lecture: How Passing Arguments Works: Value vs. Reference
// const booking = {
//
//     passenger1: {
//       passName: "Nikesh G",
//       flightName: "G378",
//       price: "$2003",
//       passMob: 52615265825,
//     },
//     passenger2: {
//       passName: "Parle G",
//       flightName: "Y412",
//       price: "$2003",
//       passMob: 917021356105,
//     }
//
// }
//
// console.log(booking);
//
// const editBooking = function (flightName) {
//   const editAry = [flightName.passenger1.flightName, flightName.passenger1.price, flightName.passenger2.passMob, flightName.passenger2.passName];
//   console.log(editAry);
//   return editAry;
// }
//
// editBooking(booking);


// Lecture: First-Class and Higher-Order Functions
// Lecture: Functions Accepting Callback Functions
// Lecture: Functions Returning Functions

// 1.First Class Functions
// 2.Higher Order Functions
// 3.Passing Arguments
// 4.Click Events

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
//
// const firstWordCaps = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// Higher Order Functions
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transoformed String: ${fn(str)}`);
//
//   console.log(`Transoformed Updated String: ${fn.name}`);
// }
//
// transformer("Javascript is the best!", firstWordCaps);
// transformer("Javascript is the best!", oneWord);
//
// const course = function (hey) {
//   console.log("jflksdjflskdjfsd");
// }
//
// document.body.addEventListener("click", course);
//
// // Functions Returning Functions
// const greet = function (str) {
//   return function (name) {
//     console.log(`${str} ${name}`);
//   }
// }
//
// const greetings = greet("Hey");
// greetings("Deepak");
//
// greet("Hey")("Nikesh");

// course("Hey, I am Deepak");







// Lecture: The Call and Apply Methods

const booking = {
  custName: "Deepak Prasad",
  train: "Lucknow Express",
  trainNumber: 11044,
  booked: [],
  book(name, trainName, trainNum) {
    console.log(`You have booked your seat on ${trainName} and train number is ${trainNum}.`);
    this.booked.push(`We have booking data for ${name}: ${trainName}, ${trainNum}`);
  },
}

booking.book("John Doe", "Rajdhani Express", 10558);
console.log(booking);

const express = {
  custName: "Jacklin",
  train: "Tejas Express",
  trainNumber: 10358,
  booked: [],
}

const privateTrain = {
  custName: "Deepak Prasad",
  train: "Bullet Express",
  trainNumber: 55233,
  booked: [],
}

const book = booking.book;
// console.log(book());

book.call(express, "Rakesh Sharma", "Vande Bharat Express", 10886);
console.log(express);

book.call(booking, "John Cena", "Chennai Express", 10337);
console.log(express);

const trainData = ["Eknath Shinde", "Guwahati Express", 10559];

book.apply(express, trainData);
console.log(express);
console.log(booking);


// Lecture: The Bind Method

// Code Challange
let privateEW = book.bind(privateTrain, "", "Google Express", 50010);
console.log(privateEW("Sundar Pichai"));
console.log(privateEW("Mark Zukarberg"));
console.log(privateTrain);

booking.trains = 400;
const trNumber = function () {
  console.log(this);

  this.trains++;
  console.log(this.trains);
}

trNumber();

document.querySelector('.click').addEventListener('click', trNumber);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(100, 0.3));
console.log(addTax(200, 0.5));

const addVat = addTax.bind(null, 0.8);
console.log(addVat(300));

// Challange
function addTaxFunction(rate, value) {
  function myFunc() {
    return value + value * rate;
  }
  return myFunc();
}
// console.log(addTaxFunction(100, 0.3));

const addFirstVal = addTaxFunction(100);
console.log(addFirstVal(0.3));
