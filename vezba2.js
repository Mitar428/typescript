"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function proveriOcenu(poeni) {
    if (poeni >= 90) {
        return "Odlično";
    }
    else if (poeni >= 70) {
        return "Dobro";
    }
    else if (poeni >= 50) {
        return "Prolazno";
    }
    else {
        return "Pali";
    }
}
function ispisiRezultat(ime, poeni) {
    const ocena = proveriOcenu(poeni);
    console.log(`${ime} ima ${poeni} poena: ${ocena}`);
    if (ocena === "Pali") {
        console.log("   -> Potrebno je ponoviti ispit.");
    }
}
function pozdrav(ime, sat = 12) {
    if (sat >= 5 && sat < 12) {
        return `Dobro jutro, ${ime}!`;
    }
    else if (sat >= 12 && sat < 18) {
        return `Dobar dan, ${ime}!`;
    }
    else {
        return `Dobro veče, ${ime}!`;
    }
}
console.log(pozdrav("Marko")); /*dobar dan marko*/
console.log(pozdrav("Ana", 8)); /*dobro jutro ana*/
console.log(pozdrav("Ivan", 21));
ispisiRezultat("Marko", 95);
ispisiRezultat("Ana", 72);
ispisiRezultat("Ivan", 40);
const poeniStudenata = [88, 55, 30, 100];
for (const poeni of poeniStudenata) {
    console.log(poeni, "->", proveriOcenu(poeni));
}
//# sourceMappingURL=vezba2.js.map