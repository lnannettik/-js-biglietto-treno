
// CHIEDIAMO DI INSERIRE IL NOME
const nomeUtente = prompt('Inserisci il tuo nome');

// CHIEDIAMO DI INSERIRE L'ETA' (O L'ANNO DI NASCITA)
const etaUtente = parseInt( prompt('Inserisci la tua età'));

// CHIEDIAMO DI INSERIRE I KM
const kilometri = parseInt( prompt('Inserire la distanza da percorrere in km'));


// MOSTRIAMO IL NOME
document.getElementById('nomeUtente').innerHTML = `Sig. ${nomeUtente}`;


// DEFINIAMO IL PREZZO (lordo)
let prezzoPieno = `${kilometri}` * (21 / 100);
console.log(`il prezzo pieno è: ${prezzoPieno}`);


// DEFINIAMO LO SCONTO UNDER 18
let scontoUnder18 = `${prezzoPieno}` * (100 / 20);
console.log(`il tuo sconto è pari a: ${scontoUnder18}`);

// DEFINIAMO LO SCONTO OVER 65
let scontoOver65 = `${prezzoPieno}` * (100 / 40);
console.log(`il tuo sconto è pari a: ${scontoOver65}`);


// DEFINIAMO IL PREZZO SCONTATO UNDER 18
let prezzoFinaleUnder18 = `${prezzoPieno}` - `${scontoUnder18}`;

// DEFINIAMO IL PREZZO SCONTATO OVER 65
let prezzoFinaleSconto65 = `${prezzoPieno}` - `${scontoOver65}`;


if (etaUtente < 18) {
    document.getElementById('prezzoFinaleUnder18').innerHTML = `€ ${prezzoFinaleUnder18}`;
}
else if (etaUtente > 65) {
    document.getElementById('prezzoFinaleOver65').innerHTML = `€ ${prezzoFinaleOver65}`;
}
else {
    document.getElementById('prezzoPieno').innerHTML = `€ ${prezzoPieno}`;
}












// // ESPRESSIONE CHE DA' IL RISULTATO
// const prezzo = `${kilometri } * ${sconto }`;




// // ESPRESSIONE CHE DA' IL RISULTATO
// const passUtente = nomeUtente + cognomeUtente + coloreUtente;


// // ESPRESSIONE CHE DA' IL RISULTATO random
// const prezzo = nomeUtente + valRandomA + cognomeUtente + valRandomB + coloreUtente + valRandomC;


