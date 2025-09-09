// Queremos traer la info de dos pokemones usando fetch.
// .then
// Async / await
// Formas de resolver promesas
const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon1 = "Hydreigon";
const pokemon2 = "Arceus";
const pokemon3 = "Dialga";

// Petición es la promesa.
const peticion = fetch(url + pokemon1);
const peticion2 = fetch(url + pokemon2);

// Cuando se cumpla la promesa, quiero obtener la respuesta.
peticion.then((respueta) => {
  const json = respueta.json();
  json.then((valor) => {
    console.log(valor);
  });
});

peticion2.then(async (res) => {
  const valor = await res.json();
  console.log(valor);
});

console.log("ANTES DE DEFINIR EL 3");

async function traer3() {
  const respuesta = await fetch(url + pokemon2);
  const valor = await respuesta.json();
  console.log(valor);
}

console.log("ANTES DE LLAMAR AL 3");

traer3();

console.log("DESPUÉS DE LLAMAR AL 3");

// [[1], [2, 3]].forEach((valor) => {
//   valor.forEach((valor2) => {});
// });
