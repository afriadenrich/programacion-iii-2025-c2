const sequelize = require("../db/db");
const { DataTypes } = require("sequelize");

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
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "autos",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Auto;
