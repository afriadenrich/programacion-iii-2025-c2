const express = require("express");
const app = express();
const usuarioRoutes = require("./routes/usuario.routes");
// Config

app.use(express.json()); // -> middleware
// app.use(cors());

app.use("/usuario", usuarioRoutes);

app.listen(3000, () => {
  console.log("Habemus chamba");
});
