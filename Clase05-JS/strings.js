console.log(" == STRINGS ==");

/**
 *
 * @param {string} cadena
 */
function mostrar(cadena) {
  console.log(cadena);
}

/**
 * Es un método que devuelve una cadena que le pasás.
 *
 * Posta, no hace nada más
 *
 * @param {string} cadena
 * @returns {string}
 */
function devolver(cadena) {
  return cadena;
}
// javadoc -> documentación java
// jsdoc -> documentación js

const resultado = devolver("  HOLA PROGRAMACION III, qué clase...  ");

// Cómo sé el tipo de dato?

const texto = "HOLA PROGRAMACION III, qué clase...";

console.log(typeof resultado);
console.log(typeof 8);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

if (typeof resultado === "string") {
  console.log("Es un string");
}

mostrar(resultado.length);
mostrar(resultado.slice(6, 12));
mostrar(resultado.trim());
mostrar(resultado.replace("III", "IV"));
mostrar(resultado.toLocaleLowerCase());
mostrar(resultado.toUpperCase());
mostrar(resultado.charAt(20));
mostrar(String().concat("Hola\"'", " ", "mundo"));
mostrar(resultado.startsWith("  "));
mostrar(resultado.endsWith("  "));
mostrar(resultado.indexOf("III"));
// mostrar(resultado.match(/[a-zA-Z]/));
