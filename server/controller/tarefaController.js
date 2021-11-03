const { 
  ReasonPhrases,
  StatusCodes, 
} = require('http-status-codes');

const tarefaService = require('../service/tarefaService');

const todasTarefas = async (req, res) => {
  const tarefas = await tarefaService.todasTarefas();

  if (!tarefas) return res.status(StatusCodes.OK).json({ message: 'vazio' });
  return res.status(StatusCodes.OK).json(ReasonPhrases.OK);
};

const criaTarefa = async (req, res) => {
  const { tarefa } = req.query('tarefa');
  const { status } = req.query('status');

  const criar = await tarefaService.criaTarefa(tarefa, status);
  if (!criar) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
  return res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
};

module.exports = {
  todasTarefas,
  criaTarefa,
};
