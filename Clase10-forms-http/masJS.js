const timeout = setTimeout(() => {
  console.log("Pasó el timeout");
  clearInterval(intervalo);
}, 5000);

// Sirve para medir tiempos concretos

// NO se usa para tiempos indeterminados
// imagen.onload

const intervalo = setInterval(() => {
  console.log("intervalo");
}, 1000);

console.log(timeout);
console.log(intervalo);

let contador = 0;
const parrafo = document.getElementById("parrafo");
const intervaloContador = setInterval(() => {
  contador += 0.05;
  parrafo.innerText = contador;
}, 50);

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Enter") {
    clearInterval(intervaloContador);
  }
});

Math.cos(8);

const array = [0, 0, 1, 3, 2, 4, 5, 6, 7, 7, 7];
const set = new Set(array);
console.log(set);
