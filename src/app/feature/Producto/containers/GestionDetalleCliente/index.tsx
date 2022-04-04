import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from '../styles';
import { Cliente } from '../../models/Cliente';
import { ExamenPorCliente } from '../../models/ExamenPorCliente';
import { ListaExamenesPorCliente } from '../../components/cliente/ListarExamenesPorCliente';
import { ObtieneDetalleCliente } from '../../components/cliente/ObtenerDetalleCliente';
import { PaginadorExamenesPorCliente } from '../../components/cliente/PaginadorExamenesPorCliente';
import { useEffect } from 'react';
import { ContainerParagraph } from 'app/shared/components/Layout/styles';

interface GestionDetalleClienteProps {
  examenes: Array<ExamenPorCliente>;
  cliente: Cliente;
  obtenerDetalleCliente: () => void;
  listarExamenesPorCliente: (numeroPagina: number) => void;
  cantidadTotalExamenPorCliente: number;
}

export const GestionDetalleCliente: React.FC<GestionDetalleClienteProps> = ({
  examenes,
  cliente,
  obtenerDetalleCliente,
  listarExamenesPorCliente,
  cantidadTotalExamenPorCliente,
}) => {
  useEffect(() => {
    obtenerDetalleCliente();
    listarExamenesPorCliente(2);
  }, [obtenerDetalleCliente, listarExamenesPorCliente]);
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
  obtenerDetalleCliente: PropTypes.func.isRequired,
  listarExamenesPorCliente: PropTypes.func.isRequired,
  cantidadTotalExamenPorCliente: PropTypes.number.isRequired,
};
