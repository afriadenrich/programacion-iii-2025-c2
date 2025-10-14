const Auto = require("../models/auto");
const { Op } = require("sequelize");

const router = require("express").Router();

// CRUD
// CREATE
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { precio, marca } = req.body;

    const creado = await Auto.create({
      precio: precio,
      marca: marca,
      // modelo: "8",
      // fechaSalida: "1930-10-10",
    });

    // 200 -> OK
    // 201 -> CREATED
    res.status(201).send(creado);
  } catch (error) {
    if (error instanceof TypeError) {
      res.status(400).send({ message: "Falta precio o marca" });
    } else {
      console.log(error);
      res.status(500).send({ message: "Error interno" });
    }
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    // SELECT * FROM autos WHERE marca = "motorola" AND id <= 2
    const resultado = await Auto.findAll({
      // where: {
      //   id: {
      //     [Op.lte]: 2,
      //   },
      //   marca: "Motorola",
      // },
    });
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// READ
router.get("/:id", async (req, res) => {
  try {
    const resultado = await Auto.findByPk(req.params.id);
    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { precio, marca } = req.body;

    const resultado = await Auto.update(
      {
        marca: marca,
        precio: precio,
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
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body);
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
