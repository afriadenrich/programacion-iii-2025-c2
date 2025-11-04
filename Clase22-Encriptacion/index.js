// Encriptación
// transformación -> Clave / contraseña -> Llave
// Seguridad
// 12345 + SERVERPASSWORD -> asidvomidvoamdopvfiaopdvimaope + SERVERPASSWORD -> 12345
// OFUSCAR la información

// Encriptación != Codificación != Hash

// Codificar
// Transformar
// 9 -> 1001
// Mismo dato, distintas formas de leerlo, no tiene seguridad

// Hasheo
// Transformar
// Permanente

// Hasheo con bcrypt
// 1- Password original
// 2- Sal
// 3- Coste
const bcrypt = require("bcrypt");
// const bcrypt = require("bcryptjs");

const passOriginal = "123456";
const complejidad = 12;

console.time();
const sal = bcrypt.genSaltSync(complejidad, "b");

console.log(sal);

const hash = bcrypt.hashSync(passOriginal, sal);

console.log(hash);
console.timeEnd();

// se me apagaron los auriculares
// $2b$12$vI4OYaQ/QMw9Ibl2W2nFheeEox5ixOclFjuNS7WiW1bJRoE0RZ4Me
// $2b$12$yZu.Iyenqe2gDoSeKay9Ru.XMclX1nHhtPVqmVGe6dB9sjNIVdrOi
// $2b$12$GGkMQLy6VOvMrqOZUiWu.OeU5BeJYhVl3aX/aDX5vlVweGx3uK85q
// $2b$14$WMy6IddcDAUzLQTkNMXcWe6OzjnNYW8F7wpwVGEv0AMKoYwy3wmRi

const resultadoFalse = bcrypt.compareSync(
  "1234567",
  "$2b$14$WMy6IddcDAUzLQTkNMXcWe6OzjnNYW8F7wpwVGEv0AMKoYwy3wmRi"
);
const resultadoTrue = bcrypt.compareSync(
  "123456",
  "$2b$14$WMy6IddcDAUzLQTkNMXcWe6OzjnNYW8F7wpwVGEv0AMKoYwy3wmRi"
);

console.log(resultadoFalse);
console.log(resultadoTrue);

// ------------------------------------------- //
// Acrónimos:
// AES -> Advanced Encryption Standard
// IV -> Vector de inclinación
// GCM (Galois/Counter Mode)
// CCM (Counter with CBC-MAC)
// GCM y CCM son similares porque vienen de algoritmos similares
// OCB (OCB Authenticated Encryption) -> pensado para mensajes
// const crypto = require("crypto");
const crypto = require("node:crypto");
const passUsuario = "123456";
const passSERVER = "12345678901234567890123456789012";

/**
 *
 * @param {string} pass
 *
 * @returns {string} encriptado
 */
function encriptar(pass) {
  const iv = crypto.randomBytes(16);
  console.log("iv: ", iv);

  const cifrador = crypto.createCipheriv("aes-256-gcm", passSERVER, iv);

  let encriptado = cifrador.update(pass, "utf-8", "binary");

  console.log(encriptado);
  return { encriptado, iv };
}

function desencriptar(encriptado, iv) {
  const decifrador = crypto.createDecipheriv("aes-256-gcm", passSERVER, iv);

  const desencriptado = decifrador.update(encriptado, "binary", "utf-8");

  console.log(desencriptado);
}

const { encriptado, iv } = encriptar(passUsuario);

desencriptar(encriptado, iv);
