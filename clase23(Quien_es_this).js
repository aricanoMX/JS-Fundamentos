// Reportar un problema
// El contexto de las funciones: quién es this
// Modificando un prototipo
// En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

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
