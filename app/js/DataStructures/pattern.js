// Section: Data Structures Modern Operators and Strings

// Lecture: Rest Patterns and Parameters

// const realApiData = () => {
// 	const res = fetch("https://dummyjson.com/products/1");
// 	const data = res.json();
// 	console.log(data);
// }

// {"id":1,
// "title":"iPhone 9",
// "description":"An apple mobile which is nothing like apple",
// "price":549,
// "discountPercentage":12.96,
// "rating":4.69,
// "stock":94,
// "brand":"Apple",
// "category":"smartphones",
// "thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
// "images":["https://dummyjson.com/image/i/products/1/1.jpg","https://dummyjson.com/image/i/products/1/2.jpg","https://dummyjson.com/image/i/products/1/3.jpg","https://dummyjson.com/image/i/products/1/4.jpg","https://dummyjson.com/image/i/products/1/thumbnail.jpg"]}

const restaurant = {
  name: "Delhi Zaika",
  location: "6 Feet Road, Sakinaka, Mumbai - 400072",
  categories: [
    "Chinese",
    "Kebab",
    "Biryani",
    "Seafood",
    "Mughlai",
    "North Indian",
    "South Indian",
  ],
  starterMenu: [
    "Chicken Barra Cream",
    "Mutton Reshmi Seekh Kabab",
    "Fish Butter Garlic",
    "Prawns Butter Garlic",
    "Hariyali Paneer Tikka",
  ],
  mainMenu: [
    "Chicken Mughlai Kepsa Rice",
    "Butter Tandoori Naan",
    "Egg Hakka Noodles",
    "Mix Tikka Platter",
  ],
  deserts: [
    "Gulab Jamun",
    "Caramel Custard",
    "Matka Rabdi",
    "Sizzling Brownie",
  ],
  images: "https://dummyjson.com/image/i/products/4/1.jpg",
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.deserts[starterIndex], this.starterMenu[mainIndex]];
  },
};

async function realApiData() {
  let api = await fetch("https://dummyjson.com/products/4");
  let apiData = await api.json();
  // let data = JSON.parse(data1);
  console.log(apiData);
  let html = "";

  // restaurant.forEach(products => {
  let htmlSegment = `<div class="products-wrapper">
                            <img src="${restaurant.images}" >
                            <h2 class="products-title">${restaurant.name}</h2>
                            <p class="products-info">${restaurant.location}</p>
                        </div>`;

  html += htmlSegment;
  // });

  let container = document.querySelector(".real-api");
  container.innerHTML = html;
}

realApiData();

// Spread Operator
const arry1 = [34, 56, 28, 09];
const ary = [3, 4, ...arry1];
console.log(ary);

// Spread right side
// Spread left side
const [chicken, , egg, deepak, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(chicken, egg, deepak, otherFood[0]);

const add = function (...tickets) {
  console.log(...tickets);
};

add(7, 9, 3);
add(23, 56, 87, 35, 79, 454, 545, 5454, 44544, 5454);
add(19, 27, 49, 55, 37, 98, 23);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Section: Data Structures Modern Operators and Strings

// Lecture: Short Circuiting (&& and ||)
// Lecture: The Coalescing Operator

// Use any data type, return any data type, short-circuiting
// OR one or two value will be true
console.log(3 || "Deepak");
console.log(0 || "Deepak");
console.log("" || 52);
console.log(true || "");
console.log(undefined || null);

let age = 18;
if ((age) => 12 || 18) {
  console.log("You are eligible for vote!");
} else {
  console.log("You have to wait....");
}

restaurant.numberGuest = 15;
const guest1 = restaurant.numberGuest ? restaurant.numberGuest : 10;
console.log(guest1);

const guest2 = restaurant.numberGuest || 20;
console.log(guest2);

// The Coalescing Operator
if (restaurant.numberGuest === 20) {
  restaurant.numberGuest = 50;
}

console.log(restaurant.numberGuest);
const guest3 = restaurant.numberGuest ?? 20;
console.log(guest3);

console.log(56 && "Deepak" && null && undefined && 0 && "");

// Section: Data Structures Modern Operators and Strings

// Lecture: Logical Assignment Operators
// Lecture: Looping Arrays: The For-of Loop

const rest1 = {
  name: "McDonalds",
  numGuests: 89,
};

const rest2 = {
  name: "Dominos",
  owner: "John Doe",
};

// OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND Operators
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

rest1.owner &&= "ANONYMOUS";
rest2.owner &&= "ANONYMOUS";

console.log(rest1);
console.log(rest2);

// Lecture: Looping Arrays: The For-of Loop
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menus.entries())
  console.log(`This is index:${i + 1} AND This is a value:${el}`);

// console.log(menus);
