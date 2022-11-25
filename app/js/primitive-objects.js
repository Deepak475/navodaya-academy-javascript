// Section: HOW JAVASCRIPT WORKS ​BEHIND THE SCENES

// Lecture: PRIMITIVES VS. OBJECTS (PRIMITIVE VS. REFERENCE TYPES)​

// PRIMITIVES
let age = 29;
let oldAge = 40;
age = 27;

console.log(age);
console.log(oldAge);


// OBJECTS REFERENCE
const aGirl = {
  name: 'Ankita',
  lastName: 'Varma',
  age: 29,
}

const isMarried = aGirl;

isMarried.lastName = 'Gupta'

console.log(aGirl);
console.log(isMarried);

let name = 'Deepak';
let oldName = 'John';
name = 'Kartik';

console.log(name);
console.log(oldName);

const vehicle1 = {
  modalNumber: 'XGH30YN',
  carName: 'Thar and Range Rover',
  chasisNumber: 00045873485483,
  colour: 'red'
}

const vehicle2 = vehicle1;
vehicle2.colour = 'black'

console.log(vehicle1);
console.log(vehicle2);



// const vehicleEV = {
//   modalNumber: '78HWEOP23',
//   carName: 'Nexan EV Max',
//   chasisNumber: 000215264859,
//   colour: 'blue'
// }

const vehicle1Copy = Object.assign({}, vehicle1);
vehicle1Copy.carName = 'Nexan EV Max';
vehicle1Copy.colour = 'blue';

console.log('second vehicle triggered vehicle1', vehicle1);
console.log('second vehicle triggered', vehicle1Copy);
