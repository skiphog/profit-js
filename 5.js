'use strict';

var Calculator = function (number_1, number_2, operation) {
  this.number_1 = +number_1;
  this.number_2 = +number_2;
  this.operation = operation;
};

Calculator.prototype.methods = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '/': function (a, b) {
    if (b === 0) {
      throw new Error('Деление на ноль !!!');
    }

    return a / b;
  }
};

Calculator.prototype.calc = function () {
  try {
    return this.methods[this.operation](this.number_1, this.number_2);
  } catch (e) {
    alert(e);
  }
};

var calculator = new Calculator(10, 0, '/');

console.log(calculator.calc()); // alert: Деление на ноль!!!

