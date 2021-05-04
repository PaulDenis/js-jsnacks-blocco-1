// Generatore di “nomi cognomi” casuali 

// scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nomi = ["Andrea", "Denis", "Simina", "Giada", "Ermenegildo", "Edoardo", "Francesca", "Karen", "Mario", "Marco", "Kyo", "Franco"];
console.log(nomi);

var cognomi = ["Paul", "Rossi", "Watanabe", "Gherardi", "Pirelli", "Pirani", "Cavicchi", "Francola", "Plesa", "Picasso", "Pola"];
console.log(cognomi);

for (var i = 0; i < 10; i++) {
    var nomiInvitati = invitati(cognomi)+ " " + invitati(nomi);
    document.getElementById("invitati").innerHTML += "<li> Il/la signor* <span>" + nomiInvitati + "</span> è invitat* alla festa di Gatsby. </li>"
}