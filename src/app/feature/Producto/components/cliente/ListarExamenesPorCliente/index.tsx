import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ExamenPorCliente } from 'app/feature/Producto/models/ExamenPorCliente';
import { Table } from 'app/shared/components/Layout/styles';

export interface ListaExamenesPorClienteProps {
  examenes: Array<ExamenPorCliente>;
}

export const ListaExamenesPorCliente: React.FC<
  ListaExamenesPorClienteProps
> = ({ examenes }) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <b>Nombre certificación</b>
          </td>
          <td>
            <b>Detalle certificación</b>
          </td>
          <td>
            <b>Fecha presentación</b>
          </td>
          <td>
            <b>Precio total</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {examenes.map((examen: ExamenPorCliente) => {
          return (
            <tr key={examen.id}>
              <td>{examen.nombre}</td>
              <td>{examen.detalle}</td>
              <td>{examen.fechaPresentacion}</td>
              <td>{examen.precioTotal}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListaExamenesPorCliente.propTypes = {
  examenes: PropTypes.array.isRequired,
};
