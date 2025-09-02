console.log(" == ARRAYS ==");
/**
 * @type {number[]}
 */
let listadoDeNumeros = [1, 2, 22, 4, 5, 7, 11, 23, 41, 42, 45];

let listadoDePersnoas = [
  { nombre: "A", apellido: "B" },
  { nombre: "C", apellido: "D", segundoNombre: "ASDA" },
  { nombre: "E", apellido: "F" },
];

let listadoRandom = [
  1,
  "A",
  true,
  false,
  null,
  "AYUDA POR FAVOR",
  "etc...",
  {},
];

console.log(listadoDeNumeros);
console.log(listadoDePersnoas);
console.log(listadoRandom);

mostrar(listadoDeNumeros.length);
mostrar(listadoDeNumeros.indexOf(23));
mostrar(listadoDeNumeros.indexOf(223));
mostrar(listadoDeNumeros[4]);
mostrar(listadoDeNumeros.push(50, 52, 59));
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.pop());
mostrar(listadoDeNumeros);
mostrar(listadoDeNumeros.splice(4, 1));
mostrar(listadoDeNumeros.join(""));
mostrar("1234".split(""));

console.log(1, 2, 3);
// hacerAlgo(1, 2, 3, 4, 5, 6, infinito)
// const array = [1, 2, 3, 4, 5, 6, infinto]
function hacerAlgo(...array) {}

listadoDeNumeros.forEach((elemento, indice, listado) => {
  console.log(indice, elemento);
});

const ordenado = listadoDeNumeros.sort((el1, el2) => {
  if (el1 > el2) {
    return 1;
  } else {
    return -1;
  }
});

/**
 * Busca una coincidencia y la devuelve
 */
const find = listadoDeNumeros.find((elemnto, indice, listado) => {
  if (elemnto > 25) {
    return elemnto;
  }
});

/** Filtra todos los que coincidan */
const filtrado = listadoDeNumeros.filter((elemento) => {
  if (elemento > 25) return elemento;
});

console.log(ordenado);
console.log(find);
console.log(filtrado);

// Más o menos como funciona el foreach internamente
// function forEach(func) {
//   for (let i = 0; i < array.length; i++) {
//     func(array[i], i, array);
//   }
// }
