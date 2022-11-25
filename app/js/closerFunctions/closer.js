// Lecture: Immediately Invoked Function Expressions (IIFE)
// Lecture: Closurs

// (IIFE)
const runOnce = function () {
  console.log("hey, I am Navodaya Academy. we can add multiple times.");
}
runOnce();

(function () {
  console.log("hey, I am Navodaya Academy. we can use single time.");
})();

// Closurs

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passenger`);
  }
}

const booker = secureBooking();

console.log(booker());
console.log(booker());
console.log(booker());
