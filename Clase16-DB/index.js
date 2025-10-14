// 1. imports
const express = require("express");

// Traigo Sequelize para la creación de la conexión
// Y DataTypes para los tipos de datos al momento de modelarlos.
const { Sequelize, DataTypes } = require("sequelize");

// const moduloSql = require("sequelize");
// moduloSql.Sequelize

// 2. Configuraciones
const app = express();
// const sequelize = new Sequelize(
//   "mysql://root:123456@localhost:3307/autos_2025_c2"
// );

const sequelize = new Sequelize("autos_2025_c2", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
  port: "3307",
});

// Testeo de conexión
async function probarConexion() {
  try {
    await sequelize.authenticate();
    console.log("Todo ok!");
  } catch (error) {
    console.log(error);
    console.log("Nada ok!");
  }
}

probarConexion();

// Crear modelo

const Auto = sequelize.define(
  "Auto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fechaSalida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "vehiculos",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);

// Sincronización
// // https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

async function sincronizar() {
  try {
    await Auto.sync({ alter: true });
    console.log("Sincronizado");
  } catch (error) {
    console.log(error);
  }
}

sincronizar();

// 3. Ruteo

app.post("/auto", async (req, res) => {
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

// 4. Listen
app.listen(3000, () => {
  console.log("Levató");
});

// INSERT INTO `vehiculos` (`id`,`marca`,`modelo`,`precio`,`fechaSalida`,`createdAt`) VALUES (DEFAULT,?,?,?,?,?);

const nombre = request.body.nombre;
"INSERT INTO tabla (id, nombre) VALUES (DEFAULT," + nombre + ")";

// "'pepito') -- DROP DATABASE autos_2025_c2";
// OR 1=1

// Sentencias preparadas
// INSERT INTO `vehiculos` (`id`,`marca`,`modelo`,`precio`,`fechaSalida`,`createdAt`) VALUES (DEFAULT,?,?,?,?,?);
