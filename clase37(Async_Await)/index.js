// Múltiples promesas en paralelo
// Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

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

async function obtenerPersonajes() {
  // var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 83];
  var ids = [];
  for (let i = 1; i <= 9; i++) {
    ids.push(i);
  }
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();
