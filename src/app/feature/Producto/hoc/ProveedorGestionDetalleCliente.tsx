import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionDetalleCliente } from '../containers/GestionDetalleCliente';
import { connect } from 'react-redux';
import { listarExamenesPorClienteAsync } from 'app/core/redux/acciones/examenes/ExamenesAcciones';
import { obtenerDetalleClienteAsync } from 'app/core/redux/acciones/clientes/ClientesAcciones';

const mapStateToProps = (
  state: EstadoGeneral,
  { clienteId }: { clienteId: string }
) => {
  return {
    examenes: state.estadoExamenes.examenes,
    cliente: state.estadoClientes.cliente,
    cantidadTotalExamenPorCliente:
      state.estadoExamenes.cantidadTotalExamenPorCliente,
    clienteId: Number(clienteId),
  };
};

export const ProveedorGestionDetalleCliente = connect(mapStateToProps, {
  obtenerDetalleCliente: obtenerDetalleClienteAsync,
  listarExamenesPorCliente: listarExamenesPorClienteAsync,
})(GestionDetalleCliente);
