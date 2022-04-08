import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearExamen } from '.';

describe('FormCrearExamen test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearExamen> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Programar examen',
      onSubmit: stub(),
      clientes: [],
      certificaciones: [],
    };
    componentWrapper = render(<FormCrearExamen {...componentProps} />);
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(0);
  });
});
