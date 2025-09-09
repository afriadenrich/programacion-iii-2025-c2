// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/planetary/apod  ?  api_key = DEMO_KEY
//                                      ? clave = valor & clave = valor & clave = valor

const apiKey = "DEMO_KEY";
const date = "2025-04-20";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

const ruta = "https://api.nasa.gov/planetary/apod";

const rutaFinal = ruta + "?" + "api_key=" + apiKey + "&" + "date=" + date;
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

const parametros = new URLSearchParams({
  api_key: "DEMO_KEY", // &
  date: "2025-04-20",
});

const urlFinal = ruta + "?" + parametros.toString();
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-04-20

fetch(urlFinal).then((response) => {
  response.json().then((valor) => {
    console.log(valor);
  });
});
