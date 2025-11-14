const contadorElement = document.getElementById("contador");
const contadorButton = document.getElementById("contador-btn");
let contador = 0;
let nombre = "Agus";
// let valor: boolean = 88;
function contar() {
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
contadorButton.onclick = contar;
const usuario = {
    nombre: "",
    apellido: "",
    // algoMas: "error",
};
// usuario.otraCosa = "Error"
let noSeQueEs = {
    algo: "algo",
};
noSeQueEs.otro = "Otro";
export {};
