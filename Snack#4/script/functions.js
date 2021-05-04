function invitati () {
    var cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    var nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];

    var invitati = cognomeCasuale + " " + nomeCasuale;

    return invitati;
}