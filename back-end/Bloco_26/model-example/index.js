const express = require('express');
const app = express();
const port = 3003;

const Authors = require('./models/Author');

app.get('/authors', async (_req, res) => {
  const author = await Authors.getAll();
  return res.status(200).json(author);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(id);

  if (!author) return res.status(404).json({
    message: 'Author Not Found'
  })
  return res.status(200).json(author);
});

app.listen(port, () => console.log(`app Listen on port ${port}`));