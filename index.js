let corpoTombola = document.querySelector(".tombola");
let celleNumeri = [];
console.log(celleNumeri);
const stampareNumeriSchermo = function () {
  for (let i = 0; i < 90; i++) {
    let valoreNumerico = i + 1;

    let contenitoreNumero = document.createElement("div");
    contenitoreNumero.classList.add("conteiner-numero");

    let numeriTombola = document.createElement("h3");
    numeriTombola.innerText = valoreNumerico;

    contenitoreNumero.appendChild(numeriTombola);
    corpoTombola.appendChild(contenitoreNumero);

    celleNumeri.push({ numero: valoreNumerico, elemento: contenitoreNumero });
  }
};
let numeriUsciti = [];
console.log(numeriUsciti);
stampareNumeriSchermo();
let button = document.querySelector(".estrai");
button.addEventListener("click", function () {
  let numeroCasuale = Math.floor(Math.random() * 90) + 1;
  console.log(numeroCasuale);
  for (let i = 0; i < celleNumeri.length; i++) {
    if (numeroCasuale === celleNumeri[i].numero) {
      numeriUsciti.push(numeroCasuale);
      if (numeroCasuale !== numeriUsciti) {
        numeriUsciti.push([numeroCasuale]);
        celleNumeri[i].elemento.style.backgroundColor = "#ffe200";
      } else {
        Math.floor(Math.random() * 90) + 1;
      }
    }
  }
});
let miniTabella = document.querySelector(".mini-tabella");
const stampaMiniTabella = function () {
  for (let i = 0; i < 24; i++) {
    let celleCasuali = Math.floor(Math.random() * 90) + 1;
    let contenitoreNumero = document.createElement("div");
    contenitoreNumero.classList.add("conteiner-numero");

    let numeriMiniTabella = document.createElement("h3");
    numeriMiniTabella.innerText = celleCasuali;

    contenitoreNumero.appendChild(numeriMiniTabella);
    miniTabella.appendChild(contenitoreNumero);
  }
};
stampaMiniTabella();
