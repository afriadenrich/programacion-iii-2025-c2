async function traer() {
  const response = await fetch("http://localhost:3000/");
  const json = await response.json();
  console.log(json);
}

document.addEventListener("DOMContentLoaded", () => {
  traer();
});
