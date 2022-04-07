import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from '../styles';
import { Certificacion } from '../../models/Certificacion';
import { Cliente } from '../../models/Cliente';
import { FormCrearExamen } from '../../components/examen/FormCrearExamen';
import { Message } from 'app/shared/components/Message';
import { RegistrarExamen } from '../../models/RegistrarExamen';
import { useEffect } from 'react';

interface GestionExamenesProps {
  clientes: Array<Cliente>;
  certificaciones: Array<Certificacion>;
  mensajesExamenes: string;
  hayError: boolean;
  limpiarMensajeExamen: () => void;
  listarClientes: (numeroPagina: number) => void;
  listarCertificaciones: (numeroPagina: number) => void;
  agregarNuevoExamen: (examen: RegistrarExamen) => void;
}

export const GestionExamenes: React.FC<GestionExamenesProps> = ({
  clientes,
  certificaciones,
  mensajesExamenes,
  hayError,
  limpiarMensajeExamen,
  listarClientes,
  listarCertificaciones,
  agregarNuevoExamen,
}) => {
  useEffect(() => {
    listarClientes(0);
    listarCertificaciones(0);
  }, [listarClientes, listarCertificaciones]);
  return (
    <DivContainer>
      <Message
        message={mensajesExamenes}
        hasError={hayError}
        cleanMessage={limpiarMensajeExamen}
      />
      <DivRow>
        <FormCrearExamen
          clientes={clientes}
          certificaciones={certificaciones}
          onSubmit={agregarNuevoExamen}
          formTitle="Programar examen"
        />
      </DivRow>
    </DivContainer>
  );
};

GestionExamenes.propTypes = {
  clientes: PropTypes.array.isRequired,
  certificaciones: PropTypes.array.isRequired,
  mensajesExamenes: PropTypes.string.isRequired,
  hayError: PropTypes.bool.isRequired,
  limpiarMensajeExamen: PropTypes.func.isRequired,
  listarClientes: PropTypes.func.isRequired,
  listarCertificaciones: PropTypes.func.isRequired,
  agregarNuevoExamen: PropTypes.func.isRequired,
};

GestionExamenes.defaultProps = {
  hayError: false,
};
