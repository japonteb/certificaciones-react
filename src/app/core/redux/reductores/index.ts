import certificaciones from './certificaciones/certificacionesReductor';
import cliente from './clientes/clientesReductor';
import clientes from './clientes/clientesReductor';
import { combineReducers } from 'redux';
import examenes from './examenes/examenesReductor';
import productos from './productos/productosReductor';

export default combineReducers({
  productos,
  certificaciones,
  cliente,
  clientes,
  examenes,
});
