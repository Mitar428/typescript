

class Person{
name:string;
surname:string;
age:number;


constructor(name:string,surname:string,age:number){
    this.name=name;
    this.surname=surname;
    this.age=age;   
}

getfullname(){
    return `${this.name} ${this.surname} ${this.age} `; 
}
}

const Personone=new Person("Mitar","Rebic",22); 
console.log(Personone);





let brojevi:number[]=[1,2,3,4,5]; 
let imena:string[]=["petar","marko","mitar","predrag"];
brojevi.push(8); 
imena.push("milovan"); 
console.log(brojevi);
console.log(imena);


/*grananje */

let godine:number=18;

if (godine >=18){
    console.log("punoletan")
} else{
    console.log("maloletan")
}




function saberi(a:number,b:number):number{
    let rezultat:number=a+b;
    return rezultat;

}

let zbir:number=saberi(2,4);
console.log(zbir); 


let osoba:{
    ime:string;   
    prezime:string;
    godine:number;
    zaposlen:boolean;  
}={
    ime:"Mitar",
    prezime:"rebic",
    godine:22,
    zaposlen:false
}

console.log(osoba.ime); 
console.log(osoba.godine);


class Animal {
    makeSound(): void {
        console.log("Some animal sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const animals: Animal[] = [
    new Dog(),
    new Cat()
];

animals.forEach(animal => {
    animal.makeSound();
});



class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

class Lion extends Animal1 {
    bark(): void {
        console.log(`${this.name} is barking`);
    }
}

const lion = new Lion("Rex");

lion.eat(); 
lion.bark(); 