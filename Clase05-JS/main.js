let nombre = "Agus";

let apellido = "Friadenrich";

const PI = 3.14;
const Pi = 3.14;
const pi = 3.14;
const pI = 3.14;

nombre = 89;

apellido = null;

// No se puede asignar un nuevo valor a una constante :(
// PI = "";

function mostrarNombre() {
  let variableLocal = "Algo";
}

/*
Solo se puede acceder a las variables dentro del scope donde fueron definidas.
console.log(variableLocal);
*/

let numero = 8;

console.log(numero * 2);
console.log(numero / 2);
console.log(numero + 2);
console.log(numero - 2);

numero = 16;

console.log(numero);

numero++;
console.log(numero);
numero--;
console.log(numero);
console.log("==Decrementos==");
console.log(--numero);
console.log(numero--);

// numero = -10;

if (0 === false) {
  console.log("Verdadero");
} else {
  console.log("Falso");
}

// Yo no determino el tipo de dato explicitamente.

// Comparación por valor
// Comparación por valor Y por tipo

// Tipos de datos primitivos:
// string -> cadenas
let cadena = "string";
// number -> numeros en general
numero = 9.6;
// bool -> true o false
let buleano = false;
// null -> "Vacío"
// undefined -> "No se asignó nada"

let algo = undefined;
console.log(algo);
if (algo !== null) {
  console.log("Verdadero");
} else {
  console.log("Falso");
}

// Objetos:
// Object: { }
// Clases: Date, Error, JSON, Math, Object, String, Number, Boolean, Console, HTMLElement, HTMLBodyElement
// Arrays, Map, Set

console.log("hola " + "mundo");

const hola = "Hola";
const mundo = "Mundo";

console.log(hola, mundo);

console.log(`Este es mi primer ${hola} ${mundo} en javascript`);
