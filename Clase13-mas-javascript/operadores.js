// console.log(false || true);
// console.log(false && true);
// console.log(...["a", "b", "c"]);

// === <= < > >= ==
// + * - / % **

const temperatura = 19;

// if(temperatura > 15){
//     resultado = "Está lindo";
// } else {
//     resultado = "Hace frío";
// }

const resultado = temperatura > 15 ? devolverMensaje() : "Hace frío";
const haceCalor = temperatura > 15; //  ? true : false;

// =SI(evaluacion, verdadero, falso);

function devolverMensaje() {
  return "Está lindo";
}

// console.log(resultado);

// const mensajeError = error !== null ? "Hubo un error" : "";

// console.log(0 || 0 || 0 || true);
// console.log(false || "derecha");
// console.log("izquierda" || "derecha");
// console.log(0 ?? "derecha");

// Otra forma de usar el &&
// console.log(true && true && "hola");
// console.log(true && false && "hola");

const cargando = true;
const mostrarContenido = false;
const contenido = "Hola mundo";

function mostrar() {
  if (cargando) return false;
  if (!mostrarContenido) return false;

  return contenido;
}

function mostrarConAnd() {
  return !cargando && mostrarContenido && contenido;
}

// Operadores bit a bit.
// 1 -> 0001
// 2 -> 0010
// 3 -> 0011
// 4 -> 0100
// 5 -> 0101
// 6 -> 0111
// 8 -> 1000

// console.log(4 & 6);
// console.log(4 | 6); // or
// console.log(4 ^ 6); // xor
// console.log(~6); // NOT

// console.log(6 << 9);

// console.log(typeof 123);
// console.log(typeof "123");

// instanceof
// console.log(new Number(123) instanceof Number); // true
// console.log(123 instanceof Number); // false
// console.log([] instanceof Array); // true

const objeto = { a: 1, nombre: 2, c: 3, d: 44 };

console.log("a" in objeto);
console.log("nombre" in objeto); // complejidad O(1);
console.log("e" in objeto);

for (const propiedad in objeto) {
  console.log(propiedad);
}

delete objeto.d;

console.log(objeto);
