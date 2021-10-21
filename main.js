
// CHIEDIAMO DI INSERIRE IL NOME
const nomeUtente = prompt('Inserisci il tuo nome');

// CHIEDIAMO DI INSERIRE L'ETA' (O L'ANNO DI NASCITA)
const etaUtente = parseInt( prompt('Inserisci la tua età'));

// if (etaUtente = NaN) {
//     alert (`CAPRA!! DEVI SCRIVERE DEI NUMERI`)
// }

// CHIEDIAMO DI INSERIRE I KM
const kilometri = parseInt( prompt('Inserire la distanza da percorrere in km'));


// MOSTRIAMO IL NOME
document.getElementById('nomeUtente').innerHTML = `Sig. ${nomeUtente}`;


// DEFINIAMO IL PREZZO (lordo)
let prezzoPieno = `${kilometri}` * (21 / 100);
console.log(`il prezzo pieno è: ${prezzoPieno}`);


// // DEFINIAMO IL PREZZO UNDER 18
// let scontoUnder18 = `${prezzoPieno}` * (80 / 100);
// console.log(`il tuo prezzo è pari a: ${scontoUnder18}`);

// // DEFINIAMO IL PREZZO OVER 65
// let scontoOver65 = `${prezzoPieno}` * (60 / 100);
// console.log(`il tuo prezzo è pari a: ${scontoOver65}`);



// DEFINIAMO LO SCONTO UNDER 18
let scontoUnder18 = `${prezzoPieno}` * (20 / 100);
console.log(`il tuo sconto è pari a: ${scontoUnder18}`);

// DEFINIAMO LO SCONTO OVER 65
let scontoOver65 = `${prezzoPieno}` * (40 / 100);
console.log(`il tuo sconto è pari a: ${scontoOver65}`);


// DEFINIAMO IL PREZZO SCONTATO UNDER 18
let prezzoFinaleUnder18 = `${prezzoPieno}` - `${scontoUnder18}`;
console.log(`il tuo prezzo finale  come under 18 è ${prezzoFinaleUnder18}`)

// DEFINIAMO IL PREZZO SCONTATO OVER 65
let prezzoFinaleOver65 = `${prezzoPieno}` - `${scontoOver65}`;
console.log(`il tuo prezzo finale  come over 65 è ${prezzoFinaleOver65}`)


if (etaUtente < 18) {
    document.getElementById('prezzoFinaleUnder18').innerHTML = `Esci € ${prezzoFinaleUnder18}`;
}
else if (etaUtente > 65) {
    document.getElementById('prezzoFinaleOver65').innerHTML = `Esci € ${prezzoFinaleOver65}`;
}
else {
    document.getElementById('prezzoPieno').innerHTML = `Esci € ${prezzoPieno}`;
}

