const sinon = require('sinon');
const { expect } = require('chai');

const tarefaModel = require('../../server/model/tarefaModel');
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
      status: 'pronto',
    };

    before(() => {
      const ID_TEST = '604cb554311d68f491ba5781';

      sinon.stub(tarefaModel, 'criaTarefa').resolves({ insertedId: ID_TEST });
    });

    after(() => {
      tarefaModel.criaTarefa.restore();
    });

    it('retorna um objeto', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadValido.tarefa, payloadValido.status);
      console.log(typeof tarefa, 'eita');
      expect(tarefa).to.be.a('object');
    });

    it('objeto contem ID da nova tarefa criada', async () => {
      const tarefa = await tarefaService.criaTarefa(payloadValido.tarefa, payloadValido.status);

      expect(tarefa).to.have.property('insertedId');
    });
  });
});