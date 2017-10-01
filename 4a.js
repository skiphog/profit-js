'use strict';

function Animal (gender, legs, hasTail, canSwim) {
  this.gender = gender;
  this.legs = legs;
  this.hasTail = hasTail;
  this.canSwim = canSwim;
}

function Pig (weight, likeDirt) {
  this.weight = weight;
  this.likeDirt = likeDirt;
  Animal.apply(this, ['female', 4, true, true]);
}

Pig.prototype = Object.create(Animal.prototype);
Pig.prototype.grunt = function () {
  alert('ХРЮ');
};

function Peppa (mood) {
  this.mood = mood;
  Pig.apply(this, [100, true]);
}

Peppa.prototype = Object.create(Pig.prototype);
Peppa.prototype.grunt = function () {
  switch (this.mood) {
    case 'good':
      alert('ХРЮ-ХРЮ-ХРЮ');
      break;
    case 'bad':
      alert('ХРЮЮЮЮЮ');
      break;
    default:
      this.getPrototypeOf();
      break;
  }
};

const peppa = new Peppa('bad');
peppa.grunt();