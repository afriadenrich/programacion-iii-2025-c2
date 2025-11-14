const contadorElement: HTMLElement | null = document.getElementById("contador");
const contadorButton: HTMLElement | null =
  document.getElementById("contador-btn");

let contador: number = 0;
let nombre: string = "Agus";
// let valor: boolean = 88;

function contar(): Function {
  contador++;
  if (contadorElement) {
    contadorElement.innerText = contador.toString();
  }

  return () => {
    console.log("Hola");
  };
}

// if (contadorButton !== null) {
//   contadorButton.onclick = contar;
// }

// Forzar a que ejecute, no importa si puede ser null
contadorButton!.onclick = contar;

// contadorButton?onclick = contar -> Si contadorButton pudiese ser undefined y lo es, no ejecuta.

// Otras asignaciones

interface Usuario {
  nombre: string;
  apellido: string;
}

const usuario: Usuario = {
  nombre: "",
  apellido: "",
  // algoMas: "error",
};

// usuario.otraCosa = "Error"

let noSeQueEs: any = {
  algo: "algo",
};

noSeQueEs.otro = "Otro";
