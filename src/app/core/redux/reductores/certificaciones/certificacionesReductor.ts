import {
  AGREGAR_CERTIFICACION,
  ELIMINAR_CERTIFICACION,
  LISTAR_CERTIFICACIONES,
  TiposAccionesCertificacion,
} from './../../acciones/certificaciones/CertificacionesTiposAcciones';
import { Certificacion } from 'app/feature/Producto/models/Certificacion';
import { EstadoCertificacion } from '../../modelo/EstadoCertificacion';

const initialState: EstadoCertificacion = {
  certificaciones: Array<Certificacion>(),
  cantidadTotalCertificacion: 0,
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
      };
    }

    case ELIMINAR_CERTIFICACION: {
      const certificacion = action.payload;
      return {
        ...state,
        certificaciones: [
          ...state.certificaciones.filter((c) => c.id !== certificacion.id),
        ],
      };
    }

    default:
      return state;
  }
}
