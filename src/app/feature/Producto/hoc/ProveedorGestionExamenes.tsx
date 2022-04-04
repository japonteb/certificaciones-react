import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionExamenes } from '../containers/GestionExamenes';
import { agregarNuevoExamenAsync } from 'app/core/redux/acciones/examenes/ExamenesAcciones';
import { connect } from 'react-redux';
import { listarCertificacionesAsync } from 'app/core/redux/acciones/certificaciones/CertificacionesAcciones';
import { listarClientesAsync } from 'app/core/redux/acciones/clientes/ClientesAcciones';

const mapStateToProps = (state: EstadoGeneral) => {
  return { ...state.clientes, ...state.certificaciones };
};

export const ProveedorGestionExamenes = connect(mapStateToProps, {
  listarClientes: listarClientesAsync,
  listarCertificaciones: listarCertificacionesAsync,
  agregarNuevoExamen: agregarNuevoExamenAsync,
})(GestionExamenes);
