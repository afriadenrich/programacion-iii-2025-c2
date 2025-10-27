const express = require("express");
const app = express();

app.use(express.json()); // Permitir que el body se lea en JSON. PARSEO DEL BODY

const autoRouter = require("./routes/auto.routes");

app.use("/auto", autoRouter);

app.listen(3000, () => {});
