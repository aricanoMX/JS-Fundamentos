// Promesas
// En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

// pending
// fullfilled
// rejected
// Las promesas se invocan de la siguiente forma:

// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )

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
  .then(function (personaje) {
    console.log(`El personaje es: ${personaje.name}`);
  })
  .catch(onError);
