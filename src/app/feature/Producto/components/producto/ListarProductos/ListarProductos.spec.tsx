import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { ListaProductos } from '.';

describe('ListarProductos Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('no muestra productos cuando la lista está vacia', () => {
    componentWrapper = shallow(
      <ListaProductos productos={[]} onClickEliminarProducto={() => {}} />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(0);
  });

  it('probar que muestra una tabla de productos', () => {
    componentWrapper = shallow(
      <ListaProductos
        productos={[
          {
            title: 'nuevo',
            slug: 'Juan Pablo Botero',
            body: 'posting the article accessing using constant',
            createdAt: '2020-03-03T03:20:27.795Z',
            updatedAt: '2020-03-03T03:20:27.795Z',
          },
        ]}
        onClickEliminarProducto={() => {}}
      />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(1);
  });
});
