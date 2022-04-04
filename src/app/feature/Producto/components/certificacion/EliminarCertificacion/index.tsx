import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';

interface BtnEliminarCertificacionProps {
  onEliminar: (certificacion: Certificacion) => any;
  certificacion: Certificacion;
}

export const BtnEliminarCertificacion: React.FC<
  BtnEliminarCertificacionProps
> = ({ onEliminar, certificacion }) => {
  const handleEliminar = () => onEliminar(certificacion);
  return (
    <Button onClick={handleEliminar}>
      <span role="img" aria-labelledby="trash">
        🗑️
      </span>
    </Button>
  );
};

BtnEliminarCertificacion.propTypes = {
  certificacion: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    detalle: PropTypes.string.isRequired,
    duracion: PropTypes.number.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  onEliminar: PropTypes.func.isRequired,
};
