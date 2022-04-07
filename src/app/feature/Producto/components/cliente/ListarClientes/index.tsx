import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ContainerParagraph, Table } from 'app/shared/components/Layout/styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { Cliente } from 'app/feature/Producto/models/Cliente';
import { Link } from 'app/shared/components/Link';

export interface ListaClientesProps {
  clientes: Array<Cliente>;
}

export const ListaClientes: React.FC<ListaClientesProps> = ({ clientes }) => {
  return (
    <>
      <h2>Clientes</h2>
      <ContainerParagraph>Clientes registrados.</ContainerParagraph>
      <Table>
        <thead>
          <tr>
            <td>
              <b>Nombre</b>
            </td>
            <td>
              <b>Tipo de cliente</b>
            </td>
            <td>
              <b>Ver detalle</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente: Cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.tipoCliente}</td>
                <td>
                  <Link to={`clientes-por-id/${cliente.id}`}>
                    <AiOutlineSearch />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

ListaClientes.propTypes = {
  clientes: PropTypes.array.isRequired,
};
