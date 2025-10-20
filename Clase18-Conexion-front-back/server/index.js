const express = require("express");
const app = express();
const routerAuto = require("./routes/auto.routes");
const cors = require("cors");

app.use(express.json());
app.use("/auto", routerAuto);
app.use(cors());

app.listen(3000, () => {
  console.log("Eureka");
});
