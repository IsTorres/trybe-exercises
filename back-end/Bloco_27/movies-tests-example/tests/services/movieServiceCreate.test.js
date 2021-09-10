const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');



// validação de capmpos do objto que sera inserido no DB
describe('Insere um novo filme no DB', () => {
  describe('quando o payload informado não é valido', () => {
    const payload = {};

    it('retorna um boolen', async () => {
      const response = await MoviesService.create(payload);
      expect(response).to.be.a('boolean');
    });

    it('o boolean contem "false"', async () => {
      const response = await MoviesService.create(payload);
      expect(response).to.be.equal(false);
    });
  });

  describe('quando o payload informado é valido', () => {
    const payload = {
      title: 'movie title',
      directedBy: 'someone',
      realeseYear: 2000,
    };

    // emula o resultado da func create do modulo "MoviesModel"
    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE});
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um obj', async () => {
      const response = await MoviesService.create(payload);
      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do filme inserido', async () => { 
      const response = await MoviesService.create(payload);
      expect(response).to.have.property('id')
    });
  });
});
