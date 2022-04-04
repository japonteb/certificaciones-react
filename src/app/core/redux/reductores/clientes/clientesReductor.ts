import {
  LISTAR_CLIENTES,
  OBTENER_DETALLE_CLIENTE,
  TiposAccionesCliente,
} from '../../acciones/clientes/ClientesTiposAcciones';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { EstadoCliente } from '../../modelo/EstadoCliente';

const initialState: EstadoCliente = {
  cliente: {
    id: -1,
    nombre: 'Javier',
    tipoCliente: 4,
  },
  clientes: Array<Cliente>(),
  cantidadTotalCliente: 0,
};

export default function (
  state = initialState,
  action: TiposAccionesCliente
): EstadoCliente {
  switch (action.type) {
    case LISTAR_CLIENTES: {
      const clientes = action.payload;
      return {
        ...state,
        clientes,
        cantidadTotalCliente: action.cantidadTotalCliente,
      };
    }

    case OBTENER_DETALLE_CLIENTE: {
      const cliente = action.payload;
      return {
        ...state,
        cliente,
      };
    }

    default:
      return state;
  }
}
