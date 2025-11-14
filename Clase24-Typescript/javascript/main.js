const contadorElement = document.getElementById("contador");
const contadorButton = document.getElementById("contador-btn");

let contador = 0;

function contar() {
  contador++;
  contadorElement.innerText = contador;
}

contadorButton.onclick = contar;
