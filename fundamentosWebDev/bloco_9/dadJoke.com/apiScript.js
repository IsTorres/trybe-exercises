// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json'},
  }

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((dale) => console.log(dale));
};

window.onload = () => fetchJoke();