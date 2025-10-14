// Instanciar sequelize y exportarlo
const { Sequelize } = require("sequelize");
const stringDb = process.env.STRING_DB;
const sequelize = new Sequelize(stringDb);

sequelize.sync({ alter: true });

// require importa, module.exports exporta
module.exports = sequelize;
