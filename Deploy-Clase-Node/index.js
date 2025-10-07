const express = require("express");
const app = express();

// Obtener el enrutador
const enrutadorTrabajo = require("./trabajo.routes");

// Relacionar el enrutador a la ruta
app.use("/trabajo", enrutadorTrabajo);

app.listen(3000);
