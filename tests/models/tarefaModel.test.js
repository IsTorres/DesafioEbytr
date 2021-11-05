const sinon = require('sinon');
const { expect } = require('chai');

const mongoConnection = require('../../server/model/connection');
const tarefaModel = require('../../server/model/tarefaModel');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Testa se é possivel a adição de uma nova tarefa no banco', () => {
  let connectionMock;

  const payload = {
    tarefa: 'tarefa 1',
    status: 'pendente'
  };

  before(async () => {
    const DBServer = new MongoMemoryServer();
      const URLMock = await DBServer.getUri();

      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then((conn) => conn.db('model_example'));

      
      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  /* Restauraremos a função `getConnection` original após os testes. */
  after(() => {
    mongoConnection.getConnection.restore();
  }); 

  describe('tarefa inserida com sucesso', () => {
    it('deve retornar um objeto', async () => {
      const response = await tarefaModel.criaTarefa(payload.tarefa, payload.status);
      expect(response).to.be.a('object');
    });

    it('o objeto retornado possui um ID', async () => {
      const response = await tarefaModel.criaTarefa(payload.tarefa, payload.status);
      expect(response).to.have.a.property('insertedId');
    });

    it('o objeto retornado possui uma tarrefa e status cadastrados', async () => {
      await tarefaModel.criaTarefa(payload.tarefa, payload.status);
      const tarefaCriada = await connectionMock.collection('tarefas').findOne({ tarefa: payload.tarefa, status: payload.status });

      expect(tarefaCriada).not.to.be.null;
    });
  });
});
