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
  constructor (mood) {
    super(100, true);
    this.mood = mood;
  }

  grunt () {
    switch (this.mood) {
      case 'good':
        alert('Хрюкает добрая свинья');
        break;
      case 'bad':
        alert('Хрюкает злая свинья');
        break;
      default:
        super.grunt();
        break;
    }
  }
}

const peppa = new Peppa('good');
peppa.grunt(); // Хрюкает добрая свинья

peppa.mood = 'bad';
peppa.grunt(); //Хрюкает злая свинья