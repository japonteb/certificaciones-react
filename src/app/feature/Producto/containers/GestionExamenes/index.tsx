import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from '../styles';
import { Certificacion } from '../../models/Certificacion';
import { Cliente } from '../../models/Cliente';
import { FormCrearExamen } from '../../components/examen/FormCrearExamen';
import { RegistrarExamen } from '../../models/RegistrarExamen';
import { useEffect } from 'react';

interface GestionExamenesProps {
  clientes: Array<Cliente>;
  certificaciones: Array<Certificacion>;
  listarClientes: (numeroPagina: number) => void;
  listarCertificaciones: (numeroPagina: number) => void;
  agregarNuevoExamen: (examenes: RegistrarExamen) => void;
}

export const GestionExamenes: React.FC<GestionExamenesProps> = ({
  clientes,
  certificaciones,
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
  listarClientes: PropTypes.func.isRequired,
  listarCertificaciones: PropTypes.func.isRequired,
  agregarNuevoExamen: PropTypes.func.isRequired,
};
