import {
  LISTAR_CLIENTES,
  OBTENER_DETALLE_CLIENTE,
  TiposAccionesCliente,
} from './ClientesTiposAcciones';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { ClienteRepositorio } from 'app/core/api/clientes.repositorio';

export function listarClientes(
  clientes: Array<Cliente>,
  cantidadTotalCliente: number
): TiposAccionesCliente {
  return {
    type: LISTAR_CLIENTES,
    payload: clientes,
    cantidadTotalCliente,
  };
}

export function listarClientesAsync() {
  const CANTIDAD_REGISTROS_POR_DEFECTO = 6;
  return function (dispacth: any) {
    ClienteRepositorio.consultarPorPagina().then((respuesta: any) =>
      dispacth(listarClientes(respuesta.data, CANTIDAD_REGISTROS_POR_DEFECTO))
    );
  };
}

export function obtenerDetalleCliente(cliente: Cliente): TiposAccionesCliente {
  return {
    type: OBTENER_DETALLE_CLIENTE,
    payload: cliente,
  };
}

export function obtenerDetalleClienteAsync(clienteId: number) {
  return function (dispacth: any) {
    ClienteRepositorio.consultarClientePorId(clienteId).then((respuesta: any) =>
      dispacth(obtenerDetalleCliente(respuesta.data))
    );
  };
}
