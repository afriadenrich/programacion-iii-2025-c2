const express = require("express");
const enrutador = express.Router();

enrutador.get("/", (req, res) => {
  res.download(__dirname + "/data.json");
});
enrutador.post("/", (req, res) => {
  res.send("Funciona");
});
enrutador.delete("/", (req, res) => {
  res.send("Funciona");
});
enrutador.patch("/", (req, res) => {
  res.send("Con end después");
  res.end();

  console.log("Después del end");
});
enrutador.put("/", (req, res) => {
  res.sendStatus(400);
});

enrutador.get("/:id", (req, res) => {
  const { id } = req.params; // const id = req.params.id

  if (id > 0) {
    return res.send({ mensaje: `El id es ${id}` });

    console.log("Se ejecuta?????????????");
  } else {
    // Cambiar el status
    res.status(400);

    // Cambiar encabezados
    res.setHeader("Content-Type", "application/json");

    // Siempre último devuelvo
    res.send({ mensaje: "No llegó el id" });
  }
});

enrutador.get("/:id/habilidades", (req, res) => {
  res.json({ mensaje: "get con json" });
});

// Exportar usando módulos comunes
module.exports = enrutador;

// export variable
// export {variable, variable}
