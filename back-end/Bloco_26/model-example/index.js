const express = require('express');
const app = express();
const port = 3003;

const Authors = require('./models/Author');

app.get('/authors', async (req, res) => {
  const author = await Authors.getAll();
  return res.status(200).json(author);
});

app.listen(port, () => console.log(`app Listen on port ${port}`));