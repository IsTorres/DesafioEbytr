const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = 'mongodb://localhost:27017/ListaDeTarefas' || process.env.DB_URL;
const DB_NAME = 'ListaDeTarefas' || process.env.DB_NAME;

let schema = null;

const getConnection = async () => {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = { getConnection };
