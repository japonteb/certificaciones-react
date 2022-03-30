import { Cliente } from 'app/feature/Producto/models/Cliente';

export interface EstadoCliente {
  clientes: Cliente[];
  cantidadTotalCliente: number;
}
