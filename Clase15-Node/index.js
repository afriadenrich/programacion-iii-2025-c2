/*
    Frontend -> Lo que ve el cliente, se ejecuta en SU computadora. No tiene acceso a la base de datos directamente.
    ESTÁTICO.


    Backend -> Tener el acceso a la DB. Definir lo que puede hacer la aplicación.
    Formato: API REST -> API "lo que va en el medio", lo que conecta nuestro frontend con nuestra DB y otros servicios.
                      -> REST -> HTTP, no guarda estados, toda la info está en las peticiones. 
    DINAMICO. Requiere que se esté ejecutando 24/7.

    Frontend -> HTTP -> API -> DB -> API -> Respuesta -> Frontend

*/

// 1. Configuración
// require -> como el import, solo que de la sintaxis de common modules de javascript. Diferente al import/export de los ESModules.
const express = require("express");

// la llamada express() crea la aplicación
const app = express();

// 2. Ruteo
// Una vez la app creada, creamos las rutas

// Cuando se haga un método get... a la ruta /
app.get("/", (peticion, respuesta) => {
  respuesta.send("Hola mundo");
});

// Otros verbos
app.get("/puestos", (peticion, respuesta) => {
  respuesta.send("listado de puestos");
});

app.post("/puestos", (request, response) => {
  response.send("POST a /puestos -> Crear un puesto");
});

app.put("/puestos", (req, res) => {
  res.send("PUT a /puestos -> Modifica un puesto completo");
});

app.patch("/puestos", (req, res) => {
  res.send("PATCH / puestos -> Modifica un campo");
});

app.delete("/puestos", (req, res) => {
  res.send("DELETE / puestos -> Elimina un puesto");
});

// endopoint -> punto final

app.get("/habilidades", (req, res) => {
  res.send("habilidades por GET solo");
});

// all -> todos los verbos
// IMPORTANTE: La primer coincidencia es la que se devuelve

app.all("/habilidades", (req, res) => {
  switch (req.method) {
    case "GET":
      res.send("GET de habilidades");
      break;
    case "POST":
      res.send("POST de habilidades");
      break;
    default:
      res.send("CUALQUIERA de habilidades");
  }
});

// Variaciones
app.get(["/inicio", "/home", "/landing"], (req, res) => {
  res.send("Bienvenid@");
});

// Parametros de ruta -> :parametro -> req.params
app.get("/api/:idioma/:version", (req, res) => {
  console.log(req.params);
  const { idioma, version } = req.params;

  res.send("/api con params idioma en " + idioma + " y version en " + version);
});

app.get("/auto{s}", (req, res) => {
  console.log(req.query);
  res.send("La s es opcional");
});

// 3. Arranque
// Levantar el servidor.
app.listen(3000, () => {
  // callback que se ejecuta al levantar el servidor
  console.log("levantó bien");
});

// node index.js para levantar el server
// Para cortar la ejecución, Control + C en la consola
