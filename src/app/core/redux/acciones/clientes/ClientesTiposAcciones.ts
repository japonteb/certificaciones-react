import { Cliente } from 'app/feature/Producto/models/Cliente';

export const LISTAR_CLIENTES = 'LISTAR_CLIENTES';

interface AccionListarClientes {
  type: typeof LISTAR_CLIENTES;
  payload: Cliente[];
  cantidadTotalCliente: number;
}

export type TiposAccionesCliente = AccionListarClientes;
