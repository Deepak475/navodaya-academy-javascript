// Section: Javascript Fundamentals Part 1

// Lecture: The Conditional Statements advance

// Ternary Conditional Operator
3 >= 18 ? console.log("I will drink Bear.") : console.log("I will drink milk.");

// Switch Statements
let day = 'sunday';

switch(day) {
  case 'monday':
    console.log("Plan to go for smoke.");

  break;
  case 'tuesday':
    console.log("Plan to fasting.");

  break;
  case 'wednesday':
    console.log("Plan for attend academy session.");

  break;
    case 'thursday':
      console.log("Go for lungar.");

    break;
    case 'friday':
      console.log("Go for date with my ex.");

    break;
    case 'saturday':
      console.log("Go for Lonavala resort.");

    break;
    case 'sunday':
      console.log("Rest on bed.");

    break;
    default:
      console.log('Not a valid day.');
}

// The If Else Statements
if (day === 'monday') {
  console.log("Plan to go for smoke.");
} else if (day == 'tuesday') {
  console.log("Plan to fasting.");
} else if (day == 'wednesday') {
  console.log("Plan for attend academy session.");
} else if (day == 'thursday') {
  console.log("Go for lungar.");
} else if (day == 'friday'){
  console.log("Go for date with my ex.");
} else if (day == 'saturday') {
  console.log("Go for Lonavala resort.");
} else if (day == 'sunday') {
  console.log("Rest on bed.");
} else {
  console.log('Not a valid day.');
}
