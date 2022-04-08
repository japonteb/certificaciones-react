import moxios from 'moxios'

describe('Reductor examenes', () => {

  beforeEach(() => moxios.install()) ;

  afterEach(() => moxios.uninstall()) ;


  it('debería listar exámenes por cliente async', () => {
    //listarExamenesPorClienteAsync
    moxios.stubRequest('examenes/clientes/', {
        status: 200,
        responseText: 'hello'
      })
  }
});
