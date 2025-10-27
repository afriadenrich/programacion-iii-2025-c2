const { Auto, Garage, Conductor } = require("../models/relaciones");
const { Op } = require("sequelize");

// Crea con relación
const crearAuto = async (req, res) => {
  try {
    console.log(req.body);
    const { precio, marca, idConductor, idGarage } = req.body;

    const creado = await Auto.create({
      precio: precio,
      marca: marca,
      GarageId: idGarage,
      ConductorId: idConductor,
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
};

const traerAutos = async (req, res) => {
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
};

// Cómo traer datos de una relación
const traerAutoPorId = async (req, res) => {
  try {
    const auto = await Auto.findByPk(req.params.id, {
      include: [Garage, Conductor],
    });

    const garage = await auto.getGarage();

    const garageSimple = await Garage.findByPk(auto.GarageId);

    res.status(200).send({ auto, garage, garageSimple });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno" });
  }
};

const modificarAuto = async (req, res) => {
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
};

const eliminarAuto = async (req, res) => {
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
};

module.exports = {
  crearAuto,
  traerAutoPorId,
  traerAutos,
  modificarAuto,
  eliminarAuto,
};
