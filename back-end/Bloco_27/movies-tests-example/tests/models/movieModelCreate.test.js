const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

// módulo responsável p/ abrir conexão nos models p/ fazer o `double`
const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModels');

describe('Insere um novo Filme no DB', () => {
  let connectionMock;

  const payloadMovie = {
    title: 'title-example',
    directedBy: 'someone',
    realeseYear: 2000,
  };

  before(async () => {
    // banco em memoria montado pela lib
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    // utiliza a lib para emular a conexão com o db
    // e joga tudo isso na variavel global do describe
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model-example'));

    // sinon cria o double baseado no modulo importado "mongoConnection"
    // especificamente na função "getConnection"
    // e leva essas infos p/ connectionMock
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  })

  // restaura a connection verdadeira após o teste
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('Tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

    it('deve exitir um filme com titulo cadastrado', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.collection('movies')
        .findOne({ title: payloadMovie.title });

      expect(movieCreated).not.to.be.null;
    });
  })
});