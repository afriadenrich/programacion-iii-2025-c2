const KEY = "VOeL5y635MqjiO3PyXajORdkomN8l1F9h19VtaLH";

const tituloElement = document.getElementById("titulo");
const descElement = document.getElementById("desc");
const imagenElement = document.getElementById("imagen");
const cargandoElement = document.getElementById("cargando");

async function traerDatosDeHoy() {
  // Hacer la petición a la API
  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + KEY;

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

traerDatosDeHoy();
