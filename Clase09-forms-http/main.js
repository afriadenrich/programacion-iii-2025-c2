// GET
// http://api.url.com/ruta -> ruta
// http://api.url.com/ruta?clave=valor&otra_clave=otro_valor -> query params
// http://api.url.com/ruta/{nombre} -> parámetros de ruta  //   route params

const getElement = document.getElementById("GET");
const getPorIdElement = document.getElementById("GET_ID");
const postElement = document.getElementById("POST");
const putElement = document.getElementById("PUT");
const deleteElement = document.getElementById("DELETE");
const form = document.getElementById("form");

const API_URL = "https://final-labo-3.vercel.app/";

async function traerTodos() {
  const respuesta = await fetch(API_URL);
  const json = await respuesta.json();

  console.log(json);
}

getElement.onclick = () => {
  traerTodos();
};

async function traerPorId(id) {
  const respuesta = await fetch(API_URL + id);
  const json = await respuesta.json();

  console.log(json);
}

getPorIdElement.addEventListener("click", () => traerPorId(12));

// Verbo ♥ - URL ♥ - BODY
async function crearAuto() {
  const auto = {
    marca: "Ferrari",
    modelo: "333",
    precio: 999,
    fechaSalida: "1800-10-05",
  };

  const respuesta = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(auto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  switch (respuesta.status) {
    case 200:
      console.log("Todo ok");
      break;
    case 400:
      console.log("Fijate");
  }

  const json = await respuesta.json();

  console.log(json);
}

postElement.addEventListener("click", crearAuto);

async function editarAuto() {
  const respuesta = await fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify({
      id: 17,
      marca: "Audi",
      modelo: "ABC",
      precio: 9999,
      fechaSalida: "105-10-05",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

putElement.onclick = editarAuto;

async function eliminarAuto(id) {
  const respuesta = await fetch(API_URL + id, { method: "DELETE" }); // Elimina un AUTO
  //   const respuesta = await fetch(API_URL + id, { method: "GET" }); -> Trae un AUTO
}

deleteElement.onclick = () => eliminarAuto(20);

// Capturar el submit de un form

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(event);
};

// form.addEventListener("submit", (event) => {

// });
