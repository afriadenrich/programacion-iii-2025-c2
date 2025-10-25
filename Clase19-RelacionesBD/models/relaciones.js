const Garage = require("./garage");
const Auto = require("./auto");

// Uno a muchos
Auto.belongsTo(Garage);
Garage.hasMany(Auto);

module.exports = { Auto, Garage };
