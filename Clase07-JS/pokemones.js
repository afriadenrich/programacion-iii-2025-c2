const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon1 = "charmander";
const pokemon2 = "togekiss";
const pokemon3 = "Hydreigon";

class Pokemon {
  name;
  id;
  sprites = {
    front_default,
  };
}

// Paso 1. Peticiones.
// Paso 2. Callbacks / await.
// Paso 3. Tomar los datos e insertarlos en el DOM.
//      Paso 3.1. Encontrar los elementos.
//      Paso 3.2. Modificar sus atributos.

async function traerDatos(pokemon) {
  const respuesta = await fetch(url + pokemon);
  const valor = await respuesta.json();
  return valor;
}

traerDatos(pokemon2).then((valor) => {
  console.log(valor);
});

// async function mostrar(pokemon) {
//   const res1 = await traerDatos(pokemon);
//   console.log(res1);
// }

// mostrar(pokemon1);

// .name
// .sprites.front_default
// .id

async function mostrarEnHTML(pokemon, numero) {
  // const res = await traerDatos(pokemon);

  /**
   * @type {Pokemon}
   */
  // const res = await traerDatos(pokemon);
  try {
    const { name, id, sprites } = await traerDatos(pokemon);

    const imagen = document.getElementById("imagen" + numero);
    const nombre = document.getElementById("nombre" + numero);
    const descripcion = document.getElementById("descripcion" + numero);

    imagen.src = sprites.front_default;
    nombre.innerText = name;
    descripcion.innerText = "Número " + id;
  } catch (error) {
    console.log("Hubo un error, pokemon no encontrado");
  }
}

mostrarEnHTML(pokemon1, 1);
mostrarEnHTML(pokemon2, 2);
mostrarEnHTML(pokemon3, 3);
