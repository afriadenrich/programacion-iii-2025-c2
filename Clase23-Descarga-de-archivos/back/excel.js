const express = require("express");
const XLSX = require("xlsx");
const app = express();

const datos = [
  { nombre: "Algo", apellido: "Algo" },
  { nombre: "Algo1", apellido: "Algo1" },
  { nombre: "Algo2", apellido: "Algo2" },
  { nombre: "Algo3", apellido: "Algo3" },
];

//      A         B
// 1   nombre    apellido
// 2   Algo      Algo
// 3   Algo1     Algo1

app.get("/excel", (req, res) => {
  // Libro -> Hojas -> Tabla
  const libro = XLSX.utils.book_new();
  const hoja = XLSX.utils.json_to_sheet(datos);

  XLSX.utils.book_append_sheet(libro, hoja, "Datos");

  const excel = XLSX.write(libro, { type: "buffer" });

  //   res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");
  res.attachment("data.xlsx");
  res.send(excel);
});

app.listen(3000);
