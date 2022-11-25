// Section: Working with Arrays
// Lecture: Simple Array Methods
// Lecture: The New at Method

// Slice
const arry = ["a", "b", "c", "d", "e"];
console.log(arry.slice(-3));
console.log(arry.slice(1, -3));
console.log(arry.slice(2, 5));
console.log(arry.slice(2, 3));
console.log(arry.slice(-4));

console.log("--------Slice----------+---------------------");

// Splice
// console.log(arry.splice(-3));
// console.log(arry.splice(2, 5));

console.log("-----------Splice-------+---------------------");

// Reverse
const letters = ["l", "k", "j", "i", "h", "g", "f"];
console.log(letters.reverse());

// concat
console.log(arry);
// console.log(letters);
let merged = arry.concat(letters);
console.log(merged);
// console.log([...arry, ...letters]);

// Join
console.log(merged.join("#"));
