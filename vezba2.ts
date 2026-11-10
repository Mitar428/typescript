function proveriOcenu(poeni: number): string {
    if (poeni >= 90) {
        return "Odlično";
    } else if (poeni >= 70) {
        return "Dobro";
    } else if (poeni >= 50) {
        return "Prolazno";
    } else {
        return "Pali";
    }
}

function ispisiRezultat(ime: string, poeni: number): void {
    const ocena: string = proveriOcenu(poeni);
    console.log(`${ime} ima ${poeni} poena: ${ocena}`);

    if (ocena === "Pali") {
        console.log("   -> Potrebno je ponoviti ispit.");
    }
}

function pozdrav(ime: string, sat: number = 12): string {
    if (sat >= 5 && sat < 12) {
        return `Dobro jutro, ${ime}!`;
    } else if (sat >= 12 && sat < 18) {
        return `Dobar dan, ${ime}!`;
    } else {
        return `Dobro veče, ${ime}!`;
    }
}

console.log(pozdrav("Marko")); /*dobar dan marko*/
console.log(pozdrav("Ana", 8)); /*dobro jutro ana*/ 
console.log(pozdrav("Ivan", 21)); 

ispisiRezultat("Marko", 95);
ispisiRezultat("Ana", 72); 
ispisiRezultat("Ivan", 40);

const poeniStudenata: number[] = [88, 55, 30, 100];

for (const poeni of poeniStudenata) {
    console.log(poeni, "->", proveriOcenu(poeni));
}

/*
function cenaUlaznice(godine: number): number {
    if (godine < 7) {
        return 0;
    } else if (godine < 18) {
        return 300;
    } else if (godine < 65) {
        return 600;
    } else {
        return 300;
    }
}


function ispisiUlaznicu(ime: string, godine: number): void {
    const cena: number = cenaUlaznice(godine);

    if (cena === 0) {
        console.log(`${ime} (${godine} god.): ulaz je besplatan.`);
    } else {
        console.log(`${ime} (${godine} god.): ulaznica košta ${cena} din.`);
    }
}

ispisiUlaznicu("Luka", 5); //bice besplatno//
ispisiUlaznicu("Mina", 12);//300 din//
ispisiUlaznicu("Marko", 30); //600 din//
ispisiUlaznicu("Deda Joca", 70); //300 din//
*/


function cenaUlaznice(godine: number, jeVikend: boolean = false): number {
    let cena: number;

    if (godine < 7) {
        cena = 0;
    } else if (godine < 18) {
        cena = 300;
    } else if (godine < 65) {
        cena = 600;
    } else {
        cena = 300;
    }

    // Vikend doplata, ali ne za one koji ulaze besplatno
    if (jeVikend && cena > 0) {
        cena = cena + 100;
    }

    return cena;
}


function ispisiUlaznicu(ime: string, godine: number, jeVikend: boolean = false): void {
    const cena: number = cenaUlaznice(godine, jeVikend);
    const dan: string = jeVikend ? "vikend" : "radni dan"; //ako je vikend true vrati ce vikend a ako je false vrati ce radni dan//

    if (cena === 0) {
        console.log(`${ime} (${godine} god., ${dan}): ulaz je besplatan.`);
    } else {
        console.log(`${ime} (${godine} god., ${dan}): ulaznica košta ${cena} din.`);
    }
}

// Računa ukupnu cenu za celu porodicu
function cenaZaPorodicu(godineClanova: number[], jeVikend: boolean): number {
    let ukupno: number = 0;

    for (const godine of godineClanova) {
        ukupno = ukupno + cenaUlaznice(godine, jeVikend);
    }

    return ukupno;
}

ispisiUlaznicu("Luka", 5);
ispisiUlaznicu("Mina", 12);
ispisiUlaznicu("Marko", 30, true);
ispisiUlaznicu("Deda Joca", 70, true);

const porodica: number[] = [40, 38, 12, 5];

console.log(`Porodica radnim danom: ${cenaZaPorodicu(porodica, false)} din`);
console.log(`Porodica vikendom: ${cenaZaPorodicu(porodica, true)} din`);