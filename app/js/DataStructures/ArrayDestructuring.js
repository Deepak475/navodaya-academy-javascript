// Section: Data Structures and Modern Operators

// Lecture: Destructuring Arrays

const restaurant = {
  name: 'Delhi Zaika',
  location: '6 Feet Road, Sakinaka, Mumbai - 400072',
  categories: ['Chinese', 'Kebab', 'Biryani', 'Seafood', 'Mughlai', 'North Indian', 'South Indian'],
  starterMenu: ['Chicken Barra Cream', 'Mutton Reshmi Seekh Kabab', 'Fish Butter Garlic', 'Prawns Butter Garlic', 'Hariyali Paneer Tikka'],
  mainMenu: ['Chicken Mughlai Kepsa Rice', 'Butter Tandoori Naan', 'Egg Hakka Noodles', 'Mix Tikka Platter'],
  deserts: ['Gulab Jamun', 'Caramel Custard', 'Matka Rabdi', 'Sizzling Brownie'],

  order: function (starterIndex, mainIndex) {
    return [this.deserts[starterIndex], this.starterMenu[mainIndex]]
  }
}

const ary = [23, 45, 58, 29];

console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);
console.log(ary[3]);

const [w,x,y,z] = ary;
console.log(w,x,y,z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Swtich Variable
// let temp = main;
// let main1 = secondary;
// let secondary1 = temp;
// console.log(main1, secondary1);
[main, secondary] = [secondary, main];
console.log(main, secondary);

const array1 = [23,67,98,37,[2,0]];
let [arr1,arr2,arr3] = array1;
console.log(arr1,arr2,arr3,arr4);



console.log(restaurant.order(2, 3));
