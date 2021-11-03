const { expect } = require('chai');

// const tarefaModel = require('../../server/model/tarefaModel');
const tarefaService = require('../../server/service/tarefaService');

describe('Testa se é possivel a adição de uma nova tarefa no banco', () => {
  describe('Payload invalido', () => {
    const payloadInvalido = {};

    it('retorna um booleano', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadInvalido);

      expect(tarefa).to.be.a('boolean');
    });

    it('o retorno é "false"', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadInvalido);

      expect(tarefa).to.be.equal(false);
    });
  });

  describe('Payload valido', () => {
    const payloadValido = {
      tarefa: 'tarefa 1',
      status: 'concluido',
    };

    it('retorna um objeto', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadValido.tarefa, payloadValido.status);

      expect(tarefa).to.be.a('obejct');
    });

    it('objeto contem ID da nova tarefa criada', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadValido.tarefa, payloadValido.status);

      expect(tarefa).to.have.property('insertedId');
    });
  });
});