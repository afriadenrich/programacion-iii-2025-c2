const express = require("express");
// const ejs = require("ejs");

const app = express();

// Setteo el motor de vistas
app.set("view engine", "ejs");

// Setteo la carpeta donde van a ir mis vistas
app.set("views", "./views");

app.get("/", (req, res) => {
  // Renderizo mi vista index.ejs
  //   res.send("<h1>Hola</h1>");
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/autos", (req, res) => {
  res.render("autos");
});

app.listen(3000, () => {
  console.log("Todo flama");
});
