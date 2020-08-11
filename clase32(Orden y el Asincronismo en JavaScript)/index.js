// Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

// const person_url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`;
const opts = { crossDomain: true };
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`, { crossDomain: true });

// callback es una funcion que se va a ejecutar en algun futuro, sin saber cuando

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`;

  $.get(url, opts, function (character) {
    console.log(`Hola, yo soy ${character.name}`);
  });
}

obtenerPersonaje(1, () => {
  obtenerPersonaje(2, () => {
    obtenerPersonaje(3, () => {
      obtenerPersonaje(4, () => {
        obtenerPersonaje(5, () => {
          obtenerPersonaje(6, () => {
            obtenerPersonaje(7, () => {
              obtenerPersonaje(8, () => {
                obtenerPersonaje(9, () => {
                  obtenerPersonaje(83);
                });
              });
            });
          });
        });
      });
    });
  });
});
