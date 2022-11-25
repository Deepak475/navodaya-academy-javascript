// Section: Data Structures Modern Operators and Strings

// Lecture: Enhanced Object Literals
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


// Lecture: Optional Chaining
// console.log(restaurant.hours.Sat?.close);









// Section: Data Structures Modern Operators and Strings

// Lecture: Looping Objects: Object Keys. Values. and Entries
const properties = Object.entries(openingHours);
console.log(properties);

let propStr = `We are open ${properties.length} days in a week: `
console.log(propStr);

// Object keys
const key = Object.keys(openingHours);

// Object Values
const values = Object.values(openingHours);
console.log(values);

for(const [keys, {open, close}] of properties) {
  console.log(`On ${keys} day open at ${open} and close will ${close}`);
}

// Coding Challange
// for(const day of key) {
//   console.log(day);
//   propStr += `${day}`;
// }

// Lecture: SETS
const api1 = ["Pulav", "Biryani", "Pulav"];
const api = ["Pasta", "Pizza", "Pasta", "Pasta", "Burger", "Sandwich", "Pizza", ...api1];

let jaadu = new Set(api);

console.log(jaadu.add("Chicken"));

// Coding Challange
console.log(jaadu.delete(["Pasta"]));
