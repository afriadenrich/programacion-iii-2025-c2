/*
    Frontend -> Lo que ve el cliente, se ejecuta en SU computadora. No tiene acceso a la base de datos directamente.
    ESTÁTICO.


    Backend -> Tener el acceso a la DB. Definir lo que puede hacer la aplicación.
    Formato: API REST -> API "lo que va en el medio", lo que conecta nuestro frontend con nuestra DB y otros servicios.
                      -> REST -> HTTP, no guarda estados, toda la info está en las peticiones. 
    DINAMICO. Requiere que se esté ejecutando 24/7.

    Frontend -> HTTP -> API -> DB -> API -> Respuesta -> Frontend

*/

// require -> como el import, solo que de la sintaxis de common modules de javascript. Diferente al import/export de los ESModules.
const express = require("express");

// la llamada express() crea la aplicación
const app = express();

// Una vez la app creada, creamos las rutas

// Cuando se haga un método get... a la ruta /
app.get("/", (peticion, respuesta) => {
  respuesta.send("Hola mundo");
});

app.get("/algo", (peticion, respuesta) => {
  respuesta.send("Hola algo");
});

// Levantar el servidor.
app.listen(3000, () => {
  // callback que se ejecuta al levantar el servidor
  console.log("levantó bien");
});

// node index.js para levantar el server
// Para cortar la ejecución, Control + C en la consola
