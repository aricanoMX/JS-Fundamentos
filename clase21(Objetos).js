// Cómo funcionan las clases en JavaScript
// Las clases son funciones cuya sintaxis tiene dos componentes:

// expresiones
// declaraciones
// En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.

function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}
persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

persona.prototype.soyAlto = function () {
  this.altura >= 1.8
    ? console.log(`${this.nombre} es una persona alta`)
    : console.log(`${this.nombre} es una persona baja`);
};

var sacha = new persona("Sacha", "Lifszyc", 1.72);
var dario = new persona("Dario", "Obando", 1.8);

sacha.saludar();
dario.saludar();
sacha.soyAlto();
dario.soyAlto();
