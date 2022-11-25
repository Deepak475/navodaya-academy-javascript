// Section: Javascript Fundamentals Part 2

// Lecture: Introduction to Objects and Dot vs. Bracket Notation // Methods in Objects

// Introduction to Objects
const deepak = {
  firstName: 'Rakesh',
  lastName: 'Prasad',
  age: 1993 - 2022,
  proffestion: 'Prgrammer',
  address: 'New Bharat Nagar',
  friends: ['Ganesh', 'Santosh', 'Nikesh', 'Rahul', 'Ram', 'Suraj', 'Manisha']
}

const swiggyApp = {
  restoName: 'Delhi zaika',
  restoOwner: 'Nikesh ambani',
  restoAdd: 'Chembur Mumbai 74',
  restoMenus: ['Gulab Jamun', 'Ras Malai', 'Malai Kofta', 'Mawa Jalebi', 'Rabdi', 'Jalebi with Fafda']
}

// Dot vs. Bracket Notation
// let keyName = 'Name';
// console.log(deepak.firstName); // Dot
// console.log(deepak['first' +keyName]); // Notation
//
// const interstedIn = prompt('Hey, I am Navodaya');
// console.log(deepak[interstedIn]);
//
// deepak.location = 'Mumbai';
// deepak['twitter'] = '@deepak4858';
//
// if (deepak[interstedIn]) {
//   console.log(deepak[interstedIn]);
// } else {
//   console.log('Wrong request!');
// }
//
// console.log(`${deepak.firstName} has ${deepak.friends.length} friends and his best friend is ${deepak.friends[5]}`);

// Methods in Objects
const zomatoResto1 = {
  restoName: "Burger King",
  restoAdd: "Sion west, Mumbai",
  restoContact: 7025426358,
  restoFood: ['Veg Burger', 'Cheese Burger', 'Tandoori Burger', 'Chicken Burger', 'Cheese Pizza'],
  price: [25,48,36,15,96,25],
  restoAge: 1993,

  calcAge: function(){
    return this.restoAge - this.price[1];
    this.restoAdd;
  }
}

console.log(zomatoResto1.calcAge());
