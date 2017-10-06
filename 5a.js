'use strict';

var Product = function (code, name, count, price) {
  this.code = code;
  this.name = name;
  this.count = count;

  if (price <= 0) {
    throw new Error('Задана неккоректная цена');
  }

  this.price = price;
};

try {
  var product = new Product(1, 'Milk', 30, 0);
  console.log(product);
} catch (e) {
  alert(e.message);
}

console.log(product); // undefined