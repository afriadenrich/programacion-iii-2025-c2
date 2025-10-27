const {
  crearAuto,
  traerAutos,
  traerAutoPorId,
  modificarAuto,
  eliminarAuto,
} = require("../controller/auto.controller");

const router = require("express").Router();
// CRUD
// CREATE
router.post("/", crearAuto);
// READ
router.get("/", traerAutos);
// READ
router.get("/:id", traerAutoPorId);
// UPDATE
router.put("/:id", modificarAuto);
// DELETE
router.delete("/:id", eliminarAuto);

module.exports = router;
