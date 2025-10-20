const Auto = require("../models/auto");
// const express = require("express");
// const router = express.Router();

const router = require("express").Router();

/**
 * Espera que en el body estén los parámetros:
 *
 * marca
 * precio
 * fechaDeLanzamiento
 */
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // 1. Tomar datos.
    const body = req.body;

    const marca = body.marca;
    const precio = body.precio;
    const fechaDeLanzamiento = body.fechaDeLanzamiento;

    // const { marca, precio, fechaDeLanzamiento } = req.body;

    // 2. Hacer algo con los datos.
    const resultado = await Auto.create({
      marca: marca,
      precio: precio,
      fechaDeLanzamiento: fechaDeLanzamiento,
    });

    // 3. Dar respuesta.
    res.status(201).json(resultado);
  } catch (error) {
    if (error instanceof TypeError) {
      res.status(400).send({ message: "Falta algún parametro" });
    } else {
      console.log(error);
      res.status(500).send({ message: "Error interno" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const autos = await Auto.findAll();

    res.status(200).json(autos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

/**
 * Espera que el id venga en parámetro de ruta
 */
router.get("/:id", async (req, res) => {
  try {
    const auto = await Auto.findByPk(req.params.id);
    res.status(200).send(auto);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

/**
 * Espera que en el body estén los parámetros:
 *
 * marca
 * precio
 * fechaDeLanzamiento
 *
 * Espera que el id venga en parámetro de ruta
 */
router.put("/:id", async (req, res) => {
  try {
    const { marca, precio, fechaDeLanzamiento } = req.body;

    const resultadoDelUpdate = await Auto.update(
      {
        marca: marca,
        precio: precio,
        fechaDeLanzamiento: fechaDeLanzamiento,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).send(resultadoDelUpdate);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
});

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
