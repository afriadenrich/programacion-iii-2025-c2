import Swal from "./node_modules/sweetalert2/dist/sweetalert2.esm.all.js"; // SweetAlert
import Toastify from "./node_modules/toastify-js/src/toastify-es.js"; // Toastify

const alertElement = document.getElementById("alert");

alertElement.onclick = () => {
  Swal.fire({
    title: "Promocionaste!",
    text: "Todo por no usar alert",
    icon: "success",
  });
};

const mensaje = Toastify({
  text: "Hola mundo",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
});

const boton = document.getElementById("toast");

boton.onclick = () => {
  mensaje.showToast();
};
