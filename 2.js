'use strict';

/**
 * 1. Функция вычисления факториала
 */

function factorial (n) {
  var result = 1;
  while (n > 0) {
    result = result * n;
    n--;
  }

  return result;
}

console.log(factorial(5)); // 120

/**
 * 2. Функция вычисления факториала рекурсивно
 */

function factorialRecursive (n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // 120

/**
 * 3. Замерить скорость работы функций
 */

console.time('test-1');
factorial(10000);
console.timeEnd('test-1');

console.time('test-2');
factorialRecursive(10000);
console.timeEnd('test-2');

// Цикл почти в два раза быстрее рекурсии

// Так же я провел тестирование производительности на https://jsperf.com/test-factorial
// По результатам которого цикл так же намного быстрее рекурсии

/**
 * 4. let func = function (x, y = 100) { ... };
 */
// После изучения PHP было несложно догадаться, что (y = 100) - это параметр по умолчанию ))))

function sayHello (name = 'гость') {
  console.log('Привет ' + name);
}

sayHello(); // Привет гость
sayHello('Вася Пупкин'); // Привет Вася Пупкин

/**
 * 5. Функция может возвращать функцию
 */

// Пример. Функция умножающая числа на любое заданное число
function multiply (fact) {
  return function (num) {
    return num * fact;
  };
}

var thrice = multiply(3);

console.log(thrice(4)); // 12
console.log(thrice(2)); // 6