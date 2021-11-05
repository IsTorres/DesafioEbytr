const tarefaModel = require('../model/tarefaModel');

const validaTarefa = (tarefa) => {
  if (!tarefa || typeof tarefa !== 'string') return false
};

const validaStatus = (status) => {
  const statusPossiveis = ['Pendente', 'Em andamento', 'Pronto'];
  return statusPossiveis.some((el) => el === status);
};

const todasTarefas = async () => {
  const tarefas = await tarefaModel.todasTarefas();
  
  return tarefas;
};

const criaTarefa = async (tarefa, status) => {
  if (validaTarefa(tarefa) === false) return false;
  if (validaStatus(status) === false) return false;
  const tarefaCriada = await tarefaModel.criaTarefa(tarefa, status);
  return tarefaCriada;
};

module.exports = {
  todasTarefas,
  criaTarefa,
};
