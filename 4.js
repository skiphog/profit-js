'use strict';

/**
 * 1. Создать три объекта
 */
var animal = {
  gender: 'female',
  legs: 4,
  hasTail: true,
  canSwim: true
};

var pig = {
  weight: 100,
  likeDirt: true
};

var peppa = {
  mood: 'good'
};

/**
 * 2. Задать прототипы
 */
pig.__proto__ = animal;
peppa.__proto__ = pig;

console.log(peppa); // peppa -> pig -> animal

/**
 * 3. Добавить метод "хрюкать"
 */

pig.grunt = function () {
  alert('Хрюкает свинья');
};

// Присутсвие метода grunt() у Peppa
console.log('grunt' in peppa); // true

/**
 * 4. Хрюканье от настроения
 */
peppa.grunt = function () {
  switch (this.mood) {
    case 'good':
      alert('Хрюкает добрая Пеппа');
      break;
    case 'bad':
      alert('Хрюкает злая Пеппа');
      break;
    default:
      alert('Хрюкает Пеппа');
      break;
  }
};

peppa.mood = 'good';
peppa.grunt(); // Хрюкает добрая Пеппа

peppa.mood = 'bad';
peppa.grunt(); // Хрюкает злая Пеппа