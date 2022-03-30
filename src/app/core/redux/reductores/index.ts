import certificaciones from './certificaciones/certificacionesReductor';
import clientes from './clientes/clientesReductor';
import { combineReducers } from 'redux';
import productos from './productos/productosReductor';

export default combineReducers({ productos, certificaciones, clientes });
