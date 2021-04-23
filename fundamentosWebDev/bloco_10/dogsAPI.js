const fetch = require('node-fetch');

function dogsAPI() {
  return fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((dog) => {
      console.log(dog.message)
    }).catch((err) => {
      console.log('Deu erro', err);
    })
}

// dogsAPI();

module.exports = { dogsAPI };