const { expect } = require('chai');

const MoviesModel = {
  create: () => {},
};

describe('Insere um novo Filme no DB', () => {
  const payloadMovie = {
    title: 'title-example',
    directedBy: 'someone',
    realeseYear: 2000,
  };

  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('Tal objeto possui o "id" do novo filme inserido', () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  })
});