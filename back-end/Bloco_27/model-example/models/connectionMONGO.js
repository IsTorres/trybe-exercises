const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => db = conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    });
};

module.exports = connection;
