import * as PropTypes from 'prop-types';
import * as React from 'react';

interface PaginadorCertificacionesProps {
  cantidadTotalCertificaciones: number;
  onClickCambiarPagina: (numeroPagina: number) => void;
}

const CERTIFICACIONES_VISIBLES_POR_PAGINA = 10;

export const PaginadorCertificaciones: React.FC<
  PaginadorCertificacionesProps
> = ({ onClickCambiarPagina, cantidadTotalCertificaciones }) => {
  if (cantidadTotalCertificaciones <= CERTIFICACIONES_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(
        cantidadTotalCertificaciones / CERTIFICACIONES_VISIBLES_POR_PAGINA
      )
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

PaginadorCertificaciones.propTypes = {
  cantidadTotalCertificaciones: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
