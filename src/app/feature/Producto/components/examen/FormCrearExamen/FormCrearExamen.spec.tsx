import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearCertificacion } from '../../certificacion/FormCrearCertificacion';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearCertificacion test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearCertificacion> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
    };
    componentWrapper = render(<FormCrearCertificacion {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(4);
    expect(spans[0].textContent).toBe('El campo nombre es requerido.');
    expect(spans[1].textContent).toBe('El campo detalle es requerido.');
    expect(spans[2].textContent).toBe('El campo duración es requerido.');
    expect(spans[3].textContent).toBe('El campo precio es requerido.');
  });

  it('should fail on submit three fields missing', async () => {
    const elem = componentWrapper.container;
    const nombre = elem.querySelector('input[name="nombre"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe('El campo detalle es requerido.');
    expect(spans[1].textContent).toBe('El campo duración es requerido.');
    expect(spans[2].textContent).toBe('El campo precio es requerido.');
  });

  it('should fail on submit two fields missing', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const detalle = elem.querySelector('input[name="detalle"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('detalle', 'Lorem'));
    });
    await wait(() => {
      detalle && fireEvent.change(detalle, setTextEvent('detalle', 'Ipsum'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('El campo duración es requerido.');
    expect(spans[1].textContent).toBe('El campo precio es requerido.');
  });

  it('should fail on submit one field missing', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const detalle = elem.querySelector('input[name="detalle"]');
    const duracion = elem.querySelector('input[name="duracion"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('detalle', 'Lorem'));
    });
    await wait(() => {
      detalle && fireEvent.change(detalle, setTextEvent('detalle', 'Ipsum'));
    });

    await wait(() => {
      duracion && fireEvent.change(duracion, setTextEvent('duracion', 'Ipsum'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[1].textContent).toBe('El campo precio es requerido.');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const detalle = elem.querySelector('input[name="detalle"]');
    const duracion = elem.querySelector('input[name="duracion"]');
    const precio = elem.querySelector('input[name="precio"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });
    await wait(() => {
      detalle && fireEvent.change(detalle, setTextEvent('detalle', 'Ipsum'));
    });
    await wait(() => {
      duracion && fireEvent.change(duracion, setTextEvent('duracion', '120'));
    });
    await wait(() => {
      precio && fireEvent.change(precio, setTextEvent('precio', '1000'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.nombre).toBe('Lorem');
    expect(formSubmitted.detalle).toBe('Ipsum');
    expect(formSubmitted.duracion).toBe('120');
    expect(formSubmitted.precio).toBe('1000');
  });
});
