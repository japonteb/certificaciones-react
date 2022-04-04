import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { PaginadorExamenesPorCliente } from 'app/feature/Producto/components/PaginadorExamenesPorCliente';

describe('PaginadorExamenesPorCliente Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    componentWrapper = shallow(
      <PaginadorExamenesPorCliente
        cantidadTotalExamenesPorCliente={11}
        onClickCambiarPagina={() => {}}
      />
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it('Renderizar con menos de 10 examenes no debe pintar botones', () => {
    componentWrapper = shallow(
      <PaginadorExamenesPorCliente
        cantidadTotalExamenesPorCliente={9}
        onClickCambiarPagina={() => {}}
      />
    );

    expect(componentWrapper.isEmptyRender()).toBeTruthy();
  });

  it('Renderizar con  20 examenes debe pintar 2 botones', () => {
    componentWrapper = shallow(
      <PaginadorExamenesPorCliente
        cantidadTotalExamenesPorCliente={20}
        onClickCambiarPagina={() => {}}
      />
    );
    const buttons = componentWrapper.find('button');
    expect(buttons.at(0).text()).toBe('1');
    expect(buttons.at(1).text()).toBe('2');
    expect(buttons.at(2).exists()).toBeFalsy();
  });
});

export {};
