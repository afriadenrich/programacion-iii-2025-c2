const form = document.getElementById("form-crear");

const marcaEl = document.getElementById("marca");
const precioEl = document.getElementById("precio");
const fechaDeLanzamientoEl = document.getElementById("fechaDeLanzamiento");

const apiUrl = "https://ejemplo-cors-sqlite.onrender.com";

form.onsubmit = async (event) => {
  // Evito que se recargue la página
  event.preventDefault();

  const marca = marcaEl.value;
  const precio = precioEl.value;
  const fecha = fechaDeLanzamientoEl.value;

  console.log(marca, precio, fecha);

  const body = {
    marca: marca,
    precio: precio,
    fechaDeLanzamiento: fecha,
  };

  const creado = await fetch(apiUrl + "/auto", {
    method: "POST",
    body: JSON.stringify(body), // Importante! Se manda como texto
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(creado);
};

async function traerTodos() {
  const response = await fetch(apiUrl + "/auto", {
    method: "GET",
  });

  console.log(response);
  if (
    response.status === 200 &&
    response.headers.get("Content-Type").includes("application/json")
  ) {
    const autos = await response.json();

    console.log(autos);
  }
}

document.getElementById("boton-traer").onclick = traerTodos;

async function traerPorId() {
  const id = document.getElementById("id").value;

  const response = await fetch(apiUrl + "/auto/" + id, {
    method: "GET",
  });

  console.log(response);
  if (
    response.status === 200 &&
    response.headers.get("Content-Type").includes("application/json")
  ) {
    const auto = await response.json();

    console.log(auto);
  }
}

document.getElementById("boton-traer-por-id").onclick = traerPorId;

/**
 * MODIFICAR
 */
const formModificar = document.getElementById("form-modificar");

const marcaElModif = document.getElementById("marcaUpdate");
const precioElModif = document.getElementById("precioUpdate");
const fechaDeLanzamientoElModif = document.getElementById(
  "fechaDeLanzamientoUpdate"
);

formModificar.onsubmit = async (event) => {
  // Evito que se recargue la página
  event.preventDefault();

  const marca = marcaElModif.value;
  const precio = precioElModif.value;
  const fecha = fechaDeLanzamientoElModif.value;

  console.log(marca, precio, fecha);

  const body = {
    marca: marca,
    precio: precio === "" ? undefined : precio,
    fechaDeLanzamiento: fecha,
  };

  const id = document.getElementById("id").value;

  const modificado = await fetch(apiUrl + "/auto/" + id, {
    method: "PUT",
    body: JSON.stringify(body), // Importante! Se manda como texto
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(modificado);
};

/**
 * Eliminar
 */

async function eliminarPorId() {
  const id = document.getElementById("id").value;

  const response = await fetch(apiUrl + "/auto/" + id, {
    method: "DELETE",
  });

  console.log(response);
  if (
    response.status === 200 &&
    response.headers.get("Content-Type").includes("application/json")
  ) {
    const auto = await response.json();

    console.log(auto);
  }
}

document.getElementById("boton-eliminar-por-id").onclick = eliminarPorId;
