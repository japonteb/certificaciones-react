import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { ListaExamenesPorCliente } from '.';

describe('ListarProductos Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('no muestra examenes por cliente cuando la lista está vacia', () => {
    componentWrapper = shallow(<ListaExamenesPorCliente examenes={[]} />);
    expect(componentWrapper.find('tbody tr').length).toBe(0);
  });

  it('probar que muestra una tabla de exámenes por cliente', () => {
    componentWrapper = shallow(
      <ListaExamenesPorCliente
        examenes={[
          {
            id: 10,
            nombre: 'PHP',
            detalle: 'CodeIgniter',
            fechaPresentacion: '2022-04-08T13:30:00.000Z',
            precioTotal: 900000,
          },
          {
            id: 11,
            nombre: 'Scrum',
            detalle: 'Scrum Master',
            fechaPresentacion: '2022-04-07T14:30:01.000Z',
            precioTotal: 21,
          },
        ]}
      />
    );
    expect(componentWrapper.find('tbody tr').length).toBe(2);
  });
});
