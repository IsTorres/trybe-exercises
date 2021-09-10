const mongoConnection = require('./connection');

// função modelo p/ criar movie no db
const create = async ({title, directedBy, realeseYear}) => {
  //espera a promise da connection do db ser resolvida 
  //e já joga a collection do banco em uma constante
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  // insere um elemento novo com os parametros da func e logo apos isso, extrai o "id" gerado pelo mongodb
  const { insertedId: id } = await moviesCollection
    .insertOne({title, directedBy, realeseYear});
  
  return { id };
};

module.exports = {
  create,
};
