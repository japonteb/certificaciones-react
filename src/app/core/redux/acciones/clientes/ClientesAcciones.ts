import { LISTAR_CLIENTES, TiposAccionesCliente } from './ClientesTiposAcciones';
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
