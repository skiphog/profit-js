'use strict';

function Calculator (number_1, number_2, operation) {
  this.number_1 = +number_1;
  this.number_2 = +number_2;
  this.operation = operation;
  this.result = null;

  this.calc = function () {
    if (null !== this.result) {
      return this.result;
    }

    switch (this.operation) {
      case '+' :
        this.result = this.number_1 + this.number_2;
        break;
      case '-' :
        this.result = this.number_1 - this.number_2;
        break;
    }

    return this.result;
  };
}

var calculator = new Calculator(2, 3, '+');

console.log(calculator.calc()); // 5 (вычисление)
console.log(calculator.calc()); // 5 (взято ранее вычисленное значение)