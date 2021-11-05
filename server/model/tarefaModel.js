const connection = require('./connection');
const { ObjectId } = require('mongodb');

const todasTarefas = async () => {
  const db = await connection.getConnection();
  const tarefas =  await db.collection('tarefas').find().toArray();
  return tarefas;
};

const criaTarefa = async (tarefa, status) => {
  const db = await connection.getConnection();
  const novaTarefa = await db.collection('tarefas').insertOne({
    tarefa,
    status,
  });
  return novaTarefa;
}

const deleteTarefa = async (id) => {
  const db = await connection.getConnection();
  await db.collection('tarefas').deleteOne({ _id: ObjectId(id) });
  const checkDelet = await db.collection('tarefas').findOne({ _id: ObjectId(id) });
  return checkDelet;
}

module.exports = {
  todasTarefas,
  criaTarefa,
  deleteTarefa,
};
