export class Usuario {
  nombre;
  fechaNacimiento;
  email;
  password;

  constructor(nombre, fecha, email, password) {
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.fechaNacimiento = fecha;

    document.getElementById("mensaje").innerText = this.email;
  }
}

export const PI = 3.14;

export function mostrarEnConsola() {
  console.log("Mostrar en consola");
}

// export -> import
// export { Usuario, PI, mostrarEnConsola };
