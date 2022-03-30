import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BtnEliminarCertificacion } from '../EliminarCertificacion';
import { Certificacion } from '../../models/Certificacion';
import { Table } from './styles';

export interface ListaCertificacionesProps {
  certificaciones: Array<Certificacion>;
  onClickEliminarCertificacion: (certificaciones: Certificacion) => void;
}

export const ListaCertificaciones: React.FC<ListaCertificacionesProps> = ({
  certificaciones,
  onClickEliminarCertificacion,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <b>Nombre</b>
          </td>
          <td>
            <b>Detalle</b>
          </td>
          <td>
            <b>Duración</b>
          </td>
          <td>
            <b>Precio</b>
          </td>
          <td>
            <b>Eliminar</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {certificaciones.map((certificacion: Certificacion) => {
          return (
            <tr key={certificacion.id}>
              <td>{certificacion.nombre}</td>
              <td>{certificacion.detalle}</td>
              <td>{certificacion.duracion}</td>
              <td>{certificacion.precio}</td>
              <td>
                <BtnEliminarCertificacion
                  certificacion={certificacion}
                  onEliminar={onClickEliminarCertificacion}
                ></BtnEliminarCertificacion>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListaCertificaciones.propTypes = {
  certificaciones: PropTypes.array.isRequired,
  onClickEliminarCertificacion: PropTypes.func.isRequired,
};
