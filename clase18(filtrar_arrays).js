// Filtrar un array
// En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

// El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

// Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

// Reto: escribe el filtrado de personas bajas.
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
};

const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;

var personas = [sacha, alan, martin, dario, paula, vicky];

// para filtrar simpre necesitamos 2 cosas {1 array y 1  condicion}

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);
