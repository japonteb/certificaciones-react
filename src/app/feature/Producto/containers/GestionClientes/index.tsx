import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Cliente } from '../../models/Cliente';
import { ListaClientes } from '../../components/ListarClientes';
import { PaginadorClientes } from '../../components/PaginadorClientes';
import { useEffect } from 'react';

interface GestionClientesProps {
  clientes: Array<Cliente>;
  listarClientes: (numeroPagina: number) => void;
  cantidadTotalCliente: number;
}

export const GestionClientes: React.FC<GestionClientesProps> = ({
  clientes,
  listarClientes,
  cantidadTotalCliente,
}) => {
  useEffect(() => {
    listarClientes(0);
  }, [listarClientes]);
  return (
    <DivContainer>
      <DivRow>
        <ListaClientes clientes={clientes} />
        <PaginadorClientes
          cantidadTotalClientes={cantidadTotalCliente}
          onClickCambiarPagina={listarClientes}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionClientes.propTypes = {
  clientes: PropTypes.array.isRequired,
  listarClientes: PropTypes.func.isRequired,
  cantidadTotalCliente: PropTypes.number.isRequired,
};
