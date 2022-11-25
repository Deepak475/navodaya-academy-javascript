// Section: Data Structures Modern Operators and Strings

// Lecture: Destructuring Objects
const restaurant = {
  name: 'Delhi Zaika',
  location: '6 Feet Road, Sakinaka, Mumbai - 400072',
  categories: ['Chinese', 'Kebab', 'Biryani', 'Seafood', 'Mughlai', 'North Indian', 'South Indian'],
  starterMenu: ['Chicken Barra Cream', 'Mutton Reshmi Seekh Kabab', 'Fish Butter Garlic', 'Prawns Butter Garlic', 'Hariyali Paneer Tikka'],
  mainMenu: ['Chicken Mughlai Kepsa Rice', 'Butter Tandoori Naan', 'Egg Hakka Noodles', 'Mix Tikka Platter'],
  deserts: ['Gulab Jamun', 'Caramel Custard', 'Matka Rabdi', 'Sizzling Brownie'],
  openingHours: {
    thu: {
      open: 12,
      close: 23
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.deserts[starterIndex], this.starterMenu[mainIndex]]
  }
}

const name = 'Deepak';
const {name: restoName, openingHours: openHours, deserts: restoDeserts} = restaurant;

console.log(restoName);
console.log(openHours);
console.log(restoDeserts);

const {thu, fri, sat} = openHours;
console.log(thu.close);




// Lecture: The Spread Operator(...)

// const chemburBhaiGroup = [23, 45, 86, 38, 89, 90, 96];
// console.log(`Simple Array: ${chemburBhaiGroup}`);
//
// const kurlaBhaiGroup1 = [12, 56, 34, chemburBhaiGroup[0], chemburBhaiGroup[1], chemburBhaiGroup[2], chemburBhaiGroup[3], chemburBhaiGroup[4], chemburBhaiGroup[5]]
// console.log(`Joint Array: ${kurlaBhaiGroup1}`);
//
// const kurlaBhaiGroup2 = [12, 56, 34, ...chemburBhaiGroup];
// console.log(`Jaadu with Spread Operator Array: ${kurlaBhaiGroup2}`);


const resto = restaurant.categories;

let restoDetails = ['food price', 'discount', ...resto];
console.log(restoDetails);

const {starterMenu, mainMenu, deserts} = restaurant;

let menuCard = [...starterMenu, ...mainMenu, ...deserts];
console.log(menuCard);
