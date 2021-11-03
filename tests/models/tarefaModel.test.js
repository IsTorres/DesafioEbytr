const { expect } = require('chai');

const tarefaModel = require('../../server/model/tarefaModel');

describe('Testa se é possivel a adição de uma nova tarefa no banco', () => {
  const payload = {
    tarefa: 'tarefa 1',
    status: 'pendente'
  };

  describe('tarefa inserida com sucesso', () => {
    it('deve retornar um objeto', async () => {
      const response = await tarefaModel.criaTarefa(payload.tarefa, payload.status);

      expect(response).to.be.a('object');
    });

    it('o objeto retornado possui um ID', async () => {
      const response = await tarefaModel.criaTarefa(payload.tarefa, payload.status);

      expect(response).to.have.a.property('id');
    });
  });
});