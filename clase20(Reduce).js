// Reportar un problema
// Cómo funcionan las clases en JavaScript
// Reducir un array a un valor
// El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111,
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78,
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132,
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90,
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91,
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182,
};

// const esAlta = ({ altura }) => altura > 1.8;
// const esBaja = ({ altura }) => altura < 1.8;

var personas = [sacha, alan, martin, dario, vicky, paula];

// var personasAltas = personas.filter(esAlta);
// var personasBajas = personas.filter(esBaja);

// const pasarAlturaACms = (persona) => ({
//   ...persona,
//   altura: persona.altura * 100,
// });

// var personasCms = personas.map(pasarAlturaACms);
// console.log(personasCms);

// var acumulador = 0;
// for (var i = 0; i < personas.length; i++) {
//   acumulador = acumulador + personas[i].cantidadDeLibros;
// }
// console.log(`En total todos acumulan un total de ${acumulador} libros leidos`);

// lo de arriba es igual a lo siguiente pero sin el metodo reduce

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`Entre todos acumulan un total de ${totalDeLibros} libros leidos`);
