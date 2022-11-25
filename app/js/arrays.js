// Section: Javascript Fundamentals Part 1

// Lecture: Introduction to Arrays // Basic Array Operations(Methods)



// Introduction to Arrays
let name1 = "Deepak";
let name2 = "Ganesh";
let name3 = "Suraj";

const airtel = [name1, name2, name3];
const jio = new Array("Deepak", "Ganesh", "Suraj");
const friends = airtel;

console.log(friends);
console.log(jio);

friends[friends.length - 1 ] = "Rakesh";
console.log(friends);

const firstName = "Deepak";
const details = [firstName, 11 * 4, "Prasad", "Teacher", friends];
console.log(details);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1991, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1, age2, age3, age4);


// Basic Array Operations(Methods)
const vodafone = ["Kedarnath Uttrakhand", name1, name2, name3, "Manali", "Kashmir", "Goa", "Kedarnath Tamilnadu"];
vodafone.push("Jaipur");
vodafone.unshift("Kanyakumari");
console.log(vodafone);
console.log(vodafone.indexOf("Kedarnath Uttrakhand"));

vodafone.pop();
vodafone.shift();
console.log(vodafone);
