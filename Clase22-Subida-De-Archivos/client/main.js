const form = document.getElementById("form");
const fileInput = document.getElementById("file-input");

form.onsubmit = async (ev) => {
  ev.preventDefault();

  const archivo = fileInput.files[0];

  if (!archivo) return;

  const formData = new FormData();
  formData.append("fotoDePerfil", archivo);

  const response = await fetch("http://localhost:3000/archivo", {
    method: "POST",
    body: formData,
  });

  // Ejemplo de otra cosa
  const url = URL.createObjectURL(fileInput.files[0]);

  document.getElementById("imagen").src = url;
  console.log(url);
};
