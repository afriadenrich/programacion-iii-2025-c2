const autos = [
  { modelo: "UNT", precio: 100000 },
  { modelo: "Ferrari", precio: 123 },
  { modelo: "A", precio: 3 },
];

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Carpeta pública y estática:
app.use("/public", express.static(path.join(__dirname, "public")));

// Parseo el body
// app.use(express.json()); // este parsea json
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
});

// Si retorno EJS, es por GET. No es obligatorio, pero es lo más común.
app.get("/crear", (req, res) => {
  res.render("crear");
});

app.post("/crear", (req, res) => {
  console.log(req.body);

  // Auto.create({
  // modelo: req.body.modelo,
  // precio: req.body.precio
  // });

  res.redirect("/crear"); // por defecto GET
});

app.get("/listado", (req, res) => {
  res.render("listado", { autos: autos });
});

app.listen(3000, () => {
  console.log("Adadjasojajcs");
});
