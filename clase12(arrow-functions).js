// Estructuras de control

// nos permiten decidir si un codigo se ejecuta multiples veces o no se ejecta

// ejemplo
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  vuelaDrones: true,
};
var juan = {
  nombre: "Juan",
  apellido: "Laderous",
  edad: 8,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero === true) {
    console.log("Ingeniero");
  } else {
    console.log("No es Ingeniero");
  }
  if (persona.cocinero === true) {
    console.log("Cocinero");
  } else {
    console.log("No es Cocinero");
  }
  if (persona.cantante === true) {
    console.log("Cantante");
  } else {
    console.log("No es Cantante");
  }
  if (persona.dj === true) {
    console.log("Dj");
  } else {
    console.log("No es Dj");
  }
  if (persona.guitarrista === true) {
    console.log("Guitarrista");
  } else {
    console.log("No es Guitarrista");
  }
  if (persona.vuelaDrones === true) {
    console.log("Piloto de Drones");
  } else {
    console.log("No es un piloto de drones");
  }
}
imprimirProfesiones(sacha);

// imprimir como funcion si es mayor de edad
const MAYORIA_DE_EDAD_EN_LATINO_AMERICA = 18;

// esta funcion se acaba de convertir en una funcion anonima
// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD_EN_LATINO_AMERICA;
// };

// lo de arriba es exactamente igual a esto
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD_EN_LATINO_AMERICA;

function imprimirEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad, Felicidades!!!`);
  } else {
    console.log(
      `${persona.nombre} aun no es mayor de edad, tranquilo falta poco`
    );
  }
}
imprimirEsMayorDeEdad(sacha);
imprimirEsMayorDeEdad(juan);

// function permitirAcceso(persona) {
//   if (!esMayorDeEdad(persona)) {
//     console.log("ACCESO DENEGADO!!!1");
//   }
// }
const permitirAcceso = (persona) =>
  !esMayorDeEdad(persona)
    ? console.log(`ACCESO DENEGAGO!!!`)
    : console.log(`ACCESO PERMITITDO`);

permitirAcceso(sacha);
permitirAcceso(juan);
