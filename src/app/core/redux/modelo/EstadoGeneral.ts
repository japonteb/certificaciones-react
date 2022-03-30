import { EstadoCertificacion } from './EstadoCertificacion';
import { EstadoCliente } from './EstadoCliente';
import { EstadoProducto } from './EstadoProducto';

export interface EstadoGeneral {
  productos: EstadoProducto;
  certificaciones: EstadoCertificacion;
  clientes: EstadoCliente;
}
