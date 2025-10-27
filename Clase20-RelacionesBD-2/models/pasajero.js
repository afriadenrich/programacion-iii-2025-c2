const sequelize = require("../db/db");
const { DataTypes } = require("sequelize");

const Pasajero = sequelize.define(
  "Pasajero",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Pasajero;
