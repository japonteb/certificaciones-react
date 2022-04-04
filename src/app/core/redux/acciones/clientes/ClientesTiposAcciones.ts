import { Cliente } from 'app/feature/Producto/models/Cliente';

export const LISTAR_CLIENTES = 'LISTAR_CLIENTES';
export const OBTENER_DETALLE_CLIENTE = 'OBTENER_DETALLE_CLIENTE';

interface AccionListarClientes {
  type: typeof LISTAR_CLIENTES;
  payload: Cliente[];
  cantidadTotalCliente: number;
}

interface AccionObtenerDetalleCliente {
  type: typeof OBTENER_DETALLE_CLIENTE;
  payload: Cliente;
}

export type TiposAccionesCliente =
  | AccionListarClientes
  | AccionObtenerDetalleCliente;
