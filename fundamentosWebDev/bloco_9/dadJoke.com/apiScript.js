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

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const randomArray = 
      Array.from({length: 10}, () => Math.round(Math.random() * 50) + 1)
    
    const randomNumber = randomArray.map((number) => number * number).reduce((acc, curr) => acc + curr);

    (randomNumber <= 8000) ? resolve(randomNumber) : reject(randomNumber);
  });

  promise
    .then((rn) => {
      const divisionToArray = [];
      const divisions = [2,3,5,10];
      divisions.forEach((divisor) => divisionToArray.push(rn / divisor));
      return divisionToArray;
    }
    // or
    // .then(rn => [2,3,5,10].map(number => rn / number))
    )
    .then((array) => console.log(array.reduce((acc, curr) => acc + curr, 0)))
    .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))
}
fetchPromise();

window.onload = () => fetchJoke();