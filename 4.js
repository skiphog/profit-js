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

console.log(peppa);

/**
 * 3. Добавить метод "хрюкать"
 */

pig.grunt = function () {
  alert('ХРЮ-ХРЮ');
};

console.log('grunt' in peppa); // true

/**
 * 4. Хрюканье от настроения
 */
peppa.grunt = function () {
  switch (this.mood) {
    case 'good':
      alert('ХРЮ-ХРЮ-ХРЮ');
      break;
    case 'bad':
      alert('ХРЮЮЮЮ');
      break;
    default:
      alert('ХРЯ');
      break;
  }
};

peppa.mood = 'good';
peppa.grunt(); // ХРЮ-ХРЮ-ХРЮ

peppa.mood = 'bad'; //ХРЮЮЮЮ
peppa.grunt();