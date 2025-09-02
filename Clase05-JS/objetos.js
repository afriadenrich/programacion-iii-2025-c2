console.log(" == OBJETOS ==");

// Agrupación de atributos y métodos

class Persona {
  #nombre = "";
  #apellido = "";

  constructor(nombre, apellido) {
    if (typeof nombre === "string" && typeof apellido === "string") {
      this.#nombre = nombre;
      this.#apellido = apellido;
    } else {
      throw "Pasaste algo mal";
    }
  }

  saludar() {
    console.log(`Hola soy ${this.#nombre} ${this.#apellido}`);
  }
}

const p1 = new Persona("Agus", "F");
console.log(p1);
try {
  const p2 = new Persona("Agus", 9);
  console.log(p2);
} catch (error) {
  console.error(error);
}
const p3 = new Persona("Nico", "F");
console.log(p3);

p3.saludar();
p1.saludar();

function saludarSuelto1(cadena) {
  console.log(cadena);
}

const saludarSuelto = function (cadena) {
  console.log(cadena);
};

const saludarSuelto2 = () => {
  console.log("Hola");
};

const saludarSuelto3 = (cadena) => {
  console.log(cadena);
};

/* Ojo, repito nombre que está en otro archivo
const devolver = (cadena) => {
    return cadena;
};
*/

const devolverMasCorto = (cadena) => cadena;

saludarSuelto();
saludarSuelto2();

const p4 = {
  nombre: "Pepito",
  apellido: "Oreo",
  saludar: () => {
    console.log("Hola soy " + this.nombre + " " + this.apellido);
  },
};

console.log(p4);
p4.saludar();

console.log(" == FIN OBJETOS == \n\n");
