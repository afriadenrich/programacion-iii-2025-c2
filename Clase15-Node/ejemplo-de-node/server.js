// server.mjs
import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("Ejecuta");
  response.end("Hello World!\n");
});

/*
"/puestos/:nombre" -> request.nombre -> búsqueda en la DB del primer nombre que encontraba -> response.end(puesto); 
*/

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
// run with `node server.mjs`
