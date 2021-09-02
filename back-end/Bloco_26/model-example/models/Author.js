const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]. filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async () => { 
  // <[authors]> é a descontrução de array p/ pegar o 1 elemento que tem os dados, o 2 tem metadados e outras infos
  const [authors] = await connection
    .execute(`SELECT id,first_name, middle_name, last_name FROM authors`);
  
  return authors.map(serialize).map(getNewAuthor);
};

const findById =  async (id) => {
  const [authorData] = await connection
  .execute(`SELECT id,first_name, middle_name, last_name FROM authors WHERE id=?`, [id]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  // remonta o obj no novo formato (em camelCase, e com a key fullName)
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
};

module.exports = {
  getAll,
  findById,
};
