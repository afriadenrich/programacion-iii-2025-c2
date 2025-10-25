const sequelize = require("../db/db");
const { DataTypes } = require("sequelize");

const Garage = sequelize.define(
  "Garage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "garages",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = Garage;
