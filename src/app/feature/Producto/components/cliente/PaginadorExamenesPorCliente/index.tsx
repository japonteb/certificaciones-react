import * as PropTypes from 'prop-types';
import * as React from 'react';

interface PaginadorExamenesPorClienteProps {
  cantidadTotalExamenesPorCliente: number;
  onClickCambiarPagina: (numeroPagina: number) => void;
}

const EXAMENES_VISIBLES_POR_PAGINA = 10;

export const PaginadorExamenesPorCliente: React.FC<
  PaginadorExamenesPorClienteProps
> = ({ onClickCambiarPagina, cantidadTotalExamenesPorCliente }) => {
  if (cantidadTotalExamenesPorCliente <= EXAMENES_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(cantidadTotalExamenesPorCliente / EXAMENES_VISIBLES_POR_PAGINA)
    ).keys()
  );

  return (
    <nav>
      {rango.map((index) => {
        return (
          <button
            onClick={() => onClickCambiarPagina(index)}
            key={index.toString()}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
};

PaginadorExamenesPorCliente.propTypes = {
  cantidadTotalExamenesPorCliente: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
