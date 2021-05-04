// Crea un array vuoto.

var numeriDispari = [];
// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++ ) {
    var num = parseInt(prompt("Inserisci un numero"));
    // console.log(num);
    if(isOdd(num)) {
        numeriDispari.push(num);
        // console.log(numeriDispari);
    }
}
console.log(numeriDispari);

// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.