import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionDetalleCliente } from '../containers/GestionDetalleCliente';
import { connect } from 'react-redux';
import { listarExamenesPorClienteAsync } from 'app/core/redux/acciones/examenes/ExamenesAcciones';
import { obtenerDetalleClienteAsync } from 'app/core/redux/acciones/clientes/ClientesAcciones';

const mapStateToProps = (state: EstadoGeneral) => {
  return { ...state.examenes, ...state.cliente };
};

export const ProveedorGestionDetalleCliente = connect(mapStateToProps, {
  obtenerDetalleCliente: obtenerDetalleClienteAsync,
  listarExamenesPorCliente: listarExamenesPorClienteAsync,
})(GestionDetalleCliente);
