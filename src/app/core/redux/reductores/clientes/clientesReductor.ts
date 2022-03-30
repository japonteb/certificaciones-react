import {
  LISTAR_CLIENTES,
  TiposAccionesCliente,
} from '../../acciones/clientes/ClientesTiposAcciones';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { EstadoCliente } from '../../modelo/EstadoCliente';

const initialState: EstadoCliente = {
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

    default:
      return state;
  }
}
