import {
  AGREGAR_EXAMEN,
  LISTAR_EXAMENES_POR_CLIENTE,
  TiposAccionesExamen,
} from '../../acciones/examenes/ExamenesTiposAcciones';
import { EstadoExamen } from '../../modelo/EstadoExamen';
import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';

const initialState: EstadoExamen = {
  examenes: Array<ExamenPorCliente>(),
  cantidadTotalExamenPorCliente: 0,
};

export default function (
  state = initialState,
  action: TiposAccionesExamen
): EstadoExamen {
  switch (action.type) {
    case AGREGAR_EXAMEN: {
      return {
        ...state,
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
