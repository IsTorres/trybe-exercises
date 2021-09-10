const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, realeseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;
  if (!realeseYear || typeof realeseYear !== 'number') return false;

  return true;
};

const create = async ({ title, directedBy, realeseYear }) => {
  const isMovieValid =  isValid(title, directedBy, realeseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, realeseYear });

  return { id };
}

module.exports = {
  create,
};
