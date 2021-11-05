const { 
  ReasonPhrases,
  StatusCodes, 
} = require('http-status-codes');

const tarefaService = require('../service/tarefaService');

const todasTarefas = async (req, res) => {
  const tarefas = await tarefaService.todasTarefas();
  
  if (!tarefas) return res.status(StatusCodes.OK).json({ message: 'vazio' });
  return res.status(StatusCodes.OK).json(tarefas);
};

const criaTarefa = async (req, res) => {
  const { tarefa, status } = req.body;

  const criar = await tarefaService.criaTarefa(tarefa, status);
  
  if (!criar) return res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
  return res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
};

module.exports = {
  todasTarefas,
  criaTarefa,
};
