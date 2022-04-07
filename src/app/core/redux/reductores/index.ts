import { combineReducers } from 'redux';
import estadoCertificaciones from './certificaciones/certificacionesReductor';
import estadoClientes from './clientes/clientesReductor';
import estadoExamenes from './examenes/examenesReductor';
import estadoProductos from './productos/productosReductor';

export default combineReducers({
  estadoProductos,
  estadoCertificaciones,
  estadoClientes,
  estadoExamenes,
});
