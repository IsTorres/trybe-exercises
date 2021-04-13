// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui! 
  fetch(API_URL, { method: 'GET', headers: { 'Accept': 'application/json'}})
    .then((response) => response.json())
    .then(apiObject => {
      document.getElementById('jokeContainer').innerHTML = apiObject.joke;
    });
};
window.onload = () => fetchJoke();