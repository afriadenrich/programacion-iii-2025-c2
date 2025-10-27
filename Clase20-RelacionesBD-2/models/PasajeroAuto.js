const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const PasajeroAuto = sequelize.define(
  "PasajeroAuto",
  {
    precioAbonado: {
      type: DataTypes.FLOAT,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PasajeroAuto;
