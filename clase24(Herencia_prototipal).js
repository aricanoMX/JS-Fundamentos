// Reportar un problema
// El contexto de las funciones: quién es this
// Modificando un prototipo
// En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

// Para realizar herencia hacemos
function herencia(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  this.altura >= 1.8
    ? console.log(`${this.nombre} es una persona alta`)
    : console.log(`${this.nombre} es una persona baja`);
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

herencia(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a)`
  );
};

var sacha = new Desarrollador("Sacha", "Lifszyc", 1.72);
var dario = new Persona("Dario", "Obando", 1.8);

sacha.saludar();
dario.saludar();
sacha.soyAlto();
dario.soyAlto();
