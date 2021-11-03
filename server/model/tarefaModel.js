const connection = require('./connection');

const todasTarefas = async () => {
  const db = await connection();
  await db.collection('tarefas').find().toArray();
};

const criaTarefa = async (tarefa, status) => {
  const db = await connection();
  const novaTarefa = await db.collection('tarefas').insertOne({
    tarefa,
    status,
  })
}

module.exports = {
  todasTarefas,
  criaTarefa,
};
