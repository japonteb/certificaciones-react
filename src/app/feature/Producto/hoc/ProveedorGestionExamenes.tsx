import {
  agregarNuevoExamenAsync,
  limpiarMensajeExamen,
} from 'app/core/redux/acciones/examenes/ExamenesAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionExamenes } from '../containers/GestionExamenes';
import { connect } from 'react-redux';
import { listarCertificacionesAsync } from 'app/core/redux/acciones/certificaciones/CertificacionesAcciones';
import { listarClientesAsync } from 'app/core/redux/acciones/clientes/ClientesAcciones';

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    clientes: state.estadoClientes.clientes,
    certificaciones: state.estadoCertificaciones.certificaciones,
    mensajesExamenes: state.estadoExamenes.mensajesExamenes,
    hayError: state.estadoExamenes.hayError,
  };
};

export const ProveedorGestionExamenes = connect(mapStateToProps, {
  listarClientes: listarClientesAsync,
  listarCertificaciones: listarCertificacionesAsync,
  agregarNuevoExamen: agregarNuevoExamenAsync,
  limpiarMensajeExamen,
})(GestionExamenes);
