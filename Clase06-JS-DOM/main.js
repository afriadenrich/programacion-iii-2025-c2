/*
JavaScript puede cambiar todos los elementos HTML de la página
JavaScript puede cambiar todos los atributos HTML de la página
JavaScript puede cambiar todos los estilos CSS de la página
JavaScript puede eliminar elementos y atributos HTML existentes
JavaScript puede agregar nuevos elementos y atributos HTML
JavaScript puede reaccionar a todos los eventos HTML existentes en la página
JavaScript puede crear nuevos eventos HTML en la página
*/

console.log(document);
console.log(document.getElementById("primer-texto"));

const primerTexto = document.getElementById("primer-texto");

primerTexto.innerText = "Otra cosa";

/**
 * @type {HTMLInputElement}
 */
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const enviar = document.getElementById("enviar");

nombre.onchange = () => {
  console.log(nombre.value);
};

function obtenerValoresDelFormulario() {
  const nombreTxt = nombre.value;
  const apellidoTxt = apellido.value;
  const passwordTxt = password.value;
  return { nombreTxt, apellidoTxt, passwordTxt };
}

enviar.onclick = (event) => {
  event.preventDefault();
  console.log(event);
  const valores = obtenerValoresDelFormulario();
  console.log(valores);

  if (valores.passwordTxt.length < 8) {
    mensaje.innerText = "La contraseña es muy corta";
    mensaje.classList.remove("success");
    mensaje.classList.add("error");
    // mensaje.style.color = "#f33";
  } else {
    mensaje.innerText = "Todo correcto";
    mensaje.className = "success centrar";
    // Quiero que se saque la clase de css mensaje y se ponga la clase success.
    console.log(mensaje.className);
    console.log(mensaje.classList);
  }
};

apellido.onfocus = (/* event */) => {
  apellido.style.height = "50px";
};

apellido.onblur = () => {
  apellido.style.height = "auto";
};

personas = ["agus", "nico", "alumno"];

for (p of personas) {
  // Forma de crear
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerText = p;
  nuevoParrafo.classList.add("centrar");
  // Formas de insertar
  document.body.append(nuevoParrafo);
  document.getElementById("main").appendChild(nuevoParrafo);
  const footer = document.getElementsByTagName("footer");
  footer[0].insertAdjacentElement("afterend", nuevoParrafo);
}

/*
#apellido:focus {
    height: 50px;
}

#apellido:blur {
    height: inical;
}
*/

// input -> HTMLInputElement
// button -> HTMLButtonElement

// Encontrar el evento -> Asignar la lógica al evento
