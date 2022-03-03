console.log("Heisann!")

let h2El = document.querySelector("h2");
h2El.innerHTML += ".  Anders stakk også innom.";

let knappEl = document.querySelector("button");
let overskriftEl = document.querySelector("h1");

if (localStorage.antBesok) {
    localStorage.antBesok = Number(localStorage.antBesok) + 1;
} else {
    localStorage.antBesok = 1;
}

//localStorage.antBesok = " ";

h2El.innerHTML += "Du har vært  på denne siden " + localStorage.antBesok + " ganger";

knappEl.addEventListener("click", slettInformasjonskapsler);
overskriftEl.addEventListener("click", mangeHei);


function slettInformasjonskapsler(){
    console.log("Slettet informasjonskapsler")
    localStorage.clear()
}


let antTrykk = 0;
function mangeHei(){
    antTrykk++;
    console.log(antTrykk)
    overskriftEl.innerHTML = antTrykk + " ganger Ohoi!";
}