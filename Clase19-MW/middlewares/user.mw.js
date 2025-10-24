const zod = require("zod");

// const validarDatosUsuario = (req, res, next) => {
//   const nombre = req.body.nombre;
//   const edad = req.body.edad;

//   if (
//     typeof nombre === "string" &&
//     typeof edad === "number" &&
//     nombre.length > 3 &&
//     edad > 18
//   ) {
//     next();
//     console.log("Esto ejecuta");
//   } else {
//     res.status(400).send({ mensaje: "Te faltó nombre o apellido válido" });
//   }
// };

const UsuarioCrear = zod.object({
  nombre: zod.string().min(3),
  edad: zod.number().min(18),
  correo: zod.email(),
  fechaNacimiento: zod.iso.date(),
  habilidades: zod.array(zod.string()),
});

const validarDatosUsuario = (req, res, next) => {
  try {
    Usuario.parse(req.body);
    // Pasa, entonces tiene los datos ok!
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.issues);
  }
};

// const UsuarioEditar = zod.object({
//   edad: zod.number().min(18),
//   fechaNacimiento: zod.iso.date(),
//   habilidades: zod.array(zod.string()),
// });

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
