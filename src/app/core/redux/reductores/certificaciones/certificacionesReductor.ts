import {
  AGREGAR_CERTIFICACION,
  AGREGAR_MENSAJE_ERROR_CERTIFICACION,
  ELIMINAR_CERTIFICACION,
  LIMPIAR_MENSAJES_CERTIFICACION,
  LISTAR_CERTIFICACIONES,
  TiposAccionesCertificacion,
} from './../../acciones/certificaciones/CertificacionesTiposAcciones';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { EstadoCertificacion } from '../../modelo/EstadoCertificacion';

const initialState: EstadoCertificacion = {
  certificaciones: Array<Certificacion>(),
  cantidadTotalCertificacion: 0,
  mensajesCertificaciones: '',
  hayError: false,
};

export default function (
  state = initialState,
  action: TiposAccionesCertificacion
): EstadoCertificacion {
  switch (action.type) {
    case LISTAR_CERTIFICACIONES: {
      const certificaciones = action.payload;
      return {
        ...state,
        certificaciones,
        cantidadTotalCertificacion: action.cantidadTotalCertificacion,
      };
    }

    case AGREGAR_CERTIFICACION: {
      const certificacion = action.payload;
      return {
        ...state,
        certificaciones: [...state.certificaciones, certificacion],
        mensajesCertificaciones: action.mensajesCertificaciones,
      };
    }

    case AGREGAR_MENSAJE_ERROR_CERTIFICACION:
    case LIMPIAR_MENSAJES_CERTIFICACION: {
      return {
        ...state,
        mensajesCertificaciones: action.mensajesCertificaciones,
        hayError: action.hayError,
      };
    }

    case ELIMINAR_CERTIFICACION: {
      const certificacion = action.payload;
      return {
        ...state,
        certificaciones: [
          ...state.certificaciones.filter((c) => c.id !== certificacion.id),
        ],
        mensajesCertificaciones: action.mensajesCertificaciones,
      };
    }

    default:
      return state;
  }
}
