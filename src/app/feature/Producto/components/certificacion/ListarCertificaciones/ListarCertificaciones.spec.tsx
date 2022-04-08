import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { ListaCertificaciones } from '.';

describe('ListarProductos Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('no muestra certificaciones cuando la lista está vacia', () => {
    componentWrapper = shallow(
      <ListaCertificaciones
        certificaciones={[]}
        onClickEliminarCertificacion={() => {}}
      />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(0);
  });

  it('probar que muestra una tabla de certificaciones', () => {
    componentWrapper = shallow(
      <ListaCertificaciones
        certificaciones={[
          {
            id: 1,
            nombre: 'Java',
            detalle: 'Java EE y Web Services',
            duracion: 120,
            precio: 1000,
          },
          {
            id: 2,
            nombre: 'PHP',
            detalle: 'CodeIgniter',
            duracion: 300,
            precio: 2000,
          },
        ]}
        onClickEliminarCertificacion={() => {}}
      />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(2);
  });
});
