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
      alert('Хрюкает добрая свинья');
      break;
    case 'bad':
      alert('Хрюкает злая свинья');
      break;
    default:
      this.__proto__.grunt();
      break;
  }
};

peppa.mood = 'good';
peppa.grunt(); // Хрюкает добрая свинья

peppa.mood = 'bad';
peppa.grunt(); // Хрюкает злая свинья

peppa.mood = null;
peppa.grunt(); // используется метод из прототипа