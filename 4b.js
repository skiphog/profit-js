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
  constructor (gender, weight) {
    super(gender, 4, true, true);
    this.weight = weight;
    this.likeDirt = true;
  }

  grunt () {
    alert('ХРЮ');
  }

}

class Peppa extends Pig {
  constructor (mood) {
    super('female', 100);
    this.mood = mood;
  }

  grunt () {
    switch (this.mood) {
      case 'good':
        alert('ХРЮ-ХРЮ-ХРЮ');
        break;
      case 'bad':
        alert('ХРЮЮЮЮЮ');
        break;
      default:
        super.grunt();
        break;
    }
  }
}

const peppa = new Peppa('good');
peppa.grunt(); // ХРЮ-ХРЮ-ХРЮ

peppa.mood = 'bad';
peppa.grunt(); //ХРЮЮЮЮЮ