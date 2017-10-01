'use strict';

class Animal {
  constructor (gender, legs, hasTail, canSwim) {
    this.gender = gender;
    this.legs = legs;
    this.hasTail = hasTail;
    this.canSwim = canSwim;
  }
}

class Pig extends Animal {
  constructor (weight, likeDirt) {
    super('female', 4, true, true);
    this.weight = weight;
    this.likeDirt = likeDirt;
  }

  grunt () {
    alert('Хрюкает свинья');
  }
}

class Peppa extends Pig {
  constructor () {
    super(100, true);
    this.mood = null;
  }

  grunt () {
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
  }
}

const peppa = new Peppa();

peppa.mood = 'good';
peppa.grunt(); // Хрюкает добрая Пеппа

peppa.mood = 'bad';
peppa.grunt(); //Хрюкает злая Пеппа
