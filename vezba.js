"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    surname;
    age;
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getfullname() {
        return `${this.name} ${this.surname} ${this.age} `;
    }
}
const Personone = new Person("Mitar", "Rebic", 22);
console.log(Personone);
let brojevi = [1, 2, 3, 4, 5];
let imena = ["petar", "marko", "mitar", "predrag"];
brojevi.push(8);
imena.push("milovan");
console.log(brojevi);
console.log(imena);
/*grananje */
let godine = 18;
if (godine >= 18) {
    console.log("punoletan");
}
else {
    console.log("maloletan");
}
function saberi(a, b) {
    let rezultat = a + b;
    return rezultat;
}
let zbir = saberi(2, 4);
console.log(zbir);
let osoba = {
    ime: "Mitar",
    prezime: "rebic",
    godine: 22,
    zaposlen: false
};
console.log(osoba.ime);
console.log(osoba.godine);
class Animal {
    makeSound() {
        console.log("Some animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
const animals = [
    new Dog(),
    new Cat()
];
animals.forEach(animal => {
    animal.makeSound();
});
class Animal1 {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Lion extends Animal1 {
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const lion = new Lion("Rex");
lion.eat();
lion.bark();
//# sourceMappingURL=vezba.js.map