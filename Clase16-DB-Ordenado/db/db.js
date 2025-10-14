// Instanciar sequelize y exportarlo
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mysql://root:123456@localhost:3307/autos_2025_c2"
);

// require importa, module.exports exporta
module.exports = sequelize;
