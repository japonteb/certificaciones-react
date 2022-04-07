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
  listarClientes: (numeroPagina: number) => void;
  listarCertificaciones: (numeroPagina: number) => void;
  agregarNuevoExamen: (examenes: RegistrarExamen) => void;
}

export const GestionExamenes: React.FC<GestionExamenesProps> = ({
  clientes,
  certificaciones,
  mensajesExamenes,
  hayError,
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
      <Message message={mensajesExamenes} hasError={hayError} />
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
  listarClientes: PropTypes.func.isRequired,
  listarCertificaciones: PropTypes.func.isRequired,
  agregarNuevoExamen: PropTypes.func.isRequired,
};

GestionExamenes.defaultProps = {
  hayError: false,
};
