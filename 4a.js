'use strict';

function Animal (gender, legs, hasTail, canSwim) {
  this.gender = gender;
  this.legs = legs;
  this.hasTail = hasTail;
  this.canSwim = canSwim;
}

function Pig (weight, likeDirt) {
  Animal.apply(this, ['female', 4, true, true]);
  this.weight = weight;
  this.likeDirt = likeDirt;
}

Pig.prototype = Object.create(Animal.prototype);
//Pig.prototype.constructor = Pig;

Pig.prototype.grunt = function () {
  alert('Хрюкает свинья');
};

function Peppa () {
  Pig.apply(this, [100, true]);
  this.mood = null;
}

Peppa.prototype = Object.create(Pig.prototype);
//Peppa.prototype.constructor = Peppa;

Peppa.prototype.grunt = function () {
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

var peppa = new Peppa();

peppa.mood = 'good';
peppa.grunt(); // Хрюкает добрая Пеппа

peppa.mood = 'bad';
peppa.grunt(); // Хрюкает злая Пеппа