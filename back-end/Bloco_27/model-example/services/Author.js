// Essa camada lida com regras de negocio, calculos e metodos mais complexos entre outros
// como tbm validações e lida com erros de domínio* 
// *(erros que derivam de regras de negócio que não foram atendidas)

const Author = require('../models/Author');

// proxy's p/ camada de modelo
const getAll = async () => await Author.getAll();

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const authors = await Author.findById(id);

  // Caso nenhum autor seja encontrado, retornamos um objeto de erro.
  if (!authors) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  return authors;
};

const create = async (firstName, middleName, lastName) => {
  // Checamos se os campos estão devidamente preenchidos
  const valid = Author.isValid(firstName, middleName, lastName);
  if (!valid) return {
    error: {
      code: 'error',
      message: 'preencimento invalido dos campos'
    },
  };

  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExistis',
        message: 'Um autor já existe com esse nome completo'
      },
    };
  }
  const newAuthor = Author.create(firstName, middleName, lastName)

  return newAuthor;
};

module.exports = {
  getAll,
  findById,
  create,
};