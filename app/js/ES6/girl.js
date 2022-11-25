import Boy from "./boy.js";
export class Girl extends Boy {
  constructor(fun) {
    super(fun);
    this.fun = fun;
  }

  eating() {
    console.log(this.fun, "I am from Girl file.");
  }
}

export class Nature extends Boy {
  constructor(fun) {
    super(fun);
    this.fun = fun;
  }

  trees() {
    console.log(this.fun, "I am from Nature Class.");
  }
}
