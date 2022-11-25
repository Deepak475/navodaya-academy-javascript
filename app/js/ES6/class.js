// Default
import Boy from "./boy.js";
// only export
import { Girl, Nature } from "./girl.js";

class Academy extends Boy {
  constructor(cls) {
    super(cls);
    this.cls = cls;
  }

  admission() {
    console.log(`${this.cls} ${34 + 45 * 23} Needs to be required.`);
  }

  exam() {
    console.log(`23rd August 2022 party from ${this.cls}.`);
  }
}

// From Boy.js
// const admitted1 = new Academy("Nikesh");
const admitted2 = new Academy("Manisha");
console.log(admitted2.admission());
console.log(admitted2.exam());

// From Girl.js
const makeitEat = new Girl("Mango");
const makeit = new Girl("John Doe");

console.log(makeitEat.eating());
console.log(makeit.run());

// From Nature
const natureStudy = new Nature("Trees passed");

console.log(natureStudy.trees());
