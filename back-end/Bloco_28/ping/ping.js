const axios = require('axios');

axios
  .get('http://localhost:3000/ping/')
  .then((res) => {
    console.log(res.data);
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err);
  })