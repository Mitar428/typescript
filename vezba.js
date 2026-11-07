"use strict";
/*klasi i objekti oop */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    surname;
    age;
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age; /*konstruktor uzima podatke iz klase*/
    }
    getfullname() {
        return `${this.name} ${this.surname} ${this.age} `; /*cita iz konstruktora*/
    }
}
const Personone = new Person("Mitar", "Rebic", 22); /*cita ime,prezime,godine*/
console.log(Personone);
/*nizovi*/
let brojevi = [1, 2, 3, 4, 5];
let imena = ["petar", "marko", "mitar", "predrag"];
brojevi.push(8); /*ubacujem broj 8 u niz bice 1,2,3,4,5,8*/
imena.push("milovan"); /*ubacujem ime milovan*/
console.log(brojevi); /*ispisuje niz brojeva*/
console.log(imena); /*ispisuje imena*/
/*grananje */
let godine = 18;
if (godine >= 18) {
    console.log("punoletan");
}
else {
    console.log("maloletan");
}
/* funkcije*/
function saberi(a, b) {
    let rezultat = a + b;
    return rezultat;
}
let zbir = saberi(2, 4);
console.log(zbir); /*sabira dva broja definisemo u funkciji parametre a i b na kraju pozivamo funkciju u nju ubacujemo koje brojeve da sabere i na kraju dobijemo rezultat*/
/*objekat u programiranju {}*/
/*definisanje objekta*/
let osoba = {
    ime: "Mitar",
    prezime: "rebic",
    godine: 22,
    zaposlen: false
};
console.log(osoba.ime); /*istampace samo ime Mitar u konzoli zato sto smo pozvali iz objekta osoba.ime*/
/*polymorphrism omogucava da razlicite klase imaju iste metode ali drugo ponasanje pozivom te metode*/
/*kljucnom reci extends nasledjujemo klasu Animal*/
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
/*inheterance jedna klasa moze da nasledi osobine druge klase pomocu funkcije extends*/
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