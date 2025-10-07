const express = require("express");
const port = 3000;

const app = express();

// CRUD de puesto
// GET -> Listar
app.get("/puesto", (req, res) => {
  res.send("Funciona");
});
// POST -> Crear
app.post("/puesto", (req, res) => {
  res.send("Funciona");
});
// PUT -> Modificar
app.put("/puesto", (req, res) => {
  res.send("Funciona");
});
// PATCH -> Modificar
app.patch("/puesto", (req, res) => {
  res.send("Funciona");
});
// Delete -> Eliminar
app.delete("/puesto", (req, res) => {
  res.send("Funciona");
});
app.get("/puesto/:id");
app.get("/puesto/:id/habilidades", (req, res) => {
  res.send("Funciona");
});

// Agrupar rutas.
const ocupacion = app.route("/ocupacion");
// const ocupacion = app.route("/ocupacion/:id");
// const ocupacion = app.route("/ocupacion/:id/habilidades");

ocupacion.get((req, res) => {
  res.send("GET");
});
ocupacion.post((req, res) => {
  res.send("POST");
});
ocupacion.put((req, res) => {
  res.send("PUT");
});

// Agrupar con enrutador

const enrutador = express.Router();

enrutador.get("/", (req, res) => {
  res.send("Funciona");
});
enrutador.post("/", (req, res) => {
  res.send("Funciona");
});
enrutador.delete("/", (req, res) => {
  res.send("Funciona");
});
enrutador.patch("/", (req, res) => {
  res.send("Funciona");
});
enrutador.put("/", (req, res) => {
  res.send("Funciona");
});
enrutador.get("/:id", (req, res) => {
  res.send("Funciona");
});
enrutador.get("/:id/habilidades", (req, res) => {
  res.send("Funciona");
});

app.use("/trabajo", enrutador);

app.listen(port, () => {
  console.log(`El server levantó en el puerto ${port}`);
});
