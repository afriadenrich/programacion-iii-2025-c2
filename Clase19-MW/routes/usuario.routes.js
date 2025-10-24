const router = require("express").Router();
const {
  crearUsuario,
  modificarUsuario,
} = require("../controllers/user.controller");
const { validarDatosUsuario, validarId } = require("../middlewares/user.mw");

router.post("/", validarDatosUsuario);

router.post("/", crearUsuario);

router.put("/", validarDatosUsuario);
router.put("/", crearUsuario);

router.put("/:id", validarId);
router.put("/:id", validarDatosUsuario);
router.put("/:id", modificarUsuario);

// router.get("/", accionTraer);

router.get("/:id", validarId);
// router.get("/:id", accionTraerId);

// router.put("/:id", accionModifId);

router.delete("/:id", validarId);
// router.delete("/:id", deleteId);

module.exports = router;
