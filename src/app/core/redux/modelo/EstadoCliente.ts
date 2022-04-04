import { Cliente } from 'app/feature/Producto/models/Cliente';

export interface EstadoCliente {
  cliente: Cliente;
  clientes: Cliente[];
  cantidadTotalCliente: number;
}
