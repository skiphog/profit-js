'use strict';

function Animal () {
  this.gender = 'female';
  this.legs = 4;
  this.hasTail = true;
  this.canSwim = true;
}

function Pig () {
  this.weight = 100;
  this.likeDirt = true;
}

Pig.prototype = Object.create(Animal.prototype);
//Pig.prototype.constructor = Pig;

Pig.grunt = function () {
  alert('ХРЮ');
};

function Peppa (mood) {
  this.mood = mood;
}

//Peppa.prototype = Object.create(Pig.prototype);
//Peppa.prototype.constructor = Peppa;

console.dir(new Pig());


