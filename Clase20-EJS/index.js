const express = require("express");
// const ejs = require("ejs");

const app = express();

// Setteo el motor de vistas
app.set("view engine", "ejs");

// Setteo la carpeta donde van a ir mis vistas
app.set("views", "./views");

// Setteo que la carpeta images (u otra/s carpeta/s) sea ESTÁTICA
app.use("/public", express.static("images"));

// Un poco más pro:
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(express.json());

// RUTAS -------------------------------

app.get("/", (req, res) => {
  // Renderizo mi vista index.ejs
  //   res.send("<h1>Hola</h1>");
  res.render("layout", { path: "index" });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/autos", async (req, res) => {
  // cosnt autos = await Auto.findAll();
  const autos = [
    {
      marca: "UTN",
      precio: 100000,
    },
    {
      marca: "Ferrari",
      precio: 3,
    },
    {
      marca: "Marca",
      precio: 98099023,
    },
  ];
  // 2do parámetro, variables a incrustar
  res.render("autos", { autos: autos });
});

app.get("/complejo", (req, res) => {
  res.render("complejo");
});
app.get("/images/158.png", (req, res) => {
  res.send("No devuelve la imagen");
});
app.get("/158.png", (req, res) => {
  res.send("No devuelve la imagen");
});

app.listen(3000, () => {
  console.log("Todo flama");
});
