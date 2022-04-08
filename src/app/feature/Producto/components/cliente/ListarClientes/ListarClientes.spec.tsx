import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { ListaClientes } from '.';

describe('ListarProductos Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('no muestra clientes cuando la lista está vacia', () => {
    componentWrapper = shallow(<ListaClientes clientes={[]} />);
    expect(componentWrapper.find('tbody tr').length).toBe(0);
  });

  it('probar que muestra una tabla de clientes', () => {
    componentWrapper = shallow(
      <ListaClientes
        clientes={[
          {
            id: 2,
            nombre: 'Juan',
            tipoCliente: 3,
          },
        ]}
      />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(1);
  });
});
