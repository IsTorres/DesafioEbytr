const sinon = require('sinon');
const { expect } = require('chai');

const { 
  ReasonPhrases,
  StatusCodes, 
} = require('http-status-codes');

describe('controller de criaTarefa', () => {
  describe('payload invalido', () => {
    const request = {};
    const response = {};

    before(() => {
      request.query = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    });

    it('status da resposta aos dados invalidos: codigo 400', async () => {
      await tarefaController.criaTarefa(request, response);

      expect(response.status.calledWith(StatusCodes.BAD_REQUEST)).to.be.equal(true);
    });

    it('json da resposta aos dados invalidos', () => {
      await tarefaController.criaTarefa(request, response);

      expect(response.json.calledWith(ReasonPhrases.BAD_REQUEST)).to.be.equal(true);
    });
  });

  describe('payload valido', () => {
    const request = {};
    const response = {};

    before(() => {
      request.query = {
        tarefa: 'tarefa 1',
        status: 'pronto',
      };
    });

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    it('status da resposta aos dados validos', async () => {
      await tarefaController.criaTarefa(request, response);

      expect(response.status.calledWith(StatusCodes.CREATED)).to.be.equal(true);
    });

    it('json da resposta aos dados validos', async () => {
      await tarefaController.criaTarefa(request, response);

      expect(response.json.calledWith(ReasonPhrases.CREATED)).to.be.equal(true);
    });
  });
});
