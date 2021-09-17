require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, 'uploads/');
    cb(null, 'envios/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

/* Definindo nossa pasta pública */
/* `app.use` com apenas um parâmetro quer dizer que
   queremos aplicar esse middleware a todas as rotas, com qualquer método */
/* __dirname + '/uploads' é o caminho da pasta que queremos expor publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
   verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
   Se for, o express envia o conteúdo desse arquivo e encerra a response.
   Caso contrário, ele chama `next` e permite que os demais endpoints funcionem */
// app.use(express.static(`${__dirname}/uploads`));
app.use(express.static(`${__dirname}/envios`));

/* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
   nesse caso, contém o destino do arquivo enviado. */
// const upload = multer({ storage });
const envio = multer({ storage });

// app.post('/files/upload', upload.single('file'), (req, res) => 
//   res.status(200).json({ body: req.body, file: req.file }));

app.post('/files/envios', envio.single('arquivo'), (req, res) => 
  res.status(200).json({ body: req.body, file: req.file }));

app.get('/ping', controllers.ping);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});