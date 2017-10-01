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
Pig.prototype.constructor = Pig;

Pig.prototype.grunt = function () {
  alert('Хрюкает свинья');
};

function Peppa (mood) {
  Pig.apply(this, [100, true]);
  this.mood = mood;
}

Peppa.prototype = Object.create(Pig.prototype);
Peppa.prototype.constructor = Peppa;

Peppa.prototype.grunt = function () {
  switch (this.mood) {
    case 'good':
      alert('Хрюкает добрая свинья');
      break;
    case 'bad':
      alert('Хрюкает злая свинья');
      break;
    default:
      //this.getPrototypeOf();
      break;
  }
};

const peppa = new Peppa('good');
console.log(peppa);