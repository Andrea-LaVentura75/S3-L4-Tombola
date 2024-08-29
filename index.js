let corpoTombola = document.querySelector(".tombola");
let celleNumeri = [];
let arrayDiv = [];
console.log(celleNumeri, arrayDiv);

const stampareNumeriSchermo = function () {
  for (let i = 0; i < 90; i++) {
    let valoreNumerico = i + 1;

    let contenitoreNumero = document.createElement("div");
    contenitoreNumero.classList.add("conteiner-numero");

    let numeriTombola = document.createElement("h3");
    numeriTombola.innerText = valoreNumerico;

    contenitoreNumero.appendChild(numeriTombola);
    corpoTombola.appendChild(contenitoreNumero);

    celleNumeri.push(valoreNumerico);
    arrayDiv.push(contenitoreNumero);
  }
};

let numeriUsciti = [];
let miniTabella = document.querySelector(".mini-tabella");
let miniTabellaNumeri = [];
let miniTabellaDivs = [];

const stampaMiniTabella = function () {
  for (let i = 0; i < 24; i++) {
    let celleCasuali = Math.floor(Math.random() * 90) + 1;

    while (miniTabellaNumeri.includes(celleCasuali)) {
      celleCasuali = Math.floor(Math.random() * 90) + 1;
    }

    let contenitoreNumero = document.createElement("div");
    contenitoreNumero.classList.add("conteiner-numero");

    let numeriMiniTabella = document.createElement("h3");
    numeriMiniTabella.innerText = celleCasuali;

    contenitoreNumero.appendChild(numeriMiniTabella);
    miniTabella.appendChild(contenitoreNumero);

    miniTabellaNumeri.push(celleCasuali);
    miniTabellaDivs.push(contenitoreNumero);
  }
};

stampareNumeriSchermo();
stampaMiniTabella();

let button = document.querySelector(".estrai");
button.addEventListener("click", function () {
  if (celleNumeri.length > 0) {
    let indiceCasuale = Math.floor(Math.random() * celleNumeri.length);
    let numeroCasuale = celleNumeri[indiceCasuale];
    console.log(numeroCasuale);
    numeriUsciti.push(numeroCasuale);

    arrayDiv[numeroCasuale - 1].style.backgroundColor = "#ffe200";
    celleNumeri.splice(indiceCasuale, 1);

    let indexInMiniTabella = miniTabellaNumeri.indexOf(numeroCasuale);
    if (indexInMiniTabella !== -1) {
      miniTabellaDivs[indexInMiniTabella].style.backgroundColor = "#ffe200";
    }

    let contenitoreContatore = document.querySelector(".ultimo-numero p");
    contenitoreContatore.innerText = `L'ultimo numero pescato è: ${numeroCasuale}`;
    let contatore = document.createElement("p");
    contenitoreContatore.appendChild(contatore);
  } else {
    alert("Mi dispiace i numeri sono terminati");
  }
});
