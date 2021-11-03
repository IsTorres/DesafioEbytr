const tarefaModel = require('../model/tarefaModel');

const todasTarefas = async () => {
  const tarefas = await tarefaModel.todasTarefas();
  return tarefas;
};

const criaTarefa = async (tarefa, status) => {
  const criar = await tarefaModel.criaTarefa(tarefa, status);
  return criar;
};

module.exports = {
  todasTarefas,
  criaTarefa,
};
