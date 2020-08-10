// Estructuras repetitivas: for
// En esta clase estudiaremos una de las estructuras básicas de control. El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

// Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
// Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

// En este ejemplo la variable i la utilizamos como contador.
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  peso: 75,
};
console.log(`àl inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`);

const INCREMENTO_DECREMENTO = 0.2;
const DIAS_DEL_ANO = 365;

// function aumentarDePeso(persona) {
//   return (persona.peso = INCREMENTO);
// }
// es igual a
const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_DECREMENTO);
const bajarDePeso = (persona) => (persona.peso -= INCREMENTO_DECREMENTO);

// simulacion del transcurso de un año
for (let i = 0; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    // aumenta de peso
    aumentarDePeso(sacha);
  } else if (random < 0.5) {
    // adelgaza
    bajarDePeso(sacha);
  }
}
console.log(
  `àl final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`
);
