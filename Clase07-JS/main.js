// fetch() -> traer -> hace solicitudes / peticiones

// solicitud y resputa (la respuesta tarda)

// const respuesta = fetch("url"); -> NO VA porque necesita tiempo para que llegue la respuesta.

// ASINCRONISMOS

// 1. Hacer la petición.
// 1.5 -> ESPERAR
// 2. Hacer algo cuando llegue la respuesta.

// Peticiones HTTP / HTTPS - S de Secure

// HTTP -> HyperText Transfer Protocol

// API -> Application Programming Interface

// Servidor API-REST: REST -> Representational State Transfer

// Resumen
// Peticiones / solicitudes -> A un servidor API-REST -> Esperar una respuesta

// ASINCRONISMOS
/*
    pedir a google que me busque algo.

    seguir haciendo otra cosas
    
    ...
    
    llega la respuesta, se hace algo con la respuesta.

    seguir haciendo otra cosas
 */

// PROMESAS
const pokemon1 = "togekiss";
const pokemon2 = "charmander";
const url = "https://pokeapi.co/api/v2/pokemon/";

console.log("ANTES DE HACER LA PETICIÓN");

// Creamos la petición
const promesa = fetch(url + pokemon1, {
  method: "GET", // GET es por defecto
});

console.log("HICE LA PETICIÓN");
// Qué tiene que hacer cuando llegue.
// THEN recibe una callback que toma como parámetro la RESPUESTA / RESPONSE
promesa.then((respuesta) => {
  console.log("LLEGA LA RESPUESTA");
  console.log(respuesta);

  const jsonFinal = respuesta.json();
  jsonFinal.then((valorFinalFinalDeVerdad) => {
    console.log(valorFinalFinalDeVerdad);
  });
});

// promesa.then((respuesta) => {
//   respuesta.json().then((valor) => {
//     console.log(valor);
//   });
// });

console.log("DESPUÉS DE DEFINIR EL .THEN");

// try {

// }catch(error){

// } finally{

// }

/**
 * Métodos HTTP: (son acciones)
 * GET -> TRAER información
 * POST -> CREAR
 * PUT -> MODIFICAR UN OBJETO ENTERO
 * PATCH -> MODIFICAR UNA PARTE
 * DELETE -> BORRAR
 * OPTIONS -> Obtener info (interno)
 */

// OTRA FORMA
// async - await

async function traerPokemon(pkmn) {
  const respuesta = await fetch(url + pkmn);
  const valor = await respuesta.json();

  console.log(valor);
}

traerPokemon(pokemon2);

// const algo = async () => {};
