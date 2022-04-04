import { EstadoCertificacion } from './EstadoCertificacion';
import { EstadoCliente } from './EstadoCliente';
import { EstadoExamen } from './EstadoExamen';
import { EstadoProducto } from './EstadoProducto';

export interface EstadoGeneral {
  productos: EstadoProducto;
  certificaciones: EstadoCertificacion;
  cliente: EstadoCliente;
  clientes: EstadoCliente;
  examenes: EstadoExamen;
}
