// localStorage.setItem("dato", "un dato");

// Agregar una serie al array del localstorage

const listado = localStorage.getItem("listado");
// let listadoJSON = JSON.parse(listado) !== null ? JSON.parse(listado) : [];
// Si estoy haciendo una asignación de algo que puede ser vacío o 0 o nulo o algo que equivalga a false.

let listadoJSON1 = JSON.parse(listado) || []; // Si el de la izq da CUALQUIER COSA que se equivalga a falso. OR
let listadoJSON2 = JSON.parse(listado) ?? []; // Si el de la izq es NULL o UNDEFINED. Se llama Nullish coalescing

listadoJSON1.push("algo");
listadoJSON2.push("algo");

console.log(listadoJSON1);
console.log(listadoJSON2);
