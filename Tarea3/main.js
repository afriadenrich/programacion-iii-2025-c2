function algo(dato = 2) {
  console.log(dato);
}

algo();

algo(4);

const frutas = ["manzana", "banana"];

// ...frutas -> "manzana", "banana"
const copia = [...frutas, "naranja"];
const dato = "Hola";
console.log([...dato]);

// ..."string" -> ["s", "t", "r", "i", "n", "g"]
const videojuegos = ["Bloodborne", "Dark Soul"];
const nuevosVideojuegos = [...videojuegos, "Elden Ring"];
console.log(nuevosVideojuegos);

// Ejercicios complejos
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    // verificamos si además de 1 y sí mismo hay otro divisor.
    if (num % i === 0) return false;
  }
  return true;
}

function encontrarPrimos(n) {
  if (n <= 1) return false;
  const primos = []; // array vacio

  for (let i = 2; i < n; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

console.log(encontrarPrimos(20));

/**
 *
 * @param {string} str
 */
function esPalindromo(str) {
  const inverso = str.split("").reverse().join("");
  return str === inverso;
}

console.log(esPalindromo("hola"));
console.log(esPalindromo("rallar"));

function removerDuplicados(arr) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (resultado.indexOf(i) === -1) {
      // no está, lo agrego
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

let arr = [1, 2, 2, 3, 4, 4, 5];
console.log([...new Set(arr)]);

const r = removerDuplicados([1, 2, 3, 4, 5, 66]);
console.log(r);

function sumarDigitos(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i], 10);
  }
  return sum;
}

// function sumarDigitos(str) {
//   let sum = 0;
//   while (str.length > 0) {
//     sum += parseInt(str.slice(1), 10);
//   }
//   return sum;
// }
console.log(sumarDigitos("12345"));

function flattenArray(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultado = resultado.concat(flattenArray(arr[i]));
    } else {
      resultado.push(arr[i]); // Add non-array elements directly
    }
  }

  return resultado;
}

console.log(flattenArray([1, [2, 3], [4, [5]]])); // Salida: [1, 2, 3, 4, 5]

function verificarBalance(cadena) {
  const stack = [];
  for (const char of cadena) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const last = stack.pop();
      //Si es carácter de cierre el último debe ser de abertura
      if (
        (char === ")" && last !== "(") ||
        (char === "}" && last !== "{") ||
        (char === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }
  //Al final deberíamos llegar a que el largo del array sea 0
  return stack.length === 0;
}

// Stack LIFO -> Last In First Out
console.log(verificarBalance("{([])}"));
