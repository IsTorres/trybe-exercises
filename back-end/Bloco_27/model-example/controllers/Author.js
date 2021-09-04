// A camada de controllers é responsável por receber e tratar as requests
const Joi = require('joi');

// tratamento de erros
const rescue = require('express-rescue');
// ligação com services
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;

  // pedimos o service p/ buscar o autor
  const author = await service.findById(id);

  // em caso de erro, interrompemos o processamento e retornamos um fluxo de erro
  if (author.error) return next(author.error);

  // se tá tudo ok, retorna o autor encontrado
  res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  // Utilizamos o Joi para descrever o objeto que esperamos receber na requisição.
  // passando um objeto com os campos da requisição e suas descrições
  const dale = Joi.object({
    // Deve ser uma string, não vazia e é obrigatória
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().not().empty(),
    lastName: Joi.string().not().empty().required(),
  }).validate(req.body); //verifica se o body segue as essas regras

  // inicia fluxo de erro
  // if (!dale) {
  //   return next();
  // }

  const { firstName, middleName, lastName } = dale;
  const newAuthor = await service.create(firstName, middleName, lastName);

  if (newAuthor) return next(newAuthor.error);
  return res.status(200).json(newAuthor);
})

module.exports = {
  getAll,
  findById,
  create,
};

// DICA:
// Ao validar dados no controller, estamos validando esses dados na entrada
// garantindo que não vamos realizar nenhum processamento desnecessário 
// utilizando dados que não são válidos, e que os dados vão
// trafegar limpinhos por todas as camadas da aplicação.