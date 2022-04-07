import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from '../styles';
import { Cliente } from '../../models/Cliente';
import { ContainerParagraph } from 'app/shared/components/Layout/styles';
import { ExamenPorCliente } from '../../models/ExamenPorCliente';
import { ListaExamenesPorCliente } from '../../components/cliente/ListarExamenesPorCliente';
import { ObtieneDetalleCliente } from '../../components/cliente/ObtenerDetalleCliente';
import { PaginadorExamenesPorCliente } from '../../components/cliente/PaginadorExamenesPorCliente';
import { useEffect } from 'react';

interface GestionDetalleClienteProps {
  examenes: Array<ExamenPorCliente>;
  cliente: Cliente;
  clienteId: number;
  obtenerDetalleCliente: (clienteId: number) => void;
  listarExamenesPorCliente: (clienteId: number) => void;
  cantidadTotalExamenPorCliente: number;
}

export const GestionDetalleCliente: React.FC<GestionDetalleClienteProps> = ({
  examenes,
  cliente,
  clienteId,
  obtenerDetalleCliente,
  listarExamenesPorCliente,
  cantidadTotalExamenPorCliente,
}) => {
  useEffect(() => {
    obtenerDetalleCliente(clienteId);
    listarExamenesPorCliente(clienteId);
  }, [obtenerDetalleCliente, listarExamenesPorCliente, clienteId]);
  return (
    <DivContainer>
      <DivRow>
        <ObtieneDetalleCliente cliente={cliente} />
        <ContainerParagraph>Exámenes programados.</ContainerParagraph>
        <ListaExamenesPorCliente examenes={examenes} />
        <PaginadorExamenesPorCliente
          cantidadTotalExamenesPorCliente={cantidadTotalExamenPorCliente}
          onClickCambiarPagina={listarExamenesPorCliente}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionDetalleCliente.propTypes = {
  examenes: PropTypes.array.isRequired,
  cliente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    tipoCliente: PropTypes.number.isRequired,
  }).isRequired,
  clienteId: PropTypes.number.isRequired,
  obtenerDetalleCliente: PropTypes.func.isRequired,
  listarExamenesPorCliente: PropTypes.func.isRequired,
  cantidadTotalExamenPorCliente: PropTypes.number.isRequired,
};
