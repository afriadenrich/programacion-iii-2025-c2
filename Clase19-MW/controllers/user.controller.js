const crearUsuario = (req, res) => {
  console.log("Crea un usuario", req.body);

  // Usuario.create(req.body);

  res.send({
    usuario: req.body,
  });
};

const traerUsuarios = (req, res) => {
  res.send([
    { nombre: "a", edad: 1 },
    { nombre: "a", edad: 1 },
  ]);
};

const modificarUsuario = (req, res) => {};

module.exports = { traerUsuarios, crearUsuario, modificarUsuario };
