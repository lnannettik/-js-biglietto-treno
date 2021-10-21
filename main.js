
// CHIEDIAMO DI INSERIRE IL NOME
const nomeUtente = prompt('Inserisci il tuo nome');

// CHIEDIAMO DI INSERIRE IL COGNOME
const cognomeUtente = prompt('Inserisci il tuo cognome');

// CHIEDIAMO DI INSERIRE IL COLORE
const coloreUtente = prompt('Inserisci il tuo colore preferito');

// Generatore di numeri random A
const valRandomA = Math.floor(Math.random()*100);

// Generatore di numeri random B
const valRandomB = Math.floor(Math.random()*100);

// Generatore di numeri random C
const valRandomC = Math.floor(Math.random()*100);


// // ESPRESSIONE CHE DA' IL RISULTATO
// const passUtente = nomeUtente + cognomeUtente + coloreUtente;

// ESPRESSIONE CHE DA' IL RISULTATO spaziato
// const passUtente = `${nomeUtente } ${cognomeUtente } ${coloreUtente}`;

// ESPRESSIONE CHE DA' IL RISULTATO random
const passUtente = nomeUtente + valRandomA + cognomeUtente + valRandomB + coloreUtente + valRandomC;


// MOSTRIAMO IL RISULTATO
document.getElementById('risultato').innerHTML = `La tua password (molto poco sicura) è: ${passUtente} 21`;