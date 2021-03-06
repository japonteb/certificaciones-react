import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionClientes } from '../containers/GestionClientes';
import { connect } from 'react-redux';
import { listarClientesAsync } from 'app/core/redux/acciones/clientes/ClientesAcciones';

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    clientes: state.estadoClientes.clientes,
    cantidadTotalCliente: state.estadoClientes.cantidadTotalCliente,
  };
};

export const ProveedorGestionClientes = connect(mapStateToProps, {
  listarClientes: listarClientesAsync,
})(GestionClientes);
