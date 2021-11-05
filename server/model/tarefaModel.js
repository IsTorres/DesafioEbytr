const connection = require('./connection');

const todasTarefas = async () => {
  const db = await connection.getConnection();
  await db.collection('tarefas').find().toArray();
};

const criaTarefa = async (tarefa, status) => {
  const db = await connection.getConnection();
  const novaTarefa = await db.collection('tarefas').insertOne({
    tarefa,
    status,
  });
  return novaTarefa;
}

module.exports = {
  todasTarefas,
  criaTarefa,
};
