// api: https://thronesapi.com/

const CHAR_API_URL = "https://thronesapi.com/api/v2/Characters";

// Elementos de la tabla
const tBody = document.getElementById("tbody");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const main = document.getElementById("main");

// Elementos de la card
const imageEl = document.getElementById("image");
const nameEl = document.getElementById("name");
const titleEl = document.getElementById("title");
const familyEl = document.getElementById("family");

// Para la paginación
const pageLimit = 6;
let currentPage = 1;

// Listado de personajes porque la API no hace la paginación
let characters = [];

// Métodos para traer de la API
const fetchCharacters = async () => {
  const response = await fetch(CHAR_API_URL);
  const data = await response.json();

  return data;
};

const fetchSingleCharacter = async (id) => {
  const response = await fetch(`${CHAR_API_URL}/${id}`);
  const data = await response.json();

  return data;
};

// Método para mostrar la tabla de personajes.
// Se recarga cada vez que se hace la paginación
const showCharacters = () => {
  tBody.replaceChildren();

  const start = (currentPage - 1) * pageLimit;
  for (let i = start; i < start + pageLimit; i++) {
    if (characters[i]) {
      const row = document.createElement("tr");
      const id = document.createElement("th");
      const name = document.createElement("td");

      row.style.cursor = "pointer";
      row.addEventListener("click", () => {
        showSingleCharacter(characters[i].id);
      });

      id.scope = "row";
      id.innerText = characters[i].id;

      name.innerText = characters[i].fullName;

      row.appendChild(id);
      row.appendChild(name);

      tBody.appendChild(row);
    }
  }
};

// Método para mostrar un personaje en el elemento main.
// Más simple que el anterior
const showSingleCharacter = async (id) => {
  const data = await fetchSingleCharacter(id);

  if (data) {
    main.classList.remove("d-none");

    imageEl.src = data.imageUrl;
    titleEl.innerText = data.title;
    nameEl.innerText = data.fullName;
    familyEl.innerText = data.family;
  }
};

// Se fija si hay una próxima página calculando cuál es la última.
// Si no hay próxima, no hace nada.
// Si hay próxima página, cambia la currentPage y recarga la tabla con showCharacters().
const nextPage = () => {
  const nextPage = currentPage + 1;
  const lastPage = Math.ceil(characters.length / pageLimit);

  console.log(nextPage, lastPage);
  if (nextPage > lastPage) {
    return;
  }

  if (nextPage === lastPage) {
    next.disabled = "true";
  }

  currentPage = nextPage;

  prev.disabled = "";

  showCharacters();
};

// Mismo que el next, solo que si no hay página previa no hace nada.
const prevPage = () => {
  if (currentPage <= 1) {
    return;
  }

  currentPage--;

  if (currentPage === 1) {
    prev.disabled = "true";
  }

  next.disabled = "";

  showCharacters();
};

// Asigno todo lo que tiene que pasar cuando cargue el documento y los eventos siguientes.
// También se puede asignar en window.onload.
document.addEventListener("DOMContentLoaded", async (ev) => {
  characters = await fetchCharacters();

  showCharacters();

  prev.addEventListener("click", prevPage);
  next.addEventListener("click", nextPage);

  prev.disabled = "true";
});
