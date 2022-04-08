import * as React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { Inicio } from '.';

describe('ObtieneDetalleCliente test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof Inicio>;

  beforeEach(() => {
    componentProps = {
      msg: 'Aplicación para gestionar exámenes de certificaciones',
    };
    componentWrapper = render(<Inicio {...componentProps} />);
  });

  it('Debe mostrar la imagen inicial de la página', async () => {
    const elem = componentWrapper.container;

    const img = elem.querySelectorAll('img');
    expect(img.length).toBe(1);
  });
});
