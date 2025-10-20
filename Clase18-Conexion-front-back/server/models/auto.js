const sequelize = require("../db/sequelize");
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
      allowNull: false,
    },
    fechaDeLanzamiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "auto-20",
  }
);

module.exports = Auto;
