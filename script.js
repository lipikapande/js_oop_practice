'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(Person.prototype);
// console.log(jonas);
// console.log(jonas.__proto__);
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);

// CHALLENGE 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();

//ES6 CLASSES

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }
// const Jessica = new PersonCl('Jessica', 1996);

//OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

//CHALLENGE 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes');

//CHALLENGE 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

//ENCAPSULATION

// class Account {
//   locale = navigator.language;
//   bank = 'Bankist';
//   #movements = []; //private field
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//   }

//   getMovements() {
//     return this.#movements; //non-chainable
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }
//   #approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//     }
//     return this;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdrawal(140);

// acc1.deposit(200).withdrawal(500).deposit(600);

//CHALLENGE 4

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(speed);
  }
  brake() {
    this.speed -= 5;
    console.log(speed);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    return this;
  }
}
