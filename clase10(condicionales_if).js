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
function esMayorDeEdad(persona) {
  let mayoriaDeEdadEnLatinoAmerica = 18;

  if (persona.edad >= mayoriaDeEdadEnLatinoAmerica) {
    console.log(`${persona.nombre} es mayor de edad, Felicidades!!!`);
  } else {
    console.log(
      `${persona.nombre} aun no es mayor de edad, tranquilo falta poco`
    );
  }
}
esMayorDeEdad(sacha);
