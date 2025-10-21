const express = require("express");
const app = express();
const routerAuto = require("./routes/auto.routes");
const cors = require("cors");

app.use(express.json()); // Requiere que en los encabezados se solicitud esté: Content-Type: application/json
app.use(
  cors({
    origin: process.env.ORIGIN, //¿Quién o quienes me pueden hacer peticiones desde navegadores? Sin navegador, no hace nada
  })
);

app.use("/auto", routerAuto);

app.listen(3000, () => {
  console.log("Eureka");
});
