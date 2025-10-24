const validarDatosUsuario = (req, res, next) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;

  if (
    typeof nombre === "string" &&
    typeof edad === "number" &&
    nombre.length > 3 &&
    edad > 18
  ) {
    next();
    console.log("Esto ejecuta");
  } else {
    res.status(400).send({ mensaje: "Te faltó nombre o apellido válido" });
  }
};

const validarId = (req, res, next) => {
  // valido el id sea numerico
  // busco si existe

  if (req.params.id) {
    next();
  } else {
    res.status(400).send("error");
  }
};

module.exports = { validarDatosUsuario, validarId };
