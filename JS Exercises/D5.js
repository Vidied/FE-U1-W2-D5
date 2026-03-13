/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

const c = function (t) {
  console.log(t);
};

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
c(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
c(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.splice(0, 1)[0]);
c(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

/* ho realizzato che mi potesse tornare utile come funzione nell'esercizio dopo quindi la rifaccio come tale
for (i = 0; i < cars.length; i++) {
  let licencePlate = "EP" + Math.floor(Math.random() * 900) + "CODE";
  cars[i].licencePlate = licencePlate;
}*/

const licenza = function () {
  for (let i = 0; i < cars.length; i++) {
    let licencePlate = "EP" + Math.floor(Math.random() * 900) + "CODE";
    cars[i].licencePlate = licencePlate;
  }
};
licenza();
c(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let Yaris = {
  brand: "Toyota",
  model: "Yaris",
  color: "Grey",
  trims: ["idk", "cheap"],
};

cars.push(Yaris);
licenza();
c(cars);

// prova cars[1].trims.pop();
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
c(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

c(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* prova teoria
let random = cars[0].color.split("");
c(random);*/

/* prima versione
for (i = 0; i < cars.length; i++) {
  let divisore = cars[i].color.split("");
  if (cars[i].color[0] === "b") {
    c("Fizz");
  } else {
    c("Buzz");
  }
}
*/

//rivisitata e migliorata
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0).toLowerCase() === "b") {
    c("Fizz");
  } else {
    c("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let index = 0;
let numero = numericArray[index];
while (index < numericArray.length) {
  c(numericArray[index]);
  if (numericArray[index] === 32) {
    break;
  }
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let numeri = [];
for (let i = 0; i < charactersArray.length; i++) {
  let valori = charactersArray[i].toLowerCase();
  let valore = 0;
  switch (valori) {
    case "a":
      valore = 1;
      break;
    case "b":
      valore = 2;
      break;
    case "c":
      valore = 3;
      break;
    case "d":
      valore = 4;
      break;
    case "e":
      valore = 5;
      break;
    case "f":
      valore = 6;
      break;
    case "g":
      valore = 7;
      break;
    case "h":
      valore = 8;
      break;
    case "i":
      valore = 9;
      break;
    case "j":
      valore = 10;
      break;
    case "k":
      valore = 11;
      break;
    case "l":
      valore = 12;
      break;
    case "m":
      valore = 13;
      break;
    case "n":
      valore = 14;
      break;
    case "o":
      valore = 15;
      break;
    case "p":
      valore = 16;
      break;
    case "q":
      valore = 17;
      break;
    case "r":
      valore = 18;
      break;
    case "s":
      valore = 19;
      break;
    case "t":
      valore = 20;
      break;
    case "u":
      valore = 21;
      break;
    case "v":
      valore = 22;
      break;
    case "w":
      valore = 23;
      break;
    case "x":
      valore = 24;
      break;
    case "y":
      valore = 25;
      break;
    case "z":
      valore = 26;
      break;
    default:
      valore = "non definito";
  }
  numeri.push(valore);
}

c(numeri);
