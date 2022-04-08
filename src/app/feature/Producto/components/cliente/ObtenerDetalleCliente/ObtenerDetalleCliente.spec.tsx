import * as React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { ObtieneDetalleCliente } from '.';

describe('ObtieneDetalleCliente test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof ObtieneDetalleCliente>;

  beforeEach(() => {
    componentProps = {
      cliente: {
        id: 2,
        nombre: 'Juan',
        tipoCliente: 3,
      },
    };
    componentWrapper = render(<ObtieneDetalleCliente {...componentProps} />);
  });

  it('Debe mostrar el detalle del cliente', async () => {
    const elem = componentWrapper.container;

    const h2 = elem.querySelectorAll('h2');
    expect(h2.length).toBe(1);
    expect(h2[0].textContent).toBe('Cliente');
  });
});
