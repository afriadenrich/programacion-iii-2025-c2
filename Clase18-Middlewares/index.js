const express = require("express");
const app = express();

// Config

app.use(express.json()); // -> middleware

// Rutas

app.use((req, res, next) => {
  console.log("LOGGED 1");
  next();
});

app.use((req, res, next) => {
  console.log("LOGGED 2");
  next();
});

// router.use((req, res, next) => {})
// router.get((req, res, next) => {})

app.get("/", (req, res, next) => {
  console.log("MW de ruta");

  throw new Exception("Errorrrr");

  if (true) {
    res.send("Algo");
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/auto", (req, res, next) => {
  console.log("Entra a la ruta /auto");
  const { marca, precio } = req.body;

  res.send({ marca, precio, creadoEn: new Date() });
});

// Se suele agregar al final esta firma, toma 4 parametros
// Cualquier ruta que aplique este middleware y rompa (throw de una excepción)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send(err.message);
});

// Listen

app.listen(3000, () => {
  console.log("Neurona encendida");
});
