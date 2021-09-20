const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/user', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .post('/api/users')
        .send({
          username: 'jane',
          password: 'senha123'
        });
    });

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