import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { ContainerParagraph } from 'app/shared/components/Layout/styles';
import { DetailSpan } from './styles';

export interface ObtieneDetalleClienteProps {
  cliente: Cliente;
}

export const ObtieneDetalleCliente: React.FC<ObtieneDetalleClienteProps> = ({
  cliente,
}) => {
  return (
    <div>
      <h2>Cliente</h2>
      <ContainerParagraph>Detalle del cliente</ContainerParagraph>
      <h4>
        Nombre: <DetailSpan>{cliente.nombre}</DetailSpan>
      </h4>
      <h4>
        Tipo de cliente: <DetailSpan>{cliente.tipoCliente}</DetailSpan>
      </h4>
    </div>
  );
};

ObtieneDetalleCliente.propTypes = {
  cliente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    tipoCliente: PropTypes.number.isRequired,
  }).isRequired,
};
