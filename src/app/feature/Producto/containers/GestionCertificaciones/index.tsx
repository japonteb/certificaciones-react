import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from '../styles';
import { Certificacion } from '../../models/Certificacion';
import { FormCrearCertificacion } from '../../components/certificacion/FormCrearCertificacion';
import { ListaCertificaciones } from '../../components/certificacion/ListarCertificaciones';
import { Message } from 'app/shared/components/Message';
import { PaginadorCertificaciones } from '../../components/certificacion/PaginadorCertificaciones';
import { useEffect } from 'react';

interface GestionCertificacionesProps {
  certificaciones: Array<Certificacion>;
  cantidadTotalCertificacion: number;
  mensajesCertificaciones: string;
  hayError: boolean;
  agregarNuevaCertificacion: (certificaciones: Certificacion) => void;
  eliminarCertificacion: (certificaciones: Certificacion) => void;
  listarCertificaciones: (numeroPagina: number) => void;
}

export const GestionCertificaciones: React.FC<GestionCertificacionesProps> = ({
  certificaciones,
  cantidadTotalCertificacion,
  mensajesCertificaciones,
  hayError,
  agregarNuevaCertificacion,
  eliminarCertificacion,
  listarCertificaciones,
}) => {
  useEffect(() => {
    listarCertificaciones(0);
  }, [listarCertificaciones]);
  return (
    <>
      <Message message={mensajesCertificaciones} hasError={hayError} />
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
    </>
  );
};

GestionCertificaciones.propTypes = {
  certificaciones: PropTypes.array.isRequired,
  cantidadTotalCertificacion: PropTypes.number.isRequired,
  mensajesCertificaciones: PropTypes.string.isRequired,
  hayError: PropTypes.bool.isRequired,
  agregarNuevaCertificacion: PropTypes.func.isRequired,
  eliminarCertificacion: PropTypes.func.isRequired,
  listarCertificaciones: PropTypes.func.isRequired,
};

GestionCertificaciones.defaultProps = {
  hayError: false,
};
