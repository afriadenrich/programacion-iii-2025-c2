// File system
// const fs = require("node:fs");
const fileSystem = require("fs");
const path = require("node:path");

// const pathAMiArchivo = "./files/data.txt";

const rutaCarpeta = path.join(__dirname, "files");
const rutaArchivo = path.join(rutaCarpeta, "data.txt");
const rutaArchivo2 = path.join(rutaCarpeta, "data2.txt");
const rutaArchivo3 = path.join(rutaCarpeta, "data3.txt");

if (!fileSystem.existsSync(rutaCarpeta)) {
  console.log("no existe la carpeta");
  return;
}

if (!fileSystem.existsSync(rutaArchivo)) {
  console.log("no existe el archivo");
  return;
}

// leer un archivo

const buffer = fileSystem.readFileSync(rutaArchivo);

console.log(buffer);

// Crear un archivo

const nombre = "Agus";
const apellido = "F";

const rutaCarpetaUsr = path.join(__dirname, "usuarios");
const rutaArchivoUsr = path.join(rutaCarpetaUsr, "usrs.txt");

if (!fileSystem.existsSync(rutaCarpetaUsr)) {
  fileSystem.mkdirSync(rutaCarpetaUsr);
  console.log("Crea la carpeta");
}

// if (!fileSystem.existsSync(rutaArchivoUsr)) {
//   fileSystem.writeFileSync(rutaArchivoUsr, "");
//   console.log("Crea el archivo");
// }

// write -> Crea y sobreescribe el archivo -> Si había algo antes lo borra
// append -> Crea el archivo si no existe. AGREGA info a la que había antes

fileSystem.appendFileSync(rutaArchivoUsr, `${nombre} ${apellido}`);

// Systema operativo
const os = require("os");

console.log(os.platform());

console.log(os.EOL, os.EOL, os.EOL); // End Of Line

fileSystem.appendFileSync(rutaArchivoUsr, os.EOL);

// Python -> C

// const resultado = fileSystem.readFileSync("c:/windows", { encoding: "ascii" });

// console.log(resultado);

// Eliminar
// fileSystem.unlinkSync(rutaArchivo);

fileSystem.chmodSync(rutaArchivo, 0o777);
fileSystem.chmodSync(rutaArchivo2, 0o357);
fileSystem.chmodSync(rutaArchivo3, 0o777);

const rutaJson = path.join(__dirname, "files", "data.json");

const dataJsonString = fileSystem.readFileSync(rutaJson, "utf-8");

const dataJson = JSON.parse(dataJsonString);

console.log(dataJson.nombre);
