// Crea un array vuoto.

var numeriDispari = [];
// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++ ) {

    // se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
    var num = parseInt(prompt("Inserisci un numero"));
    // console.log(num);
    if(isOdd(num)) { //se isOdd = true, allora entra nel ciclo
        numeriDispari.push(num);
    }
}

// Stampa l'array nella console.
console.log(numeriDispari);
