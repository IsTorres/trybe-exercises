const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/api/app');
const sinon = require('sinon');
const { mongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const MongoClient = require('mongodb/lib/mongo_client');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/user', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await mongoClient
        .connect(URLMock,  { usernameUrlParser: true, useUnifieldTopology: true });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      response = await chai.request(server)
        .post('/api/users')
        .send({
          username: 'jane',
          password: 'senha123'
        });
    });

    after(async, () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    })

    it('retorna status cod 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um obj', () => {
      expect(response.body).to.be.a('object');
    });

    it('possui a propriedade "message"', () => {
      expect(response.body).to.be.property('message');
    });

    it('a propriedade "message possui p texto "Novo usuário criado com sucesso""', () => {
      expect(response.body.message).to.be.equal('Novo usuário criado com sucesso')
    });
  });
});