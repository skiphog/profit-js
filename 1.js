'use strict';

/**
 * Задание № 1
 * Поведение оператора "+"
 */

// Обычно с помощью оператора "+" складывают числа
console.log(42 + 42); // 84

// Если применить бинарный "+" к строкам, то произойдет конкатенация
console.log('42' + '42'); // 4242
console.log('Привет' + 'Мир'); // ПриветМир

// Если один из операторов строка, то второй так же будет преобразован к строке
console.log('Привет' + 42); // Привет42
console.log(42 + 'Привет'); // 42Привет

// Если применить унарный "+" к строкам, то произойдет попытка приведения к числу
console.log(+'42' + +'42'); // 84

/**
 * Задание №2
 * Объекты
 */

var human = {'name': 'Вася', 'age': 42};

// Добавить к объекту новое свойство
human.lastName = 'Пупкин';
console.log(human.name + ' ' + human.lastName); //Вася Пупкин

//Обращаюсь к незаданному свойству (Ошибки нет)
console.log(human.gender); // Возвращается специальное значение "undefined"

// Удалить свойство из объекта
delete human.name;

/**
 * Задание №3
 * Глобавльные и локальные переменные
 */

var x = 42;

function foo () {
  var x;
  x = 24;
  console.log(x);
}

foo(); // 24 т.к. обращение к переменной "x", которая объявлена внутри функции.
console.log(x); // 42 Глобальная переменная "x" не измениалсь

/**
 * Задание №4
 * Сколько нужно рулонов бумаги ...
 */

// Функция для вычисления площади стен комнаты
function getSquare (length, width, height) {
  return ((length + width) * 2) * height;
}

// Ширина рулона
var paperWidth = 0.53;
// Длина рулона
var paperLength = 10;
// Площадь стен
var sqr = getSquare(5, 4, 2.5);

var result = Math.ceil(sqr / (paperWidth * paperLength));

console.log(result + ' рулонов'); // 9