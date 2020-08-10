// Parámetros como referencia o como valor
// Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

// Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.
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

// function que recibe la edad de una persona y la incrementa en 1
function cumpleanos(persona) {
  persona.edad += 1;
}

// podemos devolver un objeto nuevo sin alterar el objeto anterior
function cumpleanos(persona) {
  return {
    ...persona,
    // aqui ya podemos acceder a los atributos del objeto persona e incluso agregar nuevos atributos
    edad: persona.edad + 1,
  };
}
cumpleanos(sacha);
