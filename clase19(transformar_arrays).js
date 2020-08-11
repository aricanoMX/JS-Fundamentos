// Transformar un array
// En esta clase veremos cómo transformar un array. El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

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

const pasarAlturaACmts = (personas) => ({
  ...personas,
  altura: personas.altura * 100,
});

// map devuelve un nuevo array pero lo devuelve modificado

var personasEnCmts = personas.map(pasarAlturaACmts);

console.log(personas);
console.log(personasEnCmts);

console.log(personas[0] === personasEnCmts[0]);
