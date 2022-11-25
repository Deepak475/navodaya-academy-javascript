// const navodaya = {
//   studentsName: 'Rahul',
//   StudentYear: 2021,
//   calcDuration: function () {
//     return 2022 - this.StudentYear;
//   }
// }
//
// navodaya.calcDuration();
// 'use strict';
// console.log(this);
//
// const calcAge = function (birthYear) {
//   console.log(`I am calculating somothing: ${2022 - birthYear}`);
//   console.log(`Hi, I am this but from calcAge: ${this}`);
// }
// calcAge(1985);
//
// const calAgeArrow = birthYear => {
//   console.log(`I am calculating somothing from calAgeArrow: ${2022 - birthYear}`);
//   console.log(this);
// }
// calAgeArrow(1976);
//
// const tables = {
//   name: 'Nikesh R',
//   year: 2001,
//   age: 20,
//   hobbie: 'videogame',
//   qualification: function () {
//     let age = this.year;
//     console.log(age);
//   }
// }
//
// tables.qualification();
// // console.log(`I am tables and I have some values: ${tables.year}`)
//
// const gurpreet = {
//   year: 2004
// }
//
// gurpreet.qualification = tables.qualification;
// gurpreet.qualification();

console.log(this)

const tables = {
  name: 'Nikesh R',
  year: 2001,
  age: 20,
  hobbie: 'videogame',

  qualification: function (qlfYear) {
    console.log(this);
    const qualificationYear = qlfYear;
    console.log(qualificationYear - this.year);
    const self = this;

    // Solution(Jugad = self) 1
    const navodaya1 = function () {
      console.log(self);
      console.log(self.hobbie);
    }
    navodaya1();

    // Solution 2
    const navodaya2 = () => {
      console.log(this);
      console.log(this.name);
    }
    navodaya2();
  },

  // qualificationLevel: () => {
  //   console.log(this.hobbie);
  // }
}

tables.qualification(2042);
// tables.qualificationLevel();
