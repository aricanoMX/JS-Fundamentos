// Los objetos se definen delimitados mediante llaves {}

// Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

// Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

// Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.
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
  // var dentro de la funcion se le llama variable local
  console.log(persona.nombre.toUpperCase());
}

// para acceder al nombre de sacha ahora hacemos
imprimirNombreEnMayusculas(sacha);
//  pisando el atributo nombre del objeto sacha
// y con dario seria lo mismo dario.nombre
imprimirNombreEnMayusculas(dario);

// nueva forma de  realizarlo para que sea mas facil de entender
// y vamos a pisar el atributo del objeto que nos interesa de la siguiente forma

function imprimirNombreEnMayusculas({ nombre }) {
  // var dentro de la funcion se le llama variable local
  console.log(nombre.toUpperCase());
}

// que pasa si llamamos a la funcion estando vacia
// podemos definir un objeto en el parametro mismo
imprimirNombreEnMayusculas({ nombre: "Milca" });
