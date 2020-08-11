// Clases en JavaScript
// Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

// La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

// El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura >= 1.8
      ? console.log(`${this.nombre} es una persona alta`)
      : console.log(`${this.nombre} es una persona baja`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a)`
    );
  }
}

var sacha = new Desarrollador("Sacha", "Lifszyc", 1.72);
var dario = new Persona("Dario", "Obando", 1.8);

sacha.saludar();
dario.saludar();
sacha.soyAlto();
dario.soyAlto();
