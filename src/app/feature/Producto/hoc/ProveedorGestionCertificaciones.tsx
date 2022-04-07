import {
  agregarNuevaCertificacionAsync,
  eliminarCertificacionAsync,
  listarCertificacionesAsync,
} from 'app/core/redux/acciones/certificaciones/CertificacionesAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionCertificaciones } from '../containers/GestionCertificaciones';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    certificaciones: state.estadoCertificaciones.certificaciones,
    mensajesCertificaciones:
      state.estadoCertificaciones.mensajesCertificaciones,
    cantidadTotalCertificacion:
      state.estadoCertificaciones.cantidadTotalCertificacion,
  };
};

export const ProveedorGestionCertificaciones = connect(mapStateToProps, {
  agregarNuevaCertificacion: agregarNuevaCertificacionAsync,
  listarCertificaciones: listarCertificacionesAsync,
  eliminarCertificacion: eliminarCertificacionAsync,
})(GestionCertificaciones);
