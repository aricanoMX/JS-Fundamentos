const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

// const person_url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`;
const opts = { crossDomain: true };
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`, { crossDomain: true });

const people_response = function (character) {
  console.log(`Hola, yo soy ${character.name}`);
};
// callback es una funcion que se va a ejecutar en algun futuro, sin saber cuando

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`;
  $.get(url, opts, people_response);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);
obtenerPersonaje(6);
obtenerPersonaje(7);
obtenerPersonaje(8);
obtenerPersonaje(9);
obtenerPersonaje(83);
