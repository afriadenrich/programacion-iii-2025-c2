class Auto {
  constructor(marca, color, precio = null, fecha = null) {}
  // constructor(marca, color, precio) {

  // }
  // constructor(marca, color) {

  // }
}

new Auto("marca", "color");
new Auto("marca", "color", 1500);
new Auto("marca", "color", 1500, new Date());
