const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

const person_url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`;
const opts = { crossDomain: true };
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`, { crossDomain: true });

const people_response = function (character) {
  console.log(`Hola yo soy, ${character.name}`);
};
$.get(person_url, opts, people_response);

// callback es una funcion que se va a ejecutar en algun futuro, sin saber cuando
