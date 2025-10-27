const Garage = require("./garage");
const Auto = require("./auto");
const Conductor = require("./conductor");
const Pasajero = require("./pasajero");
const PasajeroAuto = require("./PasajeroAuto");

// Uno a muchos
// Un garage tiene muchos autos.
// GARAGE TIENE MUCHOS AUTOS.
Garage.hasMany(Auto);
// Hay muchos autos en un garage.
// Autos PERTENECEN a GARAGE.
Auto.belongsTo(Garage);

// Uno a uno
// Un conductor tiene un solo auto.
Conductor.hasOne(Auto, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
}); // A Auto se le agregará IdConductor.
// Un auto PERTENECE a un conductor.
Auto.belongsTo(Conductor); // A Auto se le agreagrá IdConductor.

// Mucho a muchos
// Un auto puede llevar a muchos pasajeros.
// Un pasajero puede viajar en muchos autos.
// Pasajero.belongsToMany(Auto, { through: "PasajerosAutos" });
// Auto.belongsToMany(Pasajero, { through: "PasajerosAutos" });
Pasajero.belongsToMany(Auto, { through: PasajeroAuto });
Auto.belongsToMany(Pasajero, { through: PasajeroAuto });

module.exports = { Auto, Garage, Conductor };
