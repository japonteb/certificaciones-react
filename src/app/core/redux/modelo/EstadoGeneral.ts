import { EstadoCertificacion } from './EstadoCertificacion';
import { EstadoCliente } from './EstadoCliente';
import { EstadoExamen } from './EstadoExamen';
import { EstadoProducto } from './EstadoProducto';

export interface EstadoGeneral {
  estadoProductos: EstadoProducto;
  estadoCertificaciones: EstadoCertificacion;
  estadoClientes: EstadoCliente;
  estadoExamenes: EstadoExamen;
}
