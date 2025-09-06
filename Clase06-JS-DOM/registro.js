import { Usuario, PI, mostrarEnConsola } from "./usuario.js";

// Paso 1: Obtener referencias

/**
 * @type {HTMLInputElement}
 */
const nombre = document.getElementById("nombre");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const email = document.getElementById("email");
const password = document.getElementById("password");

/**
 * @type {HTMLButtonElement}
 * Este es nuestro botón de envío
 */
const registroBtn = document.getElementById("registro");

// Paso 2: Hacer la función que queramos que se ejecute

/**
 * @param {Event} event
 */
const registrarse = (event) => {
  event.preventDefault();

  const nombreValue = nombre.value;
  const fechaNacimientoValue = fechaNacimiento.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  localStorage.setItem("usuario", nombreValue);
  sessionStorage.setItem("usuario", nombreValue);

  console.log(nombreValue, fechaNacimientoValue, emailValue, passwordValue);

  const usr = new Usuario(
    nombreValue,
    fechaNacimientoValue,
    emailValue,
    passwordValue
  );

  guardarUsuario(usr);
  traerUsuario();

  // const nombre = usr.nombre;
  // const { nombre } = usr;

  console.log(usr);
};

// Paso 3: Asociar el evento a nuestra función.
registroBtn.onclick = registrarse;

const usr = localStorage.getItem("usuario");
const usrSesion = sessionStorage.getItem("usuario");

// document.getElementById("mensaje").innerText = usr + " - " + usrSesion;
// document.getElementById("mensaje").innerText = {
//   nombre: "agus",
//   apellido: "agus",
// };

// JSON.parse -> de string a objeto
// JSON.stringify -> de objeto a string

function guardarUsuario(usr) {
  const usrJsonString = JSON.stringify(usr);
  localStorage.setItem("usuarioCompleto", usrJsonString);
  // localStorage.setItem("usuarioCompleto", usr);
}

function traerUsuario() {
  const local = localStorage.getItem("usuarioCompleto");

  if (local !== null) {
    const usr = JSON.parse(local);
    console.log(usr);
  }
}
