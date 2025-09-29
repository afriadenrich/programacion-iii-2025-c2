// Regex - Regular Expressions.

// [] -> Si coincide con lo cualquiera de lo que hay dentro.

// g -> flag de gobal -> A lo que está justo antes lo aplica a toda la cadena
// const patronAZ = /[a-z]g/;

// console.log(patronAZ.test("a1"));

const patronABC = /[abc]/;

// console.log(patronABC.test("d"));

const literal = /hola mundo/;

// console.log(literal.test("hola mundo"));
// console.log(literal.test("hola  mundo"));
// console.log(literal.test("holo mundo"));

// Flags
// g -> flag de gobal -> A lo que está justo antes lo aplica a toda la cadena
// i -> Case Sensitive

const patronAZ = /[A-Z]\n[a-z]/;
// console.log(patronAZ.test("A\na"));

// ^ -> inicio $ -> final
// const patron = /^[A-Z][a-z]$/;

// * -> Que lo anterior se puede repetir 0 a n veces
// const patron = /^[A-Z][0-9]*[a-z]$/;

// + -> Que lo anterior se puede repetir 1 a n veces
// const patron = /^[A-Z][0-9]+[a-z]$/;

// ? -> Que lo anterior se puede repetir 0 a 1 veces
// const patron = /^[A-Z][0-9]?[a-z]$/;

// {n} -> Que lo anterior se puede repetir n veces
// {n,} -> Que lo anterior se puede repetir n o más veces
// {n,m} -> Que lo anterior se puede repetir entre n y m veces
// const patron = /^[A-Z][0-9]{3,5}[a-z]$/;

// console.log(patron.test("D12345h"));

// . -> cualquier caracter

// Suelto significa que tiene que encontrar este patrón en cualquier parte de la cadena, por eso, si algo tiene más de 15 caracteres, da true porque entre esos más de 15 caracteres hay una cadena que cumple.
// const patron = /.{6,15}/;

// Lo mismo, solo que los 6 a 15 caracteres tienen que estar al final
// const patron = /.{6,15}$/;

// los 6 a 15 caracteres tienen que ser TODA la cadena
// const patron = /^.{6,15}$/;

// console.log(patron.test("ABCdefg"));
// console.log(patron.test("ABCde"));
// console.log(patron.test("ABCDEFGHIJKLMNOPQ"));

// \d -> del 0 al 9 -> Lo mismo que [0-9]
// const patron = /^\d$/g;

// \D -> No digitos
// const patron = /^\D*$/;

// console.log(patron.test("aaaa1a"));

// \w -> letras, numeros y _
// const patron = /^\w*$/;

// console.log(patron.test("Hola_hola123"));
// console.log(patron.test("Hola-hola123"));
// console.log(patron.test("Hola$hola123"));
// console.log(patron.test("Hola&hola123"));
// console.log(patron.test("Hola/hola123"));

// \W -> lo contrario a \w, NO letras, NO numeros y NO _

// const patron = /^\W*$/;
// console.log(patron.test("_"));
// console.log(patron.test("-"));
// console.log(patron.test("$"));
// console.log(patron.test("&"));
// console.log(patron.test("/||@@@"));

// \s y \S -> \s es espacio, \S lo contrario
// const patron = /^\s*$/;
// console.log(patron.test("         "));
// console.log(patron.test("a asdsad"));

// Validar un mail. Tiene que tener:
// En la primera parte, letras, numeros, guiones. UN arroba. Luego solo letras, guiones o puntos.

const patronMail = / /;
