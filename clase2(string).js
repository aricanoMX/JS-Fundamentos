// variables
var nombre = "Sacha",
  apellido = "Lifszyc";

// convertir nombre en mayusculas
var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas);

// apellido en minusculas
var apellidoEnMinusculas = apellido.toLowerCase();
console.log(apellidoEnMinusculas);

// como saber el primer caracter de 1 un string
var primerLetraDelNombre = nombre.charAt(0);
console.log(primerLetraDelNombre);
var cantidadDeLetrasDelNombre = nombre.length;
console.log(cantidadDeLetrasDelNombre);

// si queremos actualizar la variable tendriamos que hacer
nombre = "Federico";
console.log(nombre);
cantidadDeLetrasDelNombre = nombre.length;
console.log(cantidadDeLetrasDelNombre);

// como concatenar 2 strings
var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);
nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// INTERPOLACION DE TEXTO nueva forma de concatenar strings
nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompleto);

// como acceder a un sub string
var str = nombre.charAt(1) + nombre.charAt(2);
console.log(str);
// si queremos siempre obtener despues del primero siempre 2 caracteres hacemos
str = nombre.substr(1, 2);
console.log(str);

// reto ultimo caracter de un string
str = nombre.substr(-1);
console.log(str);
