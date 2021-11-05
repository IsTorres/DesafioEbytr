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

const deleteTarefa = async (req, res) => {
  const { id } = req.params;
  console.log(req.params, 'body');
  const removeTarefa = await tarefaService.deleteTarefa(id);
  
  if (!removeTarefa) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'fail' });
  return res.status(StatusCodes.OK).json(removeTarefa || { message: 'ok' });
};

module.exports = {
  todasTarefas,
  criaTarefa,
  deleteTarefa,
};
