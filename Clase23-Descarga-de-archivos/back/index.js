const express = require("express");
const fs = require("fs");
const { join } = require("path");

const app = express();

// app.use("/archivos", express.static(join(__dirname, "archivos")));

function downoload(ruta, res) {
  const contenido = fs.readFileSync(ruta);

  // algo.algo.algo.algo.pdf
  // ["algo", "algo", "algo", "pdf"]
  // ["pdf", ...]
  const ext = ruta.split(".").reverse()[0];

  res.setHeader("Content-Disposition", `attachment; filename=descarga.${ext}`);

  res.send(contenido);
}

app.get("/archivos/:file", (req, res) => {
  console.log(process.cwd());
  console.log(__dirname);
  const ruta = join(process.cwd(), "archivos", req.params.file);

  downoload(ruta, res);
  // res.download(ruta);
  // res.json({ hola: "mundo" });
});

app.listen(3000);
