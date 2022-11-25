export default class Boy {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name, "I am from Boy File.");
  }
}

// if you used default then you have to import as Name only like Boy,Girl instead of {Boy},{Girl}

// const boy = new Boy("Nikesh Harshali breakuped");
// const boy = new Boy("Deepak").run();
// console.log(boy.run());
