// camada model faz a conexão com o db, não carrega validações ou regras de negocio
// ela possui o modelo que as requisições irão seguir e entrega as mesmas no modelo pedido

const connection = require('./connection');
const { ObjectId } = require('mongodb'); // obj usado p/ buscar o id que o mongo gera (_id)

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name,
//   }
// }

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};
// *
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({_id, firstName, middleName, lastName}) => {
        return {
          id: _id,
          firstName,
          middleName,
          lastName
        }
      });
    });
};

const findById =  async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  // remonta o obj no novo formato (em camelCase, e com a key fullName)
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const create = async (firstName, middleName, lastName) => {
  await connection()
  .then((db) => db.collection('authors').insertOne({
    firstName,
    middleName,
    lastName,
  }))
  // 'insertedId' é o campo que o mongo cria para colocar o id gerado pelo pacote mongodb
  .then(result => getNewAuthor({
    id: result.insertedId,
    firstName,
    middleName,
    lastName,
  }))
};

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio (ternario)
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  // Executamos a consulta e retornamos o resultado
  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));

  // Caso nenhum author seja encontrado, devolvemos null
  if (!author) return null;

  return author;
}

module.exports = {
  getAll,
  isValid,
  findById,
  create,
  findByName
};
