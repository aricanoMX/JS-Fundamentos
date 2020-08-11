// Promesas Encadenadas
// A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

// const person_url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`;
const opts = { crossDomain: true };
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`, { crossDomain: true });

// callback es una funcion que se va a ejecutar en algun futuro, sin saber cuando

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(5);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(6);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(7);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(8);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(9);
  })
  .then((personaje) => {
    console.log(`El personaje es: ${personaje.name}`);
    return obtenerPersonaje(83);
  })
  .catch(onError);
