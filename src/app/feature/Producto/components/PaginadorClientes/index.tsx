import * as PropTypes from 'prop-types';
import * as React from 'react';

interface PaginadorClientesProps {
  cantidadTotalClientes: number;
  onClickCambiarPagina: (numeroPagina: number) => void;
}

const CLIENTES_VISIBLES_POR_PAGINA = 10;

export const PaginadorClientes: React.FC<PaginadorClientesProps> = ({
  onClickCambiarPagina,
  cantidadTotalClientes,
}) => {
  if (cantidadTotalClientes <= CLIENTES_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(cantidadTotalClientes / CLIENTES_VISIBLES_POR_PAGINA)
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

PaginadorClientes.propTypes = {
  cantidadTotalClientes: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
