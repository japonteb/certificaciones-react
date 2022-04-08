import {
  AGREGAR_EXAMEN,
  AGREGAR_MENSAJE_ERROR_EXAMEN,
  LIMPIAR_MENSAJES_EXAMEN,
  LISTAR_EXAMENES_POR_CLIENTE,
  TiposAccionesExamen,
} from '../../acciones/examenes/ExamenesTiposAcciones';
import { EstadoExamen } from '../../modelo/EstadoExamen';
import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';

const initialState: EstadoExamen = {
  examenes: Array<ExamenPorCliente>(),
  cantidadTotalExamenPorCliente: 0,
  mensajesExamenes: '',
  hayError: false,
};

export default function (
  state = initialState,
  action: TiposAccionesExamen
): EstadoExamen {
  switch (action.type) {
    case AGREGAR_EXAMEN: {
      return {
        ...state,
        mensajesExamenes: action.mensajesExamenes,
      };
    }

    case AGREGAR_MENSAJE_ERROR_EXAMEN:
    case LIMPIAR_MENSAJES_EXAMEN: {
      return {
        ...state,
        mensajesExamenes: action.mensajesExamenes,
        hayError: action.hayError,
      };
    }

    case LISTAR_EXAMENES_POR_CLIENTE: {
      const examenes = action.payload;
      return {
        ...state,
        examenes,
        cantidadTotalExamenPorCliente: action.cantidadTotalExamenPorCliente,
      };
    }

    default:
      return state;
  }
}
