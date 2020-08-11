// Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

// const person_url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`;
const opts = { crossDomain: true };
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`, { crossDomain: true });

// callback es una funcion que se va a ejecutar en algun futuro, sin saber cuando

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`;

  $.get(url, opts, callback).fail(() =>
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
  );
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);
  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);
      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`);
          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);
            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`);
              obtenerPersonaje(8, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`);
                obtenerPersonaje(9, function (personaje) {
                  console.log(`Hola, yo soy ${personaje.name}`);
                  obtenerPersonaje(83, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
