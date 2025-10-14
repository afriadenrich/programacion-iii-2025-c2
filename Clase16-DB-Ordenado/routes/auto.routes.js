const Auto = require("../models/auto");

const router = require("express").Router();

// CRUD
// CREATE
router.post("/auto", async (req, res) => {
  try {
    const creado = await Auto.create({
      precio: 10000,
      marca: "Motorola",
      modelo: "8",
      fechaSalida: "1930-10-10",
    });

    // 200 -> OK
    // 201 -> CREATED
    res.status(201).send(creado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// READ
router.get("/auto", async (req, res) => {
  try {
    // SELECT * FROM autos
    const resultado = await Auto.findAll();
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// READ
router.get("/auto/:id", async (req, res) => {
  try {
    const resultado = await Auto.findByPk(req.params.id);
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// UPDATE
router.put("/auto/:id", async (req, res) => {
  try {
    const resultado = await Auto.update(
      {
        marca: "Modificado",
        precio: 9999999,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // UPDATE marca=Modificado precio=9999999 WHERE ID = ID
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// DELETE
router.delete("/auto/:id", async (req, res) => {
  try {
    const resultado = await Auto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

module.exports = router;
