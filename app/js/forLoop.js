// Section: Javascript Fundamentals Part 2

// Lecture: Iteration: The For Loop

// For loop keeps running while condition is TRUE
// Looping Arrays

// console.log('I am a number 1');
// console.log('I am a number 2');
// console.log('I am a number 3');
// console.log('I am a number 4');
// console.log('I am a number 5');
// console.log('I am a number 6');
// console.log('I am a number 7');
// console.log('I am a number 8');
// console.log('I am a number 9');
// console.log('I am a number 10');

// for(let counter = 1; counter < 5; counter++) {
//   console.log(`<li>${counter}</li>`);
// }

// const names = ["Deepak", "Santosh", "Rahul", "Seeta", "Guru", "Nikesh", "Suraj", 46, true, "Navodaya", "Manisha", "Priti", "Priyanka", "Harshali", "Nitu"];
//
// const abc = names.length;

// for(let i = 0; i <= abc; i++) {
//   console.log(names[i]);
// }




// Section: Javascript Fundamentals Part 2

// Lecture: Looping Backwards and Loops in Loops and The While Loop

const names = ["Deepak", 45, "Santosh", "Rahul", "Seeta", false, "Guru", "Nikesh", "Nilesh"];

// Looping Backwards
for(let i = names.length - 1; i >= 0; i--)  {
  console.log(i, names[i]);
}

// Loops in Loops
for(let excercise = 1; excercise < 4; excercise++) {
  console.log(`================= Starting Exercise ${excercise}`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Parent are excercise ${excercise}: Repitition started with number ${rep}`);

    for(let exer = 2; exer <= 8; exer++) {
      console.log(`Parent are Repitition ${rep}: ------ Exer started with number ${exer}`);
    }
  }
}


for (var i = 1; i = 1; i <= names.length; i++) {
  console.log(`Hey, I am looping with array ${i}`)
}

// The While Loop
i = 2;
while(i <= names.length) {
  console.log(`While: Hey, I am for loop with array ${i}`);
  i++
}
