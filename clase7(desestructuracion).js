// Desestructurar objetos
// En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
// Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona

// Reto: resolver la función que está comentada al final del ejercicio.
var sacha = {
  nombre: "Sacha",
  apellido: "Lifsyc",
  edad: 28,
};
var dario = {
  nombre: "Darío",
  apellido: "Susniky",
  edad: 27,
};

function imprimirNombreEnMayusculas(persona) {
  // atributo nombre que va a salir del objeto persona
  // var  nombre  = persona.nombre;
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

// que pasa si llamamos a la funcion estando vacia
// podemos definir un objeto en el parametro mismo
imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Milca" });
// imprimirNombreEnMayusculas({ apellido: "Tolentino" });

// RETO
function imprimirNombreYEdad(sujeto) {
  var { nombre } = sujeto;
  var { edad } = sujeto;
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}
// tiene que imprimir algo como
// HOLA ME LLAMO SACHA y tengo 28 años

imprimirNombreYEdad(sacha);
imprimirNombreYEdad(dario);
imprimirNombreYEdad({ nombre: "Milca", edad: 21 });
