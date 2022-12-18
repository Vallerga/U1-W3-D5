/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A\n");
let sum = 10 + 20;
console.log("sum è:", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("\nESERCIZIO B\n");
let random = Math.floor(Math.random() * 21);
console.log("random è: ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("\nESERCIZIO C\n");
const me = {
  name: "Antonio",
  surname: "Vallerga",
  age: 37,
};
console.log("L'oggetto me è: ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("\nESERCIZIO D\n");
delete me.age;
console.log("L'oggetto me è: ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("\nESERCIZIO E\n");
me.skills = ["javascript"];
console.log("L'oggetto me è: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("\nESERCIZIO F\n");
me.skills.push("C");
console.log("L'oggetto me è: ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("\nESERCIZIO G\n");
me.skills.pop();
console.log("L'oggetto me è: ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("\n\n\nESERCIZIO 1\n");
const dice = () => {
  let roll = Math.floor(Math.random() * 6 + 1);
  return roll;
};
console.log("la spada fa danno: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("\nESERCIZIO 2\n");
let num1 = 10;
let num2 = 20;
const whoIsBigger = (param1, param2) => {
  if (param1 > param2) {
    let largest = param1;
    return largest;
  } else if (param2 > param1) {
    let largest = param2;
    return largest;
  } else {
    console.log("sei sicuro di cosa stai facendo volodymyr?");
    return 1;
  }
};
console.log("Il numero più grande è: ", whoIsBigger(num1, num2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("\nESERCIZIO 3\n");
let stringa = "Epicode fa corsi di frontend";
const splitMe = function (par) {
  let arr = par.split(" ");
  return arr;
};
console.log("la stringa scomposta è: ", splitMe(stringa));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("\nESERCIZIO 4\n");
let stringa1 = "Antonio";
let booleano = true;
let deleteOne = (param, bool) => {
  let result;
  if (bool === true) {
    result = param.slice(1);
    return result;
  } else if (bool === false) {
    result = param.slice(0, param.length - 1);
    return result;
  }
};
console.log("senza la prima lettera: ", stringa1.slice(1));
console.log("senza la l'ultima lettera: ", stringa1.slice(0, stringa1.length - 1));
console.log("la stringa modificata è", deleteOne(stringa1, booleano));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("\nESERCIZIO 5\n");
let stringa2 = "siamo 4 ma il 1(alias: primo) ci supera di 2 posizioni";
let onlyLetters = (param) => {
  let arrScomposed;
  let arrayNumber = [];
  let arrRecostructed = [];
  let result2;
  for (j = 0; j < 10; j++) {
    arrayNumber[j] = j;
  }
  for (i = 0; i < param.length; i++) {
    arrScomposed = param[i].charAt();
    if (arrayNumber.includes(+arrScomposed)) {
      arrRecostructed[i] = " ";
    } else if (!arrayNumber.includes(+arrScomposed)) {
      arrRecostructed[i] = arrScomposed;
    } else {
      console.log("qualcosa non funziona");
      return 1;
    }
  }
  return arrRecostructed.join("").replaceAll("   ", " ").replaceAll("  ", " ");
};
console.log("Stringa originale: ", stringa2, "\nStringa senza numeri: ", onlyLetters(stringa2));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("\nESERCIZIO 6\n");
const isThisAnEmail = (param) => {
  if (param.includes("@") && (param.includes(".it") || param.includes(".com"))) {
    return "Mail valida", param;
  } else {
    return "Qualcosa non funzione, se sicuro sia una mail?", 1;
  }
};
let mailTest = "ciao.me@gmail.com";
console.log(isThisAnEmail(mailTest));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("\nESERCIZIO 7\n");
const whatDayIsIt = () => {
  let today = new Date();
  return today;
};
console.log("oggi è: ", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }*/
/*funzione rollTheDices riceve un parametro
chiama la funzione dice il numero di volte del parametro
produce un oggetto con 2 proprieta
proprietà sum è la somma dei valori estratti
proprietà values con array con tutti i valori di dice() prodotti*/

console.log("\nESERCIZIO 8\n");
const rollTheDices = function (diceNumber) {
  let resultDice = [];
  for (i = 0; i < diceNumber; i++) {
    resultDice[i] = dice();
  }
  let sumDice = resultDice.reduce((acc, val) => (acc += val));
  const diceResult = {
    sum: 0,
    values: [],
  };
  diceResult.sum = sumDice;
  diceResult.values = resultDice;
  return diceResult;
};
numberOfDiceUsed = 6;
console.log(rollTheDices(numberOfDiceUsed));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("\nESERCIZIO 9\n");
const howManyDays = (myDate) => {
  let today = new Date();
  howManyMilToday = today.getTime();
  howManyMilMyBirth = myDate.getTime();
  let milDiff = howManyMilToday - howManyMilMyBirth;
  return Math.abs(Math.round(milDiff / (1000 * 60 * 60 * 24)));
};
const genDate = (day, month) => {
  let generalDate = new Date();
  generalDate.setDate(day);
  generalDate.setMonth(month);
  return generalDate;
};
let mydayDate = 3;
let myMonthDate = 11;
console.log(`Ci sono ${howManyDays(genDate(mydayDate, myMonthDate))} giorni di differenza`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("\nESERCIZIO 10\n");
const isTodayMyBirthday = (myDate) => {
  let today = new Date();
  howManyMilToday = today.getTime();
  howManyMilMyBirth = myDate.getTime();
  let milDiff = howManyMilToday - howManyMilMyBirth;
  if (Math.round(milDiff / (1000 * 60 * 60 * 24)) === 0) {
    return true;
  }
};
birthdayDate = 17;
birthMonthDate = 11;
if (isTodayMyBirthday(genDate(birthdayDate, birthMonthDate)) === true) {
  console.log("Auguri! Buon compleanno!");
} else {
  console.log(`Mancano solo ${howManyDays(genDate(birthdayDate, birthMonthDate))} giorni dal tuo compleanno!`);
}
isTodayMyBirthday(genDate(birthdayDate, birthMonthDate));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.

*/

console.log("\nESERCIZIO 11\n");
console.log(me);
const deleteProp = (obj, stringa) => {
  delete obj[stringa];
  return obj;
};
console.log(deleteProp(me, "name"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
console.log("\nESERCIZIO 12\n");
const years = [];
const newestMovie = () => {
  let years = movies.map((element) => element.Year);
  let newFilm = years.reduce((acc, val) => (acc > val ? (acc = val) : (acc = acc)));
  let indexOfFilm = years.indexOf(newFilm);
  return movies[indexOfFilm];
};
console.log("il film più giovane è: ", newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("\nESERCIZIO 13\n");
const countMovies = () => movies.length;
console.log(`Ci sono ${countMovies()} film`);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("\nESERCIZIO 14\n");

const onlyTheYears = () => movies.map((element) => element.Year);
console.log("gli anni dei film sono:", onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("\nESERCIZIO 15\n");
const onlyInLastMillennium = () => movies.filter((element) => +element.Year <= 2000);
console.log("i film dopo il 2000:", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("\nESERCIZIO 16\n");
const sumAllTheYears = () => {
  let years = movies.map((element) => element.Year);
  years = years.map((element) => +element);
  return years.reduce((acc, val) => acc + +val);
};
console.log("la somma di tutti gli anni dei film prodotti è: ", sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("\nESERCIZIO 17\n");
const searchByTitle = (title) => {
  let container = movies.map((element) => element.Title);
  filmMached = container.filter((element) => (element.includes(title) ? true : false));
  return movies.filter((element, i) => filmMached[i]);
};
searchingString = "Fellowsh";
console.log("i film cercati sono: ", searchByTitle(searchingString));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("\nESERCIZIO 18\n");
const searchAndDivide = (title) => {
  let container1 = movies.map((element) => element.Title);
  const searchObjResult = {
    matchFilm: {},
    unmatchFilm: {},
  };
  filmMached1 = container1.filter((element) => (element.includes(title) ? true : false));
  searchObjResult.matchFilm = movies.filter((element, i) => filmMached1[i]);
  console.log(searchObjResult);
  searchObjResult.unmatchFilm = movies.filter((element, i) => !filmMached1[i]);
  return searchObjResult;
};
searchingString1 = "Fellowsh";
console.log("il risultato della ricerca ", searchAndDivide(searchingString));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("\nESERCIZIO 19\n");
const removeIndex = (escludingNum) => movies.filter((element, i) => i !== escludingNum);

let numForRemoveIndex = 5;
console.log(`l'array movie senza il film in posizione ${numForRemoveIndex} è:`);
console.log(removeIndex(numForRemoveIndex));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const getContainer = function () {
  const contPlace = document.getElementById("#container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const getAllTd = function () {
  const allTd = document.querySelectorAll("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printAllTheTd = function () {
  const allTd = document.querySelectorAll("td");
  allTd.forEach((element) => console.log(element));
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const applyBackgroundLink = function () {
  const allLink = document.querySelectorAll("a>h1");
  allLink.forEach((element) => (element.style.background = "red"));
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLiItem = function () {
  const selectMyList = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.innerText = "EPICO";
  selectMyList.appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const deleteLiItem = function () {
  const cancelLi = document.querySelector("#myList li");
  cancelLi.remove();
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassNameTr = function () {
  const trArray = document.querySelectorAll("tr");
  trArray.forEach((element) => element.className = "test");
  trArray.forEach((element) => (element.style.background = "red"));
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
  prende un numero
  scrive asterischi
  alto quanto numero
  ogni riga un asterisco in più
*/

console.log("\nESERCIZIO 27\n");
let treeHeight = 6;
let freeArr = [];

for (i = 0; i <= treeHeight; i++) {
  freeArr[i] = "";
  halfTree = freeArr.join("*");
  console.log(halfTree);
}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// console.log("\nESERCIZIO 28\n");
num = 6;
x = [];

for (i = 0; i <= num; i++) {
  x[i] = "";
}

for (i = num; i <= 0; i--) {
  x[Math.abs(i)] = "";
  y = x.join("*");
  // console.log(y);
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

/*movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];*/
