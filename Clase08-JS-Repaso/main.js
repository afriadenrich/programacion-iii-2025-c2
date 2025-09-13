const KEY = "VOeL5y635MqjiO3PyXajORdkomN8l1F9h19VtaLH";
const FECHA_MINIMA = "1995-06-16";
const FECHA_MAXIMA = obtenerDiaDeHoy();

const tituloElement = document.getElementById("titulo");
const descElement = document.getElementById("desc");
const imagenElement = document.getElementById("imagen");
const cargandoElement = document.getElementById("section-cargando");
const fechaElement = document.getElementById("fecha");

// Asignaciones
fechaElement.min = FECHA_MINIMA;
fechaElement.max = FECHA_MAXIMA;

async function traerDatos(date = null) {
  // Hacer la petición a la API

  cambiarCargando(true);

  let apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + KEY;

  if (date) {
    // Hacer la lógica para comprobar que la date esté entre el FECHA_MINIMA y FECHA_MAXIMA

    apiUrl += "&date=" + date;
  }

  const resultado = await fetch(apiUrl);

  //   const json = await resultado.json();
  //   const txtTitulo = json.title;
  //   const txtDesc = json.explanation;
  //   const urlImagen = json.url;

  //   console.log(json);

  const {
    title,
    explanation,
    url: urlImagen, // renombra la variable que estaba en el objeto original
    media_type,
  } = await resultado.json();

  //   // Mostrar los resultados
  tituloElement.innerText = title;
  descElement.innerText = explanation;
  imagenElement.src = urlImagen;

  // cambiarCargando(false);
}

fechaElement.onchange = async (event) => {
  console.log(event.target.value);

  traerDatos(event.target.value);
};
// Alternativa para escuchar eventos
// fechaElement.addEventListener("change", (event) => {
// })

// De arranque, muestra lo de hoy.
traerDatos();

function obtenerDiaDeHoy() {
  // es la forma más corta que se me ocurre. Y funciona en cualquier país (creo).
  const hoyLocal = new Date();
  const hoyUTC = new Date(
    Date.now() - hoyLocal.getTimezoneOffset() * 1000 * 60
  );

  // const anio = hoy.getFullYear();
  // const mes = hoy.getMonth();
  // const dia = hoy.getDate();

  // console.log(`${anio}-${mes + 1}-${dia}`);
  console.log(hoyUTC.toISOString().slice(0, 10));

  return hoyUTC.toISOString().slice(0, 10);
}

/**
 *
 * @param {boolean} cargando
 */
function cambiarCargando(cargando) {
  if (cargando) {
    cargandoElement.style.display = "flex";
  } else {
    cargandoElement.style.display = "none";
  }
}

imagenElement.onload = (event) => {
  console.log(event);
  cambiarCargando(false);
};
