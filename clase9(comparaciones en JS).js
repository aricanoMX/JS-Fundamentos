// Comparaciones en JavaScript
// Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

// Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

// Existen cinco tipos de datos que son primitivos:

// Boolean
// Null
// Undefined
// Number
// String
var x = 4,
  y = "4";

x == y;
// esto va a dar true, osea que el valor en numero 4 es igual al numero en string 4
// toma los 2 valores y los compara por ello es que dice true

// si queremos preguntar si X y Y tienen el mismo valor y ademas son del mismo tipo entonces hacemos
x === y;
// esto va a dar false ya son del mismo valor pero no son del mismo tipo

// ejemplo
var sacha = {
  nombre: "Sacha",
};
// var otraPersona = {
//   nombre: "Sacha",
// };

console.log(sacha == otraPersona);
console.log(sacha === otraPersona);
// aqui da falso por que aunque tengan los mismos atributos la referencai a la variable es distina el otro objeto

// para que el valor nos de true lo que tenemos que hacer es lo siguente
// para que este apunte al mismo lugar de memoria que la variable sasha
var otraPersona = sacha;
console.log(sacha == otraPersona);
console.log(sacha === otraPersona);

// si desglosamos  el objeto entonces volvemos a tener false por que vuelve a hace referencai a objetos diferentes en momeria, para que ya no pase lo de la modificacion del registro

var otraPersona = {
  nombre: "Leonidas",
};
console.log(sacha.nombre);
console.log(otraPersona.nombre);
