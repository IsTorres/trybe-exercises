const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;

// arquivos que puxam os bancos
// const Authors = require('./models/AuthorMSQL');
const Authors = require('./models/Author');
app.use(bodyParser.json());

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Authors.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Authors.create(first_name, middle_name, last_name);
  return res.status(201).json({ message: 'Autor criado com sucesso'});
})

app.listen(port, () => console.log(`app Listen on port ${port}`));