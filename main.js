"use strict";

class SuperMath {
  check(obj) {
    const action = confirm("Do you wanna continue with action ZNAK?");
    if (action) {
      if (["+", "-", "*", "/", "%"].includes(obj.znak)) {
        const mainAction = this[obj.znak](obj.X, obj.Y);
        console.log("mainAction:", mainAction);
        return mainAction;
      }
    } else {
      return this.input();
    }
  }

  input() {
    const xValue = +prompt("Enter first value");
    const yValue = +prompt("Enter second value");
    const operatorAction = prompt("Enter any action");
    const objResult = { X: xValue, Y: yValue, znak: operatorAction };
    return this.check(objResult);
  }

  "+"(x, y) {
    return x + y;
  }

  "-"(x, y) {
    return x - y;
  }

  "/"(x, y) {
    return x / y;
  }

  "*"(x, y) {
    return x * y;
  }

  "%"(x, y) {
    return x % y;
  }
}

const superMath = new SuperMath();

const obj = { X: 222, Y: 2, znak: "*" };
superMath.check(obj);
