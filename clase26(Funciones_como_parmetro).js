// Funciones como parámetros

// En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }
  soyAlto() {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, altura } = this;
    return altura >= 1.8
      ? console.log(`${nombre} es una persona alta`)
      : console.log(`${nombre} es una persona baja`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador(a)`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Holaa!!, Buenos dias ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabia que eras desarrollador/a`);
  }
}

var sacha = new Desarrollador("Sacha", "Lifszyc", 1.72);
var dario = new Persona("Dario", "Obando", 1.8);

sacha.saludar(responderSaludo);

dario.saludar(responderSaludo);
