console.log("Hola");
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

const alertElement = document.getElementById("alert");

alertElement.onclick = () => {
  Swal.fire({
    title: "Promocionaste!",
    text: "Todo por no usar alert",
    icon: "success",
  });
};

// http://sweetalert2.github.io/
// https://apvarun.github.io/toastify-js/
// https://getbootstrap.com/
// https://www.npmjs.com/package/jspdf?activeTab=readme
