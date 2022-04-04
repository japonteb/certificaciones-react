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
  return function (dispacth: any) {
    ClienteRepositorio.consultarPorPagina().then((respuesta: any) =>
      dispacth(listarClientes(respuesta.data, 6))
    );
  };
}

export function obtenerDetalleCliente(cliente: Cliente): TiposAccionesCliente {
  return {
    type: OBTENER_DETALLE_CLIENTE,
    payload: cliente,
  };
}

export function obtenerDetalleClienteAsync() {
  return function (dispacth: any) {
    ClienteRepositorio.consultarClientePorId(2).then((respuesta: any) =>
      dispacth(obtenerDetalleCliente(respuesta.data))
    );
  };
}
