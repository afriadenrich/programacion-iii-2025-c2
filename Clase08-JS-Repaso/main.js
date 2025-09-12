const KEY = "VOeL5y635MqjiO3PyXajORdkomN8l1F9h19VtaLH";
const FECHA_MINIMA = "2025-06-16";
const FECHA_MAXIMA = "HOY!!";

const tituloElement = document.getElementById("titulo");
const descElement = document.getElementById("desc");
const imagenElement = document.getElementById("imagen");
const cargandoElement = document.getElementById("cargando");
const fechaElement = document.getElementById("fecha");

async function traerDatos(date = null) {
  // Hacer la petición a la API
  let apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + KEY;

  if (date) {
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
  const hoy = new Date();
  // const anio = hoy.getFullYear();
  // const mes = hoy.getMonth();
  // const dia = hoy.getDate();

  // console.log(`${anio}-${mes + 1}-${dia}`);

  console.log(hoy.toISOString());
}

obtenerDiaDeHoy();
