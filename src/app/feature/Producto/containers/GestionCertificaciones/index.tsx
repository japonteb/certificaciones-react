import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Certificacion } from '../../models/Certificacion';
import { FormCrearCertificacion } from '../../components/FormCrearCertificacion';
import { ListaCertificaciones } from '../../components/ListarCertificaciones';
import { PaginadorCertificaciones } from '../../components/PaginadorCertificaciones';
import { useEffect } from 'react';

interface GestionCertificacionesProps {
  certificaciones: Array<Certificacion>;
  agregarNuevaCertificacion: (certificaciones: Certificacion) => void;
  listarCertificaciones: (numeroPagina: number) => void;
  cantidadTotalCertificacion: number;
  eliminarCertificacion: (certificaciones: Certificacion) => void;
}

export const GestionCertificaciones: React.FC<GestionCertificacionesProps> = ({
  agregarNuevaCertificacion,
  certificaciones,
  listarCertificaciones,
  cantidadTotalCertificacion,
  eliminarCertificacion,
}) => {
  useEffect(() => {
    listarCertificaciones(0);
  }, [listarCertificaciones]);
  return (
    <DivContainer>
      <DivRow>
        <FormCrearCertificacion
          onSubmit={agregarNuevaCertificacion}
          formTitle="Crear certificación"
        />
      </DivRow>
      <DivRow>
        <ListaCertificaciones
          certificaciones={certificaciones}
          onClickEliminarCertificacion={eliminarCertificacion}
        />
        <PaginadorCertificaciones
          cantidadTotalCertificaciones={cantidadTotalCertificacion}
          onClickCambiarPagina={listarCertificaciones}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionCertificaciones.propTypes = {
  certificaciones: PropTypes.array.isRequired,
  listarCertificaciones: PropTypes.func.isRequired,
  cantidadTotalCertificacion: PropTypes.number.isRequired,
  agregarNuevaCertificacion: PropTypes.func.isRequired,
  eliminarCertificacion: PropTypes.func.isRequired,
};
